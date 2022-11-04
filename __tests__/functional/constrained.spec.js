import { test, expect } from '@playwright/test';
import { baseUrl, wait } from './shared';

test.describe('Constrained', () => {
  test('selection should be constrained to the area with only contains one element', async ({ page }) => {
    await goToOptimized(page, `${baseUrl}/constrained.html`)

    const mouse = page.mouse
    // move to the middle of the page
    await mouse.move(150, 150, { steps: 10 })
    await mouse.down()
    // move 300px down and to the end of the page
    // steps are how often the mouse moves
    await mouse.move(800, 450, { steps: 100 })
    await mouse.up()
    await wait(100)

    let executesFn = await page.evaluate(() => ({
      id: document.querySelector('.item.three').id,
      callbackIds: window.callbackIds,
    }))

    expect(executesFn.callbackIds.length).toBe(1)
    expect(executesFn.callbackIds[0]).toBe(executesFn.id)
  })
})
