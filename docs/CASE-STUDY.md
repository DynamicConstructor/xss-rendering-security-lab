# Case Study: DOM XSS-Safe Rendering

## Problem

When untrusted strings are inserted into a page through an HTML-parsing API, markup may be interpreted as document structure. Some contexts also allow script execution, introducing cross-site scripting risk.

## Approach

The original two-button page compares `innerHTML` and `textContent`. The expanded loopback-only workbench examines direct DOM input, URL-fragment text, and a session note. A local browser-check page and Node input tests supplement source checks.

## Architecture

`Text input → unsafe innerHTML / safe textContent → browser DOM → visual comparison`

## Security decision

Plain text should use `textContent`. If a product intentionally supports user-authored HTML, a robust and context-appropriate sanitization policy is required. Content Security Policy provides defense in depth but is not an excuse for unsafe insertion.

## Demonstrated outcome

Ten checks passed in the latest cloud run (two Python source tests and eight Node helper tests). Automated browser screenshots could not be captured in the current sandbox; those must be performed genuinely by Alexander and do not constitute evidence of live exploitation.

## Next personal contribution

Alexander can add an independently tested accessible status announcement and document keyboard navigation. Only harmless markup should be used; the vulnerable page is never to be hosted publicly.
