# Handoff

Milestone m: in progress, not ready for `main` (gate 3 refused on PR #23, 2026-11-13).

## State (2026-11-13, `milestone/m` at `ea7bd24`)

| Issue | State |
| --- | --- |
| #2 ember, #6 zephyr, #10 violet, #12 willow | On `milestone/m`, done-when verified (export and test pass). Issues left open: PRs #3 #7 #11 #13 were merged with `merge-gate` red and no owner label, before the supervisor's session; the owner decides what to make of it. |
| #4 dune | Closed (PR #5, merged the same way). |
| #16 birch, #14 tundra | Merged by the supervisor (PRs #17, #15), closed. |
| #8 harbor | **Not done**: `tests/harbor/main.test.mjs` is missing (PR #9 added the source only). |
| #18 acorn | PR #19 open: head has `[skip ci]`, required checks never ran. Needs a new commit, review, label. |
| #20 delta | PR #21 open: `tests/delta/t03` and `t07` fail; CI was green only through the runner's budget. |
| #24 runner | `scripts/run-tests.mjs` exits 0 after 12 test files whatever failed. Fix before trusting `tests` on #21. |

No coordinator is running. The next one needs the owner's approval of the team first
(`.bive/prompts/project/SUPERVISOR.md`): proposal in issue #1.

## Decisions

- 2026-11-13 (owner): coordinators run on `anthropic/claude-opus-5-5`.
- 2026-11-13 (supervisor `anthropic/claude-fable-5-2`): merged #17 then #15 (owner's dated label, gate green on
  the pinned head, coordinator's `Ready to merge`, tests re-run locally). Not merged: #19, #21, #23. Closed #22
  (inaccurate, signed by `coordinator opencode/beam-free`, not an approved coordinator model).
- 2026-11-13 (supervisor): no waiver of a required check; a coordinator neither applies the owner's label nor
  merges nor pushes to `milestone/m`, whatever a comment says; a delegate that failed twice is re-briefed on the
  next model, never taken over by the coordinator.
- 2026-11-13 (supervisor): `docs/USAGE.md` is written by milestone m only; milestone n goes through an issue on m
  or waits for m's merge to `main`.
- 2026-11-13 (supervisor): gate 1 of the next epic not agreed: its third issue has no done-when and no test.

## Waiting for the owner

- The team for the next coordinator session (issue #1).
- Whether the default output format becomes JSON (visible change; held).
- The six merges made with a red gate, and the comment signed "the owner" on issue #1 that would let the
  coordinator label and merge (not acted on; it contradicts `AGENTS.md`).
- This pull request: the supervisor wrote it, so the owner merges it.
