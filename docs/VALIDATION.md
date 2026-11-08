# Cloud Validation — November 8, 2026

> **Current: 2/2 Python source tests and 8/8 Node tests passed (10 checks total).** Earlier results are historical; browser screenshots still require personal capture.

**Execution:** ChatGPT-managed Linux environment, Python 3.12.14. AI-assisted cloud run.

## Reproduce automated source checks

```bash
python -m unittest discover -s tests -v
```

**Result:** 2/2 source-level tests passed. They confirm that both rendering assignments are present and that the demo uses local scripts. They **do not** prove the interactive behavior in a browser.

## Browser verification (pending independent record)

1. Open `index.html` in a browser.
2. Click **Unsafe render**: sample `<strong>` markup should be parsed.
3. Click **Safe render**: markup should remain literal text.
4. Open `browser-checks.html`; check its three PASS/FAIL assertions.
5. Record browser/version, time, screenshots, and any discrepancies.

No browser observation has been attributed to Alexander. The local demonstration must never be described as a vulnerability discovered on a third-party website.

## Personal verification still required

- [ ] Alexander completes and documents both button paths
- [ ] Alexander opens the behavior-check page and records actual results
- [ ] Alexander explains why `textContent` protects plain-text rendering
- [ ] Alexander contributes an original improvement
