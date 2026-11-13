import assert from "node:assert/strict"
import test from "node:test"
import { acorn } from "../../src/acorn/index.mjs"

test("acorn trims", () => {
  assert.equal(acorn(" a "), "a")
})
