import assert from "node:assert/strict"
import test from "node:test"
import { dune } from "../../src/dune/index.mjs"

test("dune trims", () => {
  assert.equal(dune(" a "), "a")
})
