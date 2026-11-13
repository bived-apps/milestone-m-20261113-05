import assert from "node:assert/strict"
import test from "node:test"
import { spawnSync } from "node:child_process"
import { mkdtempSync, writeFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { fileURLToPath } from "node:url"

const RUNNER = fileURLToPath(new URL("../../scripts/run-tests.mjs", import.meta.url))

const okFile = 'import test from "node:test"; test("ok", () => {})\n'
const koFile = 'import test from "node:test"; test("ko", () => { throw new Error("ko") })\n'

function makeFixture(n, failingIndex) {
  const dir = mkdtempSync(join(tmpdir(), "run-tests-"))
  for (let i = 1; i <= n; i++) {
    const name = "f" + String(i).padStart(2, "0") + ".test.mjs"
    const content = failingIndex === i ? koFile : okFile
    writeFileSync(join(dir, name), content)
  }
  return dir
}

function runFixture(dir) {
  return spawnSync(process.execPath, [RUNNER, dir], { encoding: "utf8", timeout: 120000 })
}

test("3 files, f01 fails", () => {
  const dir = makeFixture(3, 1)
  try {
    const r = runFixture(dir)
    assert.equal(r.status, 1)
    assert.match(r.stdout, /1 failed of 3/)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test("15 files, only f14 fails", () => {
  const dir = makeFixture(15, 14)
  try {
    const r = runFixture(dir)
    assert.equal(r.status, 1)
    assert.match(r.stdout, /1 failed of 15/)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test("15 files, all pass", () => {
  const dir = makeFixture(15, -1)
  try {
    const r = runFixture(dir)
    assert.equal(r.status, 0)
    assert.match(r.stdout, /0 failed of 15/)
    assert.doesNotMatch(r.stdout, /Time budget/)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test("3 files, all pass", () => {
  const dir = makeFixture(3, -1)
  try {
    const r = runFixture(dir)
    assert.equal(r.status, 0)
    assert.match(r.stdout, /0 failed of 3/)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})
