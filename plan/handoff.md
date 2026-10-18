# Handoff (October 18, 2026)

Where the work stands, what's next, and what we're waiting on the user for. Read `AGENTS.md` first; this file only covers the current state.

## Current state

- **Chapters 1–3:** drafted in both modes (`manuscript/0N-*/NN-slug.camera.md` and `.rotating-third.md`), outlined, and committed. Chapter 3's last commit was `0e463e6` (Tovey walks home once the rage ends).
- **Chapter 4:** fully outlined, **not drafted**. Ten scene outlines in `outline/04-chapter-four/`, plus `_chapter.md` (elements 0–7, engine table, planning fields, answered questions). `manuscript/04-chapter-four/` doesn't exist yet.
- **Codex:** updated through chapter 4's outline (Wensa, Dorgal, Marco and the black-eyed man, the shield test, the flying field, Austra, the proposals, Maria's school dance).
- **Git:** the local editor autosaves commits ("Autosave: Edit N files"). The last few chapter-4 changes (`_chapter.md`, `09-the-first-flight.md`, the new `10-the-proposals.md`, and codex files for Patricia, Sara, Tor, Maria and canon-notes) were **uncommitted** at handoff, unless the editor has autosaved them since. Check `git status`.
- **Compile:** `node scripts/compile.mjs` (all chapters and modes, plus `compiled/book.<mode>.md`), or `node scripts/compile.mjs 4` for one chapter. `compiled/` is gitignored, and so is `.obsidian/`.

## Chapter 4 scenes (outlined)

| # | File | Proposed rotating-third POV (not yet approved) |
| --- | --- | --- |
| 1 | `01-the-tests.md`: routine kept to the letter; tests (cutters, force, fire, smoke, hot wax); Wensa always near | Wensa (secret-keeper rule) |
| 2 | `02-the-introduction.md`: Dorgal, Marco and the black-eyed man corner Tor; he fetches Wensa and introduces her as a royal guard | Dorgal |
| 3 | `03-the-template.md`: two days in an isolation chamber; Rolph gets him excused; the lonely food dryer template; food, water, sleep | Rolph |
| 4 | `04-the-test.md`: Wensa's three rods; the fire; Kolb's twenty minutes and cutter; "it was meant for a pell"; the headmaster; Sara's deal; Trice's template idea; the scale explained | Sara |
| 5 | `05-interlude.md`: shield versions; copies; all three templates shipped to the Debri house; Tor's own lockbox of coin | Sara or Tor |
| 6 | `06-kolbs-challenge.md`: fly? The Austrans; Tovey. The fugue | Kolb |
| 7 | `07-the-ceiling.md`: the board on the ceiling; control; the handheld control | Rolph |
| 8 | `08-the-broth.md`: a four-day build in the room; Trice and Rolph take turns; Trice, angry, with broth | Trice |
| 9 | `09-the-first-flight.md`: the forgotten shield; on-off-on; up; Hollin; turning; two minutes to land; a rumor in Hollin | Tor |
| 10 | `10-the-proposals.md`: Sara offers to marry him; Trice saw him first; Tor thinks they're joking (they're more than half serious) | Sara or Trice |

## Questions for the user

### Blocking chapter 4 drafting

1. **Approve the POVs** in the table above, or change any. Rolph and Sara each have two or three scenes; scene 7 could go to Tor, and scene 10 to Trice.
2. **The copies** in the interlude (scene 5): which devices, and for whom?
3. **The timescale:** does chapter 4 cover about a month ("near the end of the month")? Is the month named or numbered?
4. **Who gets the ten shields?** Left undecided. They were made for his friends, but the headmaster wants some for the school and Sara wants them in the deal. Settle it before drafting scenes 4–5, or leave it vague on the page?
5. **Where are his friends** for the proposals (scene 10): breakfast in the cafeteria, the practice yard, the room? Are Rolph and Tovey there?

### Not blocking (decide when it matters)

6. **Campbell's black clothes:** connected to the special school, or nothing? (Kept open on purpose.)
7. **The 10%:** stays ambiguous for now. When does it get resolved, if ever?
8. **Marco:** left open.
9. **The black-eyed man:** "something strange," with a subtle influence on Dorgal; explained much later. What is he? Promote him to his own file once defined.
10. **Chapter 5:** the engine's next idea after the flight (the flight showed turning, landing and breathing at speed are problems).
11. **Codex open questions** in `codex/README.md`: House B's real name; building and theory instructors' names; headmaster's name; series scope; narrative mode (still paired drafts).

### Waiting for review

12. **Invented details from the chapter 3 drafts**, recorded as "(invented; pending the user's review)" in `codex/canon-notes.md` (*From the chapter three drafts*), `wensa.md`, `campbell.md`, `headmaster.md`, `tovey.md`, `patricia.md` and `rolph.md`. Examples:
    - Trice's father is the Duke of Morgan, brother of Tovey's mother.
    - The Arlen works makes lamps with forty journeymen.
    - Wensa has held her commission nineteen years.
    - The basement: thirty-one steps, the seventeenth flagstone, a stud in the headmaster's chair that drops the chair wards.
    - Appearances for Wensa, Campbell and the headmaster.

    Once the user accepts them, change the labels to "(invented; accepted by the user)".

## TODO

1. **Commit** the uncommitted chapter 4 outline and codex changes, if the editor hasn't autosaved them.
2. **Get answers** to questions 1–5.
3. **Create `manuscript/04-chapter-four/`** and draft all ten scenes in both modes, following chapter 3's practice:
   - Read the scene outline, the relevant codex profiles, and the end of chapter 3's drafts (for voice and continuity).
   - Rotating third: one POV per scene; the secret-keeper rule for Wensa and Rolph (explicit action, word choice only).
   - Camera: no interiority; keep the dialogue close to the rotating-third version.
   - Scene files hold prose only; no headings.
   - Don't reuse the original's wording.
   - Keep it light and funny; non-sexual (the proposals especially).
4. **Record invented draft details** in the codex as "(invented; pending the user's review)", as done for chapter 3.
5. **Run `node scripts/compile.mjs 4`** and report word counts.
6. **Ask the user to review** chapter 3's pending invented details (question 12).
7. **Optional:** in the compile script, mark scene boundaries differently from in-scene `* * *` breaks (raised with the user; no answer yet).
8. **Later:** outline chapter 5 when the user brings notes.

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
