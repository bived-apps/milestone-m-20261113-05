import assert from "node:assert/strict"
import test from "node:test"
import { delta } from "../../src/delta/index.mjs"

test("delta trims", () => {
  assert.equal(delta(" a "), "a")
})
