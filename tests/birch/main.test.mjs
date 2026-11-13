import assert from "node:assert/strict"
import test from "node:test"
import { birch } from "../../src/birch/index.mjs"

test("birch trims", () => {
  assert.equal(birch(" a "), "a")
})
