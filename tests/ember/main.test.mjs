import assert from "node:assert/strict"
import test from "node:test"
import { ember } from "../../src/ember/index.mjs"

test("ember trims", () => {
  assert.equal(ember(" a "), "a")
})
