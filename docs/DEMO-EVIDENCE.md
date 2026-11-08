# Demonstration Evidence — XSS Rendering Workbench

**Scope:** Local HTML rendering example. The unsafe path intentionally parses user input as markup; never deploy publicly.

```bash
python -m unittest discover -s tests -v
node --test tests/test_logic.mjs
python -m http.server 8766 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8766/advanced.html`, enter harmless `<strong>Example</strong>` markup, and compare the unsafe and safe buttons. Try the fragment and stored-note panels. **10 cloud source/helper tests passed.** Browser screenshots were **not** captured in the restricted cloud process environment and must be produced during Alexander's genuine browser walkthrough.

The lesson: `innerHTML` interprets markup; `textContent` outputs literal text. These tests do not demonstrate a vulnerability on any third-party website.
