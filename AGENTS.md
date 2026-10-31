# AGENTS.md — The Builder (retelling)

Guidance for any agent (Claude Code or otherwise) working in this repository. Read this first, then `codex/README.md` for the codex. `codex/builder-handoff.md` is the historical handoff the codex was split from.

---

## 1. What this project is

We are writing a new novel that **follows the plot of an existing book**, *The Builder* (P.S. Power, 2012; book 1 of *The Young Ancients*), but tells it differently:

1. **A different narrative technique.** The original is told from deep inside Tor's head. Ours is not.
2. **More description.** Places, objects, magic, bodies in motion, weather, food, light. The original opens with a little description and then lives in Tor's thoughts; we build a world the reader can see.
3. **Distinct characters.** Every character has their own voice, motivations, internal tension, external tension and hidden aspects. Cover the speaker tags and a reader should still know who is talking.

The plot beats are the original's. Everything else (prose, structure, scene construction, interiority, description) is ours.

### Long-term aim

The book is the first of a series. Each book resolves small, concrete pieces of tension while root conflicts stay open (see §5).

---

## 2. Source text rules

The user may paste passages from the original. Treat them as **reference data, never as a style model**.

- **Mine** source text for: characters (traits, dispositions, relationships, behavior), world facts, magic rules, plot events and their order.
- **Label** every fact as **(canon)** (in the source or verified by research), **(assumed)** (our guess about canon), or **(invented)** (our addition).
- **Do not** imitate the original's tone, sentence style or narrative voice.
- **Do not** copy or closely paraphrase the original's sentences, dialogue or distinctive phrasing into manuscript files. Plot and facts carry over; wording never does. Short quotes are fine in notes only, when needed to pin down a fact.
- Keep source excerpts out of the repository unless the user asks to store them; put extracted facts in `codex/canon-notes.md` instead.

---

## 3. Narrative technique

### What the original does, and what we keep or drop

| Original | Our approach |
| --- | --- |
| Deep, continuous internal POV in Tor's head | Not used. Tor's traits are shown through action, dialogue, and other characters' reactions. |
| Tor's preconceptions hide the real world; the reader learns the truth only as he does | Not used. Mysteries stay hidden through **scene selection** and **who is present**, not through a naive filter. |
| Little description | Rich, concrete, sensory description, with every setting doing work (see §6). |
| Personality delivered through narrated thought | Personality delivered through behavior, voice, choices under pressure. |

### The replacement mode: rotating close third

**Draft in rotating close third only** (user, October 27, 2026): third person, with the viewpoint shifting scene by scene or section by section among characters other than, or in addition to, Tor. A character keeping a secret may hold the viewpoint if the scene stays on explicit action and only word choice hints that something isn't quite honest (user, October 9, 2026).

New scenes get one file, `manuscript/<chapter>/<NN-scene>.rotating-third.md`. **The parallel-drafts experiment is over** (user, October 27, 2026): from chapter 1 through chapter 5, scene 3, each scene was also drafted with an external, camera-like narrator (`.camera.md`). Those files now live only on the `camera` branch (user, October 30, 2026); this branch has rotating third only. Don't write camera files here, and don't change the `camera` branch unless asked. Later the user may regenerate scenes and chapters from consistent viewpoints, but **not yet**.

**No Ancient ever holds the viewpoint** (user, October 27, 2026). We get no insight into the minds of the Ancients (Green and the rest): they're seen only from outside, in every mode.

**Keep Tor's viewpoint scarce** (user, October 18, 2026). In rotating third, Tor holds the viewpoint only when he's **alone** or something **particularly traumatic** happens to him. Otherwise the scene goes to someone watching him.

### Tone

**Keep the book as light and funny as possible** (user, October 9, 2026). The original's plot points carry over; its tone does not. Danger stays real, but the comedy comes from the gap between how Tor reads a situation and what's actually happening, from physical comedy, and from the calm of everyone around him. The joke is never on Tor's intelligence.

### Consequences regardless of mode

