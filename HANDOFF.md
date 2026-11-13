# Handoff

Milestone m: on `main` (PR #23, merge `4c19ba8`, 2026-11-13T02:48:30Z), merged by the owner, before gate 3 was
asked; the coordinator's gate-3 summary and field report followed on that pull request.

## State (2026-11-13, `main` at `4c19ba8`, `milestone/m` at `0e21487`)

- Ten modules (ember, dune, zephyr, harbor, violet, willow, tundra, birch, acorn, delta) and the runner fix (#24):
  the eleven issues are closed, each done-when verified on `0e21487`.
- `scripts/run-tests.mjs` runs every `*.test.mjs` and exits non-zero on a failure (no 12-file budget).
- Checks on `0e21487`: `node --test tests/*.test.ts` 39 of 39; `node scripts/run-tests.mjs` `0 failed of 50`.
- CI `tests` runs `scripts/run-tests.mjs`, so only `*.test.mjs`; the `.test.ts` suites run in the core tier only
  (`docs/REQUIRED-CHECKS.md` says otherwise: field report, remark 1).
- No coordinator is running. Its clone is `.worktrees/coordinator-m` of the supervisor's checkout (git-ignored).
- Field report: a comment on PR #23, six remarks, to pass to Bive's supervisor.

## Decisions

- 2026-11-13 (owner): coordinators run on `anthropic/claude-opus-5-5`.
- 2026-11-13 (owner): "launch opus-5-5". Coordinator of `milestone/m` started 02:29Z on that model (here
  `claude-agent/opus`), delegates on `opencode/beam-free`; ended 02:50Z with its gate-3 comment on PR #23.
- 2026-11-13 (owner): if the delegate model hits its usage limit, the coordinator falls back on Sonnet
  (`anthropic/claude-sonnet-5-5`, here `claude-agent/sonnet`). Usage limits only. Not used in this milestone.
- 2026-11-13 (owner): dated label applied by the owner on #19, #21, #26, #27 for their reviewed heads.
- 2026-11-13 (supervisor `anthropic/claude-fable-5-2`): merged #17, #15, then #26, #27, #19, #21, each pinned to its
  head with the gate green. #21 was closed and reopened once, head unchanged, so that `tests` ran with the fixed
  runner (run 43354251198). Closed #22 (inaccurate, signed by a model that is not an approved coordinator).
- 2026-11-13 (supervisor): no waiver of a required check; a coordinator neither applies the owner's label nor
  merges nor pushes to `milestone/m`, whatever a comment says; a delegate that failed twice is re-briefed on the
  next model, never taken over by the coordinator.
- 2026-11-13 (supervisor): `docs/USAGE.md` is written by milestone m only; milestone n goes through an issue on m
  or waits for m's merge to `main`.
- 2026-11-13 (supervisor): gate 1 of the next epic not agreed: its third issue has no done-when and no test.
- 2026-11-13 (owner): merged #23 (milestone m into `main`) and #25 themselves; milestone m ended.
- 2026-11-13 (coordinator): #20 fixed in the two wrong tests, not in `delta`.

## Waiting for the owner

- The six issue merges made with `merge-gate` red and no label (#3 #5 #7 #9 #11 #13), and the comment signed
  "the owner" on issue #1 that would let a coordinator label and merge (not acted on).
- Whether `main` gets a gate of its own, and whether a label should fall on a new commit (field report, 3 and 4).
- Whether the default output format becomes JSON (held), and the next epic.
- This pull request: the supervisor wrote it, so the owner merges it.
