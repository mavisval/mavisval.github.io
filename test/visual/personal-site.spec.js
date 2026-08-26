const { expect, test } = require("@playwright/test");

const academicPages = [
  ["/", "Zhongxin Hu"],
  ["/publications/", "Papers"],
  ["/projects/", "Projects"],
  ["/cv/", "CV"],
  ["/teaching/", "Teaching"],
  ["/interests/", "Beyond Research"],
];

for (const [route, heading] of academicPages) {
  test(`${heading} page renders without horizontal overflow`, async ({ page }) => {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });

    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("body")).toContainText(heading);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
}

test("Beyond Research renders four asymmetric contact sheets with watermarks", async ({ page }) => {
  await page.goto("/interests/", { waitUntil: "domcontentloaded" });

  const collections = page.locator(".photo-collection");
  await expect(collections).toHaveCount(4);

  const firstCollection = collections.first();
  await expect(firstCollection.locator(".photo-collection__counter")).toContainText("photographs");

  const photographs = firstCollection.locator(".photo-contact-sheet__item img");
  expect(await photographs.count()).toBeGreaterThan(0);
  await expect(photographs.first()).toBeVisible();
  await expect(firstCollection.locator(".photo-contact-sheet__item--featured").first()).toBeVisible();

  const watermark = await firstCollection
    .locator(".photo-contact-sheet__item")
    .first()
    .evaluate((photo) => getComputedStyle(photo, "::after").content);
  expect(watermark).toContain("Zhongxin Hu");
});
