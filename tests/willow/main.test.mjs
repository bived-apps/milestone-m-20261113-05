import assert from "node:assert/strict"
import test from "node:test"
import { willow } from "../../src/willow/index.mjs"

test("willow trims", () => {
  assert.equal(willow(" a "), "a")
})
