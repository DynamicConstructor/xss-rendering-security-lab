"use strict";

const input = document.getElementById("input");
const result = document.getElementById("result");
const mode = document.getElementById("mode");

document.getElementById("unsafe").addEventListener("click", () => {
  // INTENTIONALLY VULNERABLE for a local, educational comparison.
  result.innerHTML = input.value;
  mode.textContent = "Unsafe mode: the browser parsed the input as HTML.";
});

document.getElementById("safe").addEventListener("click", () => {
  // Correct when untrusted content is meant to be plain text.
  result.textContent = input.value;
  mode.textContent = "Safe mode: the browser displayed input as literal text.";
});
