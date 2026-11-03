# Translations

One folder per language, named by its language code (`ko` for Korean). Each is laid out like the book itself, so the editor's compiler works on it unchanged:

```
translations/
  ko/
    book.json          # compile settings: separator, translated chapter headings
    glossary.md        # names, terms, forms of address and speech levels; the source of truth for every chapter
    status.md          # which source version each translated scene was made from
    manuscript/
      01-chapter-one/
        01-the-opening.rotating-third.md   # same names as manuscript/, prose only
    compiled/          # generated; not committed
```

## Rules

- **Translate from `manuscript/`, never from `compiled/`.** One translated file per scene, with the source file's exact name, so the two folders mirror each other.
- **Scene files hold prose only**, as in `manuscript/`. Notes go in `glossary.md` or `status.md`.
- **The glossary comes first.** Before translating a chapter, read the glossary; when the chapter brings a new name, term or speaker, add it in the same change. Speech levels in particular must stay consistent from chapter to chapter (Korean picks a level for every line, and a level shift reads as a voice shift; see `AGENTS.md` §4).
- **Record the source version.** In `status.md`, give each scene the short commit hash of the source file it was translated from (`git log -1 --format=%h -- <file>`). A scene is stale when the source has commits after that hash: `git log --oneline <hash>..HEAD -- <file>`.
- **Translate meaning, not the original's wording**: puns, idioms and jokes get an equivalent in the target language, noted in the glossary when it's a recurring choice.
- **Compile** with `node ~/workspace/local_editor/bin/compile.mjs translations/ko` from the book folder. Chapter headings come from `chapterTitles` in the language's `book.json`.
