const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto('https://a-maria-exam-2.onrender.com/books');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  