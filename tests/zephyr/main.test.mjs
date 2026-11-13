import assert from "node:assert/strict"
import test from "node:test"
import { zephyr } from "../../src/zephyr/index.mjs"

test("zephyr trims", () => {
  assert.equal(zephyr(" a "), "a")
})
