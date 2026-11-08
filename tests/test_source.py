import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class SourceTests(unittest.TestCase):
    def test_both_rendering_paths_exist(self):
        script = (ROOT / "app.js").read_text(encoding="utf-8")
        self.assertIn("result.innerHTML = input.value", script)
        self.assertIn("result.textContent = input.value", script)

    def test_local_scripts_only(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn('src="app.js"', page)
        self.assertNotIn("https://", page)


if __name__ == "__main__":
    unittest.main()
