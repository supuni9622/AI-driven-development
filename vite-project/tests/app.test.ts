import { Browser, Page, chromium } from 'playwright';

describe('HiMom', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
  });

  afterEach(async () => {
    await page.close();
  });

  it('should toggle the text when the button is clicked', async () => {
    // Verify that the text is initially visible
    const text = await page.$('div:has-text("hi mom")');
    expect(text).not.toBeNull();

    // Click the toggle button
    const button = await page.$('button:has-text("Toggle")');
    await button.click();

    // Verify that the text is now hidden
    const hiddenText = await page.$('div:has-text("hi mom")');
    expect(hiddenText).toBeNull();

    // Click the toggle button again
    await button.click();

    // Verify that the text is now visible again
    const visibleText = await page.$('div:has-text("hi mom")');
    expect(visibleText).not.toBeNull();
  });
});
