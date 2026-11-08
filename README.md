# Cross-Site Scripting (XSS) — DOM Rendering Lab

**Type:** Local-only, deliberately vulnerable educational page. Never deploy this page publicly.

## Objective
Contrast `innerHTML` (unsafe for untrusted input) with `textContent` (safe text rendering). This demo uses a harmless HTML-markup injection to reveal the difference without stealing data or contacting external servers.

## Run

Open `index.html` locally in a modern browser. The preset input is `<strong>INJECTED MARKUP</strong>`.

1. Click **Unsafe render**: the text becomes bold HTML markup.
2. Click **Safe render**: the angle brackets display literally as text.
3. Try a few harmless strings; observe how DOM parsing differs.

Automated source-level checks (Python 3.10+):

```bash
python -m unittest discover -s tests -v
```

For browser-level verification, open `browser-checks.html` in the same folder. It uses ordinary DOM APIs with no external dependencies and displays PASS/FAIL for three behavioral checks.

## Finding

**Cause:** `innerHTML` parses untrusted strings as markup, which can become XSS when executable HTML/event attributes are allowed into the DOM. **Remediation:** Use `textContent` for plain text and context-appropriate sanitization for intentionally supported HTML. Content Security Policy adds defense in depth but does not replace safe output handling.

**Evidence:** The project includes both implementations and static regression checks. A real browser screenshot and personal execution notes must be added by Alexander before describing this as a hands-on browser assessment.

## Security finding — XSS-001

| Field | Assessment |
|---|---|
| Asset | Local `index.html` demonstration |
| Weakness | User input assigned to `innerHTML` |
| Observation | Harmless `<strong>` markup is parsed in unsafe mode |
| Risk | Untrusted active markup may run in vulnerable contexts |
| Mitigation | `textContent` for literal output; vetted sanitization when HTML is required |
| Verification | Browser checks assert unsafe HTML parsing versus safe literal text |

This is an intentionally vulnerable **local example**, not an assessment of an external website.

## Evidence checklist

- [ ] Screenshot unsafe rendering
- [ ] Screenshot safe rendering
- [ ] Run source-level checks
- [ ] Explain why safe text rendering works
- [ ] Add an original test or accessibility improvement

## Portfolio evidence and technical review

- [Cloud validation report](docs/VALIDATION.md) — dated test results and limitations
- [Technical case study](docs/CASE-STUDY.md) — problem, approach, engineering decisions, and next personal contribution

The cloud run was AI-assisted; it does not establish Alexander's independent authorship. GitHub Actions may be unavailable due to an account-level billing restriction. Follow the local commands in the validation report to reproduce results.
