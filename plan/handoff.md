# Handoff (October 18, 2026; updated after the user's answers)

Where the work stands, what's next, and what we're waiting on the user for. Read `AGENTS.md` first; this file only covers the current state.

## Current state

- **Chapters 1–3:** drafted in both modes (`manuscript/0N-*/NN-slug.camera.md` and `.rotating-third.md`), outlined, and committed. Chapter 3's last commit was `0e463e6` (Tovey walks home once the rage ends).
- **Chapter 4:** fully outlined, **not drafted**. Ten scene outlines in `outline/04-chapter-four/`, plus `_chapter.md` (elements 0–7 and 5a, engine table, planning fields, answered questions). Restructured October 18, 2026: a new scene 8 (the cold snap, with the proposals), broth and first flight renumbered to 9 and 10, the old proposals scene removed. `manuscript/04-chapter-four/` doesn't exist yet.
- **Codex:** updated through chapter 4's outline (Wensa, Dorgal, Marco and the black-eyed man, the shield test, the flying field, Austra, the proposals, Maria's school dance).
- **Git:** the local editor autosaves commits ("Autosave: Edit N files"). Check `git status` before starting.
- **Compile:** `node scripts/compile.mjs` (all chapters and modes, plus `compiled/book.<mode>.md`), or `node scripts/compile.mjs 4` for one chapter. `compiled/` is gitignored, and so is `.obsidian/`.

## Chapter 4 scenes (outlined; POVs approved October 18, 2026)

The chapter covers about a month. Tor holds the rotating-third viewpoint only when he's alone or something traumatic happens to him (`AGENTS.md` §3).

| # | File | Rotating-third POV |
| --- | --- | --- |
| 1 | `01-the-tests.md`: routine kept to the letter; tests (cutters, force, fire, smoke, hot wax); Wensa always near | Wensa (secret-keeper rule) |
| 2 | `02-the-introduction.md`: Dorgal, Marco and the black-eyed man corner Tor; he fetches Wensa and introduces her as a royal guard | Dorgal |
| 3 | `03-the-template.md`: two days in an isolation chamber; Rolph gets him excused; the lonely food dryer template; food, water, sleep | Rolph |
| 4 | `04-the-test.md`: Wensa's three rods; the fire; Kolb's twenty minutes and cutter; "it was meant for a pell"; the headmaster; the ten shields shared out (Tor, Rolph, Trice, Sara, Tovey; the rest to the school for Kolb); Sara's deal; Trice's template idea; the scale | Sara |
| 5 | `05-interlude.md`: shield versions; copies (drying fields for students, shields for the school, food dryers for Sara to send home for sale); templates shipped to the Debri house; Tor's lockbox | Sara |
| 6 | `06-kolbs-challenge.md`: fly? The Austrans; Tovey. The fugue | Kolb |
| 7 | `07-the-ceiling.md`: the board on the ceiling; control; the handheld control | Rolph |
| 8 | `08-the-cold-snap.md` (new): mid-month freeze; a quick heater pulling heat from underground; it cools too, energy neutral; Sara offers to marry him, Trice saw him first, he thinks they're joking; in the room, Rolph there, not Tovey; devices spread around the school | Sara |
| 9 | `09-the-broth.md`: a four-day build in the room; Trice and Rolph take turns; Trice, angry, with broth | Trice |
| 10 | `10-the-first-flight.md`: the forgotten shield; on-off-on; up; Hollin; turning; two minutes to land; laughing alone in the grass; a rumor in Hollin | Tor (alone) |

The old `10-the-proposals.md` was removed; its beats moved to scene 8.

## Questions for the user

### Not blocking (decide when it matters)

1. ~~The heater's link to the ground.~~ A wall plate; its field reaches straight down (user, October 18, 2026).
2. **The heater's name** (question 30).
3. **The month:** named or numbered? The drafts avoid naming it.
4. **Campbell's black clothes:** connected to the special school, or nothing? (Kept open on purpose.)
5. **The 10%:** stays ambiguous for now.
6. **Marco:** left open.
7. **The black-eyed man:** "something strange," with a subtle influence on Dorgal; explained much later. Promote him to his own file once defined.
8. **Chapter 5:** the engine's next idea after the flight (turning, landing and breathing at speed are problems).
9. **Codex open questions** in `codex/README.md`: House B's real name; building and theory instructors' names; headmaster's name; series scope; narrative mode (still paired drafts).
10. ~~Compile script scene breaks.~~ Scenes are now joined with `⁂`; `* * *` stays for breaks inside a scene (user, October 18, 2026).

Chapter 3's invented details were accepted by the user (October 18, 2026) and relabeled.

## TODO

1. **Create `manuscript/04-chapter-four/`** and draft all ten scenes in both modes, following chapter 3's practice:
   - Read the scene outline, the relevant codex profiles, and the end of chapter 3's drafts (for voice and continuity).
   - Rotating third: one POV per scene; the secret-keeper rule for Wensa and Rolph (explicit action, word choice only).
   - Camera: no interiority; keep the dialogue close to the rotating-third version.
   - Scene files hold prose only; no headings.
   - Don't reuse the original's wording.
   - Keep it light and funny; non-sexual (the proposals especially).
2. **Record invented draft details** in the codex as "(invented; pending the user's review)", as done for chapter 3.
3. **Run `node scripts/compile.mjs 4`** and report word counts.
4. **Later:** outline chapter 5 when the user brings notes.

## Continuity to watch in chapter 4

- **The shield:** an etched copper plate with holes for a cord, worn around the neck. It passes air and keeps out smoke and dust. It must be **activated by touch**: Wensa attacks before he's finished.
- **Kolb never meant to test it on Tor.** Tor believed he would, from chapter 2 on.
- **Wensa:** testing, and happy for Rolph's sake.
  - Her cover is blown to Dorgal's group in scene 2, and gone entirely after the test.
  - Tor comes to believe she's trying to murder him; she may never actually try.
- **Tovey's flight** belonged to his rage and ended with it. Kolb's "didn't you see Tovey flying?" refers to the chapter 3 chase.
- **Nobody reacts to Tor's flying device yet.** The Austran irony is the reader's alone.
- **The sheep field and the wood** below the school are where Tor ran from Tovey in chapter 3, and where he first flies.
- **Hollin** is five miles away (Kolb's runs, the carter, the well, the chapel).
- **Tor's money:** he lets his friends handle it, and keeps his gold and silver in a box he bought and fitted with his own lock.
- **Rolph's voice:** formal only when truly angry. Tor teases only Rolph. Trice never says "I don't know." Tovey never lies outright. Tor never boasts aloud.
