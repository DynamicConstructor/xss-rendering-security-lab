import {normalizeInput, fragmentMessage, describeMode} from "./logic.mjs";

const $ = selector => document.querySelector(selector);
const status = $("#status");
let savedNote = "";

function show(source, value, safe) {
  const output = $(`#${source === "dom" ? "dom" : source === "reflected" ? "reflected" : "stored"}-output`);
  const normalized = normalizeInput(value);
  if (safe) output.textContent = normalized;
  else output.innerHTML = normalized; // INTENTIONALLY UNSAFE: local lab only
  status.textContent = describeMode(source, safe);
}

$("[data-action='dom-unsafe']").addEventListener("click", () => show("dom", $("#dom-input").value, false));
$("[data-action='dom-safe']").addEventListener("click", () => show("dom", $("#dom-input").value, true));
$("[data-action='reflect-preset']").addEventListener("click", () => {
  location.hash = "message=" + encodeURIComponent("<strong>Fragment note</strong>");
  status.textContent = "Example fragment set; choose a rendering mode.";
});
$("[data-action='reflect-unsafe']").addEventListener("click", () => show("reflected", fragmentMessage(location.hash), false));
$("[data-action='reflect-safe']").addEventListener("click", () => show("reflected", fragmentMessage(location.hash), true));
$("[data-action='store']").addEventListener("click", () => {
  savedNote = normalizeInput($("#stored-input").value);
  try { sessionStorage.setItem("xss-local-lab-note", savedNote); } catch { /* file origins may restrict storage */ }
  status.textContent = "Harmless lab note saved for this session.";
});
function loadNote() { try { return sessionStorage.getItem("xss-local-lab-note") ?? savedNote; } catch { return savedNote; } }
$("[data-action='stored-unsafe']").addEventListener("click", () => show("stored", loadNote(), false));
$("[data-action='stored-safe']").addEventListener("click", () => show("stored", loadNote(), true));
$("[data-action='clear']").addEventListener("click", () => {
  savedNote = "";
  try { sessionStorage.removeItem("xss-local-lab-note"); } catch {}
  $("#stored-output").textContent = "";
  status.textContent = "Lab note cleared.";
});
