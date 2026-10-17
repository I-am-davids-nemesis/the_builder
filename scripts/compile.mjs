#!/usr/bin/env node
// Compile scene files into whole chapters and a whole book, one file per
// narrative mode (AGENTS.md §7). Follows the editor's compile rules
// (~/workspace/local_editor/PLAN.md): chapter headings come from the folder
// names, and scenes are joined with `* * *`.
//
//   node scripts/compile.mjs                      every chapter, every mode
//   node scripts/compile.mjs 03-chapter-three     one chapter (folder name or number)
//   node scripts/compile.mjs --mode camera        one mode
//
// Output goes to compiled/ (gitignored):
//   compiled/<chapter>.<mode>.md   and   compiled/book.<mode>.md
// The book file is written only when every chapter is compiled.

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MANUSCRIPT = join(ROOT, 'manuscript');
const OUT = join(ROOT, 'compiled');

const CHAPTER_RE = /^(\d+)[-_ ](.+)$/;
const SCENE_RE = /^(\d+)[-_ ]([^.]+)(?:\.([^.]+))?\.md$/i;
const SMALL_WORDS = new Set(['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'vs']);

function titleize(slug) {
  return slug
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w, i) => (i > 0 && SMALL_WORDS.has(w.toLowerCase()) ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1)))
    .join(' ');
}

function parseArgs(argv) {
  const opts = { chapters: [], modes: [] };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--mode') opts.modes.push(argv[++i]);
    else if (argv[i].startsWith('--mode=')) opts.modes.push(argv[i].slice(7));
    else opts.chapters.push(argv[i]);
  }
  return opts;
}

async function loadChapters() {
  const entries = await readdir(MANUSCRIPT, { withFileTypes: true });
  const chapters = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const m = CHAPTER_RE.exec(e.name);
    if (!m) continue;
    const scenes = [];
    for (const f of await readdir(join(MANUSCRIPT, e.name))) {
      const s = SCENE_RE.exec(f);
      if (s) scenes.push({ file: f, num: Number(s[1]), slug: s[2], mode: s[3] ?? null });
    }
    scenes.sort((a, b) => a.num - b.num || a.file.localeCompare(b.file));
    chapters.push({ name: e.name, num: Number(m[1]), title: titleize(m[2]), scenes });
  }
  return chapters.sort((a, b) => a.num - b.num);
}

function matches(chapter, wanted) {
  return wanted.some((w) => w === chapter.name || Number(w) === chapter.num);
}

async function compileChapter(chapter, mode, warnings) {
  // A scene without a mode suffix belongs to every mode.
  const bySceneNum = new Map();
  for (const s of chapter.scenes) {
    if (s.mode !== null && s.mode !== mode) continue;
    if (!bySceneNum.has(s.num) || s.mode === mode) bySceneNum.set(s.num, s);
  }
  const allNums = [...new Set(chapter.scenes.map((s) => s.num))].sort((a, b) => a - b);
  for (const n of allNums) {
    if (!bySceneNum.has(n)) {
      const slug = chapter.scenes.find((s) => s.num === n).slug;
      warnings.push(`${chapter.name}: scene ${String(n).padStart(2, '0')}-${slug} has no ${mode} file`);
    }
  }
  const parts = [];
  for (const n of allNums) {
    const s = bySceneNum.get(n);
    if (!s) continue;
    const text = (await readFile(join(MANUSCRIPT, chapter.name, s.file), 'utf8')).trim();
    if (text) parts.push(text);
  }
  return { body: `# ${chapter.title}\n\n${parts.join('\n\n* * *\n\n')}\n`, scenes: parts.length };
}

function words(text) {
  return (text.match(/[A-Za-z0-9’'—-]+/g) ?? []).length;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const all = await loadChapters();
  const chapters = opts.chapters.length ? all.filter((c) => matches(c, opts.chapters)) : all;
  if (!chapters.length) {
    console.error(`No chapters match: ${opts.chapters.join(', ')}`);
    process.exit(1);
  }
  const modes = opts.modes.length
    ? opts.modes
    : [...new Set(all.flatMap((c) => c.scenes.map((s) => s.mode)).filter(Boolean))].sort();

  await mkdir(OUT, { recursive: true });
  const warnings = [];
  for (const mode of modes) {
    const book = [];
    for (const chapter of chapters) {
      const { body, scenes } = await compileChapter(chapter, mode, warnings);
      if (!scenes) continue;
      const path = join(OUT, `${chapter.name}.${mode}.md`);
      await writeFile(path, body);
      book.push(body);
      console.log(`${chapter.name}.${mode}.md  ${scenes} scenes, ${words(body)} words`);
    }
    if (!opts.chapters.length && book.length) {
      const body = book.join('\n');
      await writeFile(join(OUT, `book.${mode}.md`), body);
      console.log(`book.${mode}.md  ${book.length} chapters, ${words(body)} words`);
    }
  }
  for (const w of warnings) console.warn(`warning: ${w}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
