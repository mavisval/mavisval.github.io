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

test("Beyond Research galleries render uploaded collections and advance", async ({ page }) => {
  await page.goto("/interests/", { waitUntil: "domcontentloaded" });

  const collections = page.locator("[data-stacked-carousel]");
  await expect(collections).toHaveCount(4);

  const firstCollection = collections.first();
  const counter = firstCollection.locator(".photo-collection__counter");
  await expect(counter).toContainText("1 /");
  await expect(firstCollection.locator('[data-position="0"] img')).toBeVisible();

  await firstCollection.locator("[data-carousel-next]").click();
  await expect(counter).toContainText("2 /");

  const watermark = await firstCollection.locator('[data-position="0"]').evaluate((slide) => getComputedStyle(slide, "::after").content);
  expect(watermark).toContain("Zhongxin Hu");
});
