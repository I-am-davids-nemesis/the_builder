# The story of the story: *The Builder*, October 1 to November 8, 2026

_Written by Claude on November 8, 2026, three quarters of the way through the first draft. Sources: `process/seed.md`, `process/engine.md`, `process/journal.md`, `process/answers.md`, `codex/builder-handoff.md`, `AGENTS.md`, and the outline and manuscript as they stand today. A digest of the process records, written by a smaller model, was used as a map and checked against the journal before anything here was stated._

## A note on the records first

Nearly everything below is reconstruction. Every entry in the journal before today was written by Claude from the git history, after the fact. The seed's "In the writer's words" section is still empty. No conversations are saved in `sessions/`, there is no `milestones.md`, and `answers.md` starts on November 7. The writer's only first-person entry in the journal is today's:

> I just added the process notes, now that I am three quarters of the way through the book. There should be lots of interesting things to mine from the process of building the book. I would like to have captured all the conversations I have had with people about the book as I went.

So this is mostly a story of *what* changed, told from commits. The *why* is often missing, and the writer's voice survives mainly as rules attributed to them in `AGENTS.md`, a handful of answers, and the notes they write in outline files. The digest quotes several commit messages as the writer's words. I couldn't open the git log for this retrospective, so none of those quotes are used here.

## October 1: a character bible, not a novel

The project didn't begin as a book. It began in a Claude chat with a request for a plot outline of P.S. Power's *The Builder*. The web had only blurbs, and the handoff records Claude saying it "couldn't produce a scene-by-scene outline without inventing details." The second request, a character bible, is the real seed. The handoff paraphrases the goal: profiles complex enough to "drop a character into any situation and predict **how they will react**," and voices distinct enough to tell the characters apart. Two principles came with it, and they're still the spine of `AGENTS.md`: every character carries both an internal and an external tension, and series-level tension lasts, so each book resolves only small pieces.

That origin shows everywhere. The book's planning tools (reaction rules, "never" lists, the cover-the-names test, the tension ledger) are a character bible's tools. They're the reason the book can do without Tor's head. You can predict him from outside.

**Thin stretch:** October 1 to 9. Nothing records how a character bible turned into a decision to write a retelling.

## October 9: the terms of the retelling, and two books at once

The repository opened on October 9 with the founding rule: keep the original's plot beats; prose, structure, interiority and description are ours. The source is mined for facts and never imitated. The original's central device, a naive Tor whose preconceptions hide the world, was rejected outright. Mysteries would have to stay hidden "through scene selection and who is present." That one refusal created most of the craft problems that came after.

The narrative mode was left open on purpose, and agents were told to ask before settling it. The writer's answer was to not choose yet. Each scene was drafted twice, once in rotating close third and once with an external, camera-like narrator, because (in the journal's reconstruction) the writer found that both read well, with different impacts. Chapter one was planned, drafted in both modes and woven into a full chapter per mode, all in one day.

The same day settled a lot more:

- **The perception gap** became the main source of dramatic irony: Tor misreads how others see him, and the reader sees the mismatch. It came from rewriting Tovey from a snob into someone Tor *fears* without cause, and from making expulsion Tor's fear only.
- **The tone** was set as "as light and funny as possible" (`AGENTS.md`, dated to this day), with a guard rail: the joke is never on Tor's intelligence. That rule pulls against the original's earnestness, and the book has kept it ever since.
- **Names were cleaned up.** Dorian, Sarah and Clark became Dorgal, Sara and Tovey. The canon bully Sorvey was folded into Dorgal. The Missouri and Mississippi houses became placeholders, because the far-future Earth here uses no American state names.
- **Secrets moved underground.** Hereditary noble fields were defined, and the special school became a spy school with a side of assassination training, kept off the page.

## October 12 to 19: cutting, and finding out what the cuts were for

On October 12 the original's sexual content was dropped. What makes this a turn rather than a cut is the rule that came with it: when a beat is removed, find the job it did (motive, relationships, culture clash, tradecraft, status) and give that job to something else. Flirtation became a non-physical game of wit that Tor takes literally. The beach house became cover for Tor to build alone. Most importantly for later, a jeweled gift with a hidden field was planned to replace the fiancée's pregnancy. That plan came due in chapter six.

