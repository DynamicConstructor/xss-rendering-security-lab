# Case Study: DOM XSS-Safe Rendering

## Problem

When untrusted strings are inserted into a page through an HTML-parsing API, markup may be interpreted as document structure. Some contexts also allow script execution, introducing cross-site scripting risk.

## Approach

Two buttons render the same harmless example string. The intentionally unsafe path assigns to `innerHTML`; the safer plain-text path assigns to `textContent`. A local browser-check page uses ordinary DOM APIs to compare parsing behavior.

## Architecture

`Text input → unsafe innerHTML / safe textContent → browser DOM → visual comparison`

## Security decision

Plain text should use `textContent`. If a product intentionally supports user-authored HTML, a robust and context-appropriate sanitization policy is required. Content Security Policy provides defense in depth but is not an excuse for unsafe insertion.

## Demonstrated outcome

Two Python source checks passed in cloud verification. Interactive browser behavior remains to be recorded separately by the operator; source tests do not constitute an exploit test.

## Next personal contribution

Alexander can add a local browser automation test, expand accessible status messaging, or document additional safe DOM APIs.
