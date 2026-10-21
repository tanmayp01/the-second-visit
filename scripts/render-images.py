"""Re-render public/og.png and public/apple-touch-icon.png: python3 scripts/render-images.py (needs Playwright)."""
import asyncio, pathlib
from playwright.async_api import async_playwright
root = pathlib.Path(__file__).resolve().parent.parent
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for html, out, w, h in [('social-card.html', 'og.png', 1200, 630), ('icon.html', 'apple-touch-icon.png', 180, 180)]:
            pg = await b.new_page(viewport={'width': w, 'height': h})
            await pg.goto((root / 'scripts' / html).as_uri())
            await pg.wait_for_timeout(800)
            await pg.screenshot(path=str(root / 'public' / out))
        await b.close()
asyncio.run(main())
