const { expect, test } = require("@playwright/test");

const academicPages = [
  ["./", "Zhongxin Hu"],
  ["publications/", "Papers"],
  ["projects/", "Projects"],
  ["cv/", "CV"],
  ["teaching/", "Teaching"],
  ["interests/", "Beyond Research"],
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

test("Beyond Research preserves photo proportions and supports overlaid navigation", async ({ page }, testInfo) => {
  await page.goto("interests/", { waitUntil: "domcontentloaded" });

  const collections = page.locator("[data-stacked-carousel]");
  await expect(collections).toHaveCount(4);

  const firstCollection = collections.first();
  const counter = firstCollection.locator(".photo-collection__counter");
  await expect(counter).toContainText("1 /");

  const photographs = firstCollection.locator(".stacked-carousel__slide img");
  expect(await photographs.count()).toBeGreaterThan(0);
  const activePhotograph = firstCollection.locator('[data-position="0"] img');
  await expect(activePhotograph).toBeVisible();

  const ratioDifference = await activePhotograph.evaluate((image) =>
    Math.abs(image.clientWidth / image.clientHeight - image.naturalWidth / image.naturalHeight)
  );
  expect(ratioDifference).toBeLessThan(0.01);

  const stage = firstCollection.locator(".stacked-carousel__stage");
  await expect(stage.locator(".stacked-carousel__controls")).toHaveCount(1);

  await firstCollection.locator("[data-carousel-next]").click();
  await expect(counter).toContainText("2 /");

  if (testInfo.project.name === "mobile") {
    await stage.evaluate((element) => {
      element.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, clientX: 260 }));
      element.dispatchEvent(new PointerEvent("pointerup", { bubbles: true, clientX: 120 }));
    });
    await expect(counter).toContainText("3 /");
  }

  const watermark = await firstCollection
    .locator('[data-position="0"]')
    .first()
    .evaluate((photo) => getComputedStyle(photo, "::after").content);
  expect(watermark).toContain("Zhongxin Hu");
});
