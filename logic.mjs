// Pure input helpers for a local defensive rendering demonstration.

export function normalizeInput(value, maxLength = 500) {
  if (typeof value !== "string") throw new TypeError("Expected a string");
  if (!Number.isInteger(maxLength) || maxLength < 1) throw new RangeError("Invalid limit");
  return value.slice(0, maxLength);
}

export function fragmentMessage(fragment) {
  if (typeof fragment !== "string") throw new TypeError("Expected a fragment string");
  if (fragment.length > 4096) throw new RangeError("Fragment too long");
  const raw = fragment.replace(/^#/, "");
  return normalizeInput(new URLSearchParams(raw).get("message") ?? "");
}

export function describeMode(source, safe) {
  const names = {dom: "DOM input", reflected: "URL fragment", stored: "Session storage"};
  if (!(source in names)) throw new RangeError("Unknown source");
  return `${names[source]}: ${safe ? "literal-text rendering" : "unsafe HTML parsing"}`;
}