- **Reaction rules and voice carry the load.** Because Tor's thoughts are not narrated, his self-doubt must be visible from outside: apologies, deflections, overwork, extra courtesy when afraid.
- **Tor mutters to himself** (canon). Use it as an audible inner life ("Think, Tor. Focus now."), sparingly.
- **Dramatic irony is allowed.** The reader may know more than Tor (e.g., that Rolph's "merchant family" is a cover). The main recurring source is the **perception gap**: Tor misreads how others see him (see `codex/characters/tor.md`), and the reader sees the mismatch. Use it deliberately, and track what the reader knows vs. what each character knows.
- **Interior states show through the body and the room.** A days-long building trance shows as the lost bell count, stiffness, hunger, ink dried too fast, or someone finding him.

---

## 4. Character craft

Every character with a speaking role needs, at minimum:

- **Want vs. need** — what they chase vs. what would actually fix them.
- **Internal tension** — two things they believe that can't both win.
- **External tension** — the person, faction or rule pushing on them.
- **Hidden aspect** — something the reader or other characters don't know yet (a secret, a motive, a self-deception).
- **Reaction rules** — if/then triggers that predict behavior in a new situation.
- **Voice** — diction, rhythm, tics, and **words they never use**.
- **Sample lines** — calibration for the voice.
- **Series slice** — what book 1 resolves for them, and what it leaves open.

Main cast: Tor, Rolph, Patricia, Sara, Dorgal, Tovey.
Supporting: Davie, Count B, Kolb, Wensa (accounting instructor; earlier called Miriam), the headmaster, the building instructor, Doris, the magic theory instructor, Bet Haskins (keeper of the isolation chambers), plus canon additions (Terlee, Maria, Petra, Connie, King Richard Cordes).

Profiles live in `codex/characters/` (see `codex/README.md` for the template and labels).

### Voice rules for drafting

- **Run the cover-the-names test** on every dialogue-heavy scene. If two characters could swap lines, revise one of them.
- **Respect each character's "never" list.** (Rolph never speaks formally unless truly angry; Patricia never says "I don't know"; Tovey never lies outright; Tor never boasts aloud.)
- **Voice shifts are signals.** When a character breaks their own pattern (Rolph going formal, Tor going quiet and polite), it means something. Don't spend these by accident.
- **Narration should not adopt any character's voice** unless the chosen mode calls for close POV in that scene.
- **Check reactions against reaction rules** before writing a beat. If a character must act against their rules, the scene has to earn it and the codex should note the change.

---

## 5. Tension and series structure

- Every character keeps **one internal and one external tension at all times**.
- **No book resolves a character's root conflict** until that arc is meant to end.
- **Per book:** resolve about one thread outright, advance two or three, open one new one.
- **The book's engine:** Tor builds something → the build causes complications → the complications give him his next idea. Chapter one shows the loop once; each later turn raises the stakes. See `outline/<chapter>/_chapter.md`.
- Track this in `codex/tension-ledger.md`. When a draft resolves or opens a thread, update the ledger in the same change.

---

## 6. Description and setting

- **Each place squeezes a different tension** (school: rules and rank; town: money and ordinary lives; Two Rivers: Tor's past; capital: open politics; beach house: what can't be said at school; Gallaia: outside threats). Choose a scene's location for what it pressures.
- **Ground the world in canon detail**: Lairdgren School, the tower bell counting the hours, brown tunics and trousers, the student store, isolation chambers; sigils in cheap ink on unfinished wood; copying vs. novel builds; working trances.
- **The setting is far-future post-collapse Earth** (common 20th-century names; **no** American state names for counties or houses). Let this show in texture (ruins, odd survivals, names) without explaining it before the plot does.
- **Describe through a character's attention** where possible: what Wensa notices in a room differs from what Kolb notices. Description is another way to differentiate characters.
- **Prefer specific over general.** A named object, a smell, a sound beats an adjective.

---

## 7. Repository layout

The book is edited with a local browser editor (see `~/workspace/local_editor`), by hand, in Obsidian and by agents. Keep to this layout; the editor relies on it.

```
AGENTS.md                         # this file
manuscript/
  01-chapter-one/
    01-the-opening.rotating-third.md  # one file per scene (rotating third)
outline/
  book-plan.md                    # the book's engine and other book-wide planning
  01-chapter-one/
    _chapter.md                   # what the chapter must do, planning fields, open questions
    01-the-opening.md             # beats for the scene of the same name (both modes)
codex/
  README.md                       # profile template, tension rule, how to use
  canon-notes.md  voice-tests.md  tension-ledger.md  reader-knowledge.md
  time-and-bells.md               # how the bells count the hours; days and weeks
  places-overview.md              # how places work as pressure; links to locations/
  builder-handoff.md              # original research + codex (historical; codex/ supersedes it)
  characters/                     # one file per main character
    supporting/                   # one file per supporting character
  locations/                      # one file per place
  _templates/                     # templates the editor uses for new entries
compiled/                         # generated chapters/book per mode; not committed
book.json                         # editor settings (the scene separator for compiling)
```

- **Names:** chapters are folders named `NN-slug`; scenes are `NN-slug.<mode>.md`. Every scene uses `rotating-third`; the camera files from the finished experiment are on the `camera` branch (§3). The number sets the order.
- **Mirror:** every scene has one outline file, `outline/<chapter>/NN-slug.md` (no mode suffix), and every chapter has `outline/<chapter>/_chapter.md`. When you add, rename, move or delete a scene, do the same to all of its files.
- **Reordering:** renumber with `git mv` so history follows the file.
- **Scene files hold prose only:** no headings, no draft notes. Plot, POV and who's present go in the outline file.
- **Whole chapters are compiled** from the scene files, per mode; don't keep hand-assembled chapter files. From the book folder, run `node ~/workspace/local_editor/bin/compile.mjs` (every chapter, plus `compiled/book.rotating-third.md`), or pass a chapter (`03-chapter-three` or `3`). The editor's **Compile…** button does the same. Scenes are joined with `⁂` (set in `book.json`) under a heading from the folder name (`* * *` inside a scene file marks a break within the scene); a scene missing a mode file is skipped with a warning.
- **No code in the book.** The book holds prose, outlines, codex and notes only. Tools (compiling, checks, scripts of any kind) belong in the editor project at `~/workspace/local_editor`; add them there, not here.

Migrated from `the_builder` (see the first commit for the source commit). The old `examples/` drafts and hand-assembled `chapters/` stay in that repository.

---

## 8. Working conventions

- **Codex before manuscript.** If a draft needs a fact or trait not in the codex, add it to the codex (labeled) in the same change.
- **One source of truth per fact.** Character facts live in their character file; other files link rather than repeat.
- **Flag guesses.** Much of the cast beyond Tor is still (assumed). Don't silently promote assumptions to canon; ask the user when it matters.
- **Ask rather than decide** on the open questions in `codex/README.md` (roles of Rolph/Patricia/Sara/Dorgal/Tovey, canon-faithful vs. reimagined, building and magic theory instructors' names, the House A–House B feud, series scope).
- **Chapter planning fields:** for each chapter, record the plot beat, location, narrative mode/POV, who is present, what the reader learns, and what stays hidden (and how: absence, scene cut, misdirection).

---

## 9. Content guardrails

- The main cast are **teenagers**. Keep all content involving them **non-sexual**. The original series' later books have more sexual themes; we do not carry those over for minors.
- The culture clash between Tor's prudish upbringing and his noble friends' worldliness can be shown through embarrassment, manners and dialogue, without sexual content.