The book moved into the editor on October 15, and chapter three was outlined in three movements. By October 17 the chapter had lost its flashback and become six scenes. Its viewpoint passed through Tor, Rolph, Campbell, Trice and the headmaster. In revision Tovey came down at dawn and walked home, because his flight was part of the combat rage and should end with it. The secrets thickened: Wensa (who absorbed the accounting professor once called Miriam) was settled as the royal guard Rolph suspects, and the special school as training both spies and their targets. Rolph tells Tor only the second half.

Chapter four (October 18) is where the engine first visibly escalated. Kolb's challenge to make a person fly became Tor's fourth project, and a cold snap produced a heater that cools as the fifth. The ten shields were allocated, and one decision shows the book planning ahead: the shield must be activated by touch, because self-activation is a later plot point. The problem of the moment before an attack was left unsolved on purpose. The same day the writer set the rule that Tor's viewpoint stays scarce. He holds it only when he's alone or something particularly traumatic happens to him.

On October 19 every bell in chapters one to four was checked and the count settled: twelve bells by day and twelve by night. The writer's reason, in the journal's paraphrase, was that it's easy to understand, and it makes sense that people kept it without knowing why. A seven-day week moved Tor's thirty-hour trance to the fifth day.

**Thin stretch:** October 19 to 23 has no records at all.

## October 23 to 27: the capital, and the day Burks became Green

Chapter five took the book out of school. Its first scene went to four watchers (Kolb, Rolph, Sara, Bet Haskins), and Tor never held the viewpoint. That was the scarcity rule's first full test. The Ashford purifier job gave Tor something rare: anger, about a town that wouldn't fix its own sewer. The luggage plates went from four to ten, because Tor's builds come in tens, which became a running joke. Rolph acquired a given name, Alphonse. The palace was hidden by scene selection alone: they come in by the garden gate, there's no throne room, and the guards wear purple and black. The reader sees every clue, and Tor files each one under rich merchants.

On October 25 the writer corrected an error in Claude's canon notes. King Richard Cordes was not "the one Ancient" but an ordinary king named after one.

October 27 is the most surprising day in the record. In "Testing the Field," Burks entered as a servant Tor gives an amulet to test. Within the same day's commits he became a stranger at Tor's door with an armful of clothes, slightly taller than Tor and strangely familiar, and then Green: the Ancient who has run Noram for 3,000 years. He looks and sounds a bit like Tor, not Rolph. A walk-on became the book's deepest secret, and it brought a hard rule straight away: no Ancient, Green included, ever holds the viewpoint, in any mode.

On the same day the writer ended the two-mode experiment. Rotating close third won. Both modes had been drafted from chapter one through chapter five, scene three, about nineteen days of double work. **No reason for the choice is recorded.** Given Green, the timing may not be a coincidence: a book now built on whose head we may enter needs viewpoint as a working tool. But that's my inference, not the writer's.

## October 28 to 31: chapter six, and the pregnancy plot's replacement arrives

A planned scene, "Rolph's Fiancé," existed only to end chapter five on Ursula's entrance. Because it held a single beat, it was folded into the end of scene four and deleted, and Tor's meeting with Rolph's father moved to chapter six. The Ashford build grew from two days to about six, so the rescue became a real risk.

Chapter six opened with "Spy," and here the October 12 rule paid off. The pregnancy complication was dropped, in the journal's words "because it would make the plot revolve around nobility and their proclivities." Instead Ursula became an unwitting spy carrying Count Ward's brooch, which Tor recognizes as not magic at all. Rolph's father walked in mid-conversation and turned out to be the king. Tor's blurted "Rick" was answered with "Rich," which is as good a summary of the book's tone as anything.

The rest of the stretch was world-building under pressure from scenes:

