import test from "node:test";
import assert from "node:assert/strict";
import {normalizeInput, fragmentMessage, describeMode} from "../logic.mjs";

test("normalizes a string without changing benign markup", () => {
  assert.equal(normalizeInput("<strong>lab</strong>"), "<strong>lab</strong>");
});
test("enforces input length", () => { assert.equal(normalizeInput("abcdef", 3), "abc"); });
test("rejects invalid input types", () => { assert.throws(() => normalizeInput({}), TypeError); });
test("decodes a fragment message", () => {
  assert.equal(fragmentMessage("#message=%3Cem%3Ex%3C%2Fem%3E"), "<em>x</em>");
});
test("handles missing fragment value", () => { assert.equal(fragmentMessage("#other=1"), ""); });
test("rejects excessive fragment data", () => {
  assert.throws(() => fragmentMessage("#message=" + "a".repeat(5000)), RangeError);
});
test("rejects non-string fragment input", () => {
  assert.throws(() => fragmentMessage({message: "test"}), TypeError);
});
test("labels safe and unsafe modes", () => {
  assert.match(describeMode("stored", true), /literal-text/);
  assert.match(describeMode("dom", false), /unsafe HTML/);
});
