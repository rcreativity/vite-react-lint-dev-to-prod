import { expect, test } from "@playwright/test";

test.describe("Posts page", () => {
  test.beforeEach(async ({ page }) => {
    // Intercept API requests and mock data
    await page.route("https://jsonplaceholder.typicode.com/posts", (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          { userId: 1, id: 1, title: "Mock Post 1", body: "Content 1" },
          { userId: 1, id: 2, title: "Mock Post 2", body: "Content 2" },
        ]),
      });
    });

    await page.goto("/posts"); // Go to the base URL
  });

  test("should render posts", async ({ page }) => {
    // Check that loading text appears
    await expect(page.locator("text=Loading")).toBeVisible();

    // Wait for posts to appear
    await expect(page.locator("text=Mock Post 1")).toBeVisible();
    await expect(page.locator("text=Mock Post 2")).toBeVisible();
  });
});