- A noble condition: nobles don't easily recognize people who are too small, even familiar faces. This makes a running gag of Tor looking fifteen, and gives the perception gap a physical cause in the other direction.
- The Debri house was redrawn from a Tudor house with a veranda into terraced white stone, to match the lookbook image. An image shaped the text, not the other way round.
- Heather, Sara's mother, was made about six feet tall at the writer's request. Sara has known for two years that Rolph is the prince. The Debri house can't pay Tor, because the king's shield order has tied up its money.
- Nobles marry within three steps of their station. Before the day was out the rule was widened from heirs to every noble, and it now quietly blocks Rolph and Sara, and Karina and Tor.
- At dinner the host eats first and the guest most at risk eats last.

On October 30 the camera files were moved to their own branch, and the dead end was boxed up rather than thrown away. On October 31 chapter seven began with "Dinner With Ward." Quotations from the original that had crept into the chapter five to seven summaries were replaced with paraphrases. The source rule was enforced on the notes as well as the prose.

October 31 also changed the collaboration itself. The writer said questions are always welcome, set a format for them, and asked that each question come with a suggested answer: one `Default:` and up to three `Option:` lines (`AGENTS.md` §8, dated October 31). From then on, much of the book's decision-making ran through that format.

## November 1 and 2: the beach, and a collision with canon

On November 1 the writer made three structural changes. Karina became a main character from chapter five, though no romance with Tor is possible in book one. The main cast were aged into their early twenties, with Tor at 20 and Rolph at 22, while Tor still looks about fifteen. The content rule stayed non-sexual regardless. And because the editor's Claude panel starts a fresh conversation for each scene, every decision now had to be written into the files as it was made. That last rule is the reason this retrospective has anything to work from after November 1. Before it, decisions lived in conversations that are gone.

The beach chapter produced the best example of a build's complication turning into the next idea. Sara switches off the beach water loop by hand, and the water in the air falls at once and cuts trenches in the sand. It shows Tor he was about to build a river across the land that anyone could divert. The palace's dead cascades came back to life through Tor's fountain. Green, as Burks, began quietly leaving copper squares on Tor's desk.

Then came a collision. The canon's beach-house talk, about nobles being kind for fear of spurning, wasn't in the outline, and it landed on the same night as the girls' secret spy run. The writer accepted Claude's default: one night holds both, the talk ends chapter seven, and chapter eight opens with Rolph's story of Maria. Chapter eight also settled an ambiguity the writer had left in quotation marks. Kolb's "revenge" leans toward protection: he chose to train Tor after Maria rejected him in public.

On November 2 "Homework" kept the spy run behind a scene cut. Tor sleeps through it, and Sara, who saw his face at the door, makes up for her giggling exit at breakfast. At dawn Tor starts the real Ford water line, and decides, without telling the king, to feed Ford's rivers rather than every farm. "Luncheon Avoided" sent him toward the king's table and into a tanners' well instead.

**Thin stretch:** November 2 to 6. Nothing in the journal. The digest says chapters two to eight were translated into Korean on November 6. I haven't checked that against the git log, though `translations/` is in the layout.

## November 6 and 7: the midden, the falcons, and Tor's origin

The midden scene is where the book's long secrets show through. Tor copies Rolph's hereditary line of force rather than a generic shield, then throws up a column of earth with no device. Nobody learns whether the shield or his field saved the girl. Rolph feels his own field gather through the ground and doesn't recognize it. The same day Tor was settled, in the codex, as a clone of Count Lairdgren, that is, Green. It's a series-long secret that this book only hints at. In hindsight, October 27's note that Burks "looks and sounds a bit like Tor" was the first thread of it.

Chapter nine let the crown answer Tor without words. He talks his Ford plan aloud at his open door, and three bronze falcons arrive unasked. The writer struck an earlier note that stone won't hold a field. Stone holds a field very well, and the falcons are bronze only because Tor has been working in copper since spring and would rather not try something new across a whole county. The writer corrected the world's physics so that the choice belongs to the character.

The viewpoint rules did steady work here. "Chatting With the King" stays with Rolph throughout, because Tor isn't alone and nothing traumatic happens to him. The six days of the river build are seen through the palace staff, and Tor holds the viewpoint only for the last stretch. Smaller decisions kept the comedy alive: in private Tor must call the king and queen "Rich" and "Connie," adding "Your Majesty" the moment anyone else appears. The writer replaced Tor's uncle with old Mister Pruett, since Tor has no uncles, aunts or grandparents as far as he knows, which is another quiet hint at his origin.

"Another Royal Dinner" is the first scene where the writer's answers survive word for word, and they show how the partnership now works. Of twelve questions, the writer took the default on most, picked an option on two, and added two notes that changed the book's future:

- "Purple is Tor's favorite color so he doesn't think of it": a character fact, delivered as a correction to a question Claude had treated as a plot hint.
- "Collette is a polite duty date, but she gets a lot more screen time later": a promise beyond chapter nine.

The writer also chose to leave Trice's hurt open past the chapter, and so the chapter ends on her walking past Tor without seeing him.

## November 8: where it stands

This morning's answers kept three hints that only the reader will catch: Hale's single "My lord" to Burks, stopped by a lifted finger; a box carved with pears found in minutes; and silk in the royal guard's purple that Hale notices and Tor doesn't. Burks has been seen stepping out of a hidden panel in the palace walls.

The writer has also started chapter ten in their own hand. The outline for "Betrothed" is the writer's own notes, written fast, where Trice puts Tor off with "a conversation that is not really meant for here" and sizes him up "as a way out of her problem." The chapter's "What the chapter must do" is still blank. So is chapter five's.

## Patterns across the stretches

**How the engine actually grew.** `AGENTS.md` gives the loop as build, complication, next idea, and that's how the chapters run. What the record adds is *how* the stakes climb: each complication drags in a bigger audience. The school notices a drying field, a merchant house notices the shield, the crown notices flight, and a county notices the water line. The October 12 rule (give a cut beat's job to something else) turned out to be a second engine, producing the brooch, the spy run and the beach-house cover from the gaps the original's content left behind.

**Dead ends, and where they went.** The camera narrator (a branch now, not a loss). The pregnancy plot (became the brooch). The chapter-three flashback, and "Rolph's Fiancé" (folded into a scene's ending). The Tudor Debri house (swapped for an image). The food-drying field in chapter one (moved offstage, revealed in chapter four). King Richard as an Ancient, Miriam, and Tor's uncle (corrected out). Almost nothing was simply dropped. Most dead ends were moved or re-purposed.

**What surprised the writer.** The records rarely say what surprised anyone, so this is inferred from speed. Burks going from servant to Green in a day. The beach-house talk turning up in canon on the same night as an invented spy run. Tor's origin as Green's clone, settled almost a month after the first hint.

**How the writer and Claude work together.** The writer sets rules and corrects facts. Claude drafts, invents, and labels what it invented. The questions-with-defaults format (October 31) turned the collaboration into one where Claude proposes and the writer disposes, usually by accepting a default and sometimes with a one-line note that turns out to matter more than the question. The writer's corrections are mostly about truth to the world (the king isn't an Ancient, stone holds a field, Tor has no uncle) and about what a character wouldn't notice (the purple). The November 1 rule to record every decision was the writer's answer to the panel forgetting. Today's journal entry is the same wish, extended to the conversations themselves.

## Where the record is thinnest

- **Why rotating third won** over camera on October 27.
- **The writer's own seed:** what drew them to retell this book in particular.
- **Everything said in conversation** before November 7, including talks with people other than Claude, which today's entry says the writer wishes they'd kept.
- **Gaps with no records:** October 1–9, October 19–23 and November 2–6.
- **The central question and the theme:** both still marked unstated in `engine.md`.

**Questions:**

1. **Why rotating third:** what decided the end of the camera experiment on October 27?
   - Default: none
   - Option: Rotating third suited a book whose secrets depend on whose head we're allowed into (Green, the scarcity rule).
   - Option: Two modes had simply become too much work per scene.
2. **The seed in your words:** what drew you to retelling *The Builder* rather than writing something new?
   - Default: none
3. **Lost conversations:** are there notes from talks with other people about the book that could go into the seed or the journal as a dated Writer entry?
   - Default: none
