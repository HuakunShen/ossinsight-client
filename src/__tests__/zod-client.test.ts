import { expect, test } from "bun:test";
import { createApiClient } from "../zod-client";

test("zod client", async () => {
  const client = createApiClient("https://api.ossinsight.io/v1");
  const trendingRepos = await client.get("/trends/repos/");
  expect(trendingRepos.data.result.code).toBe(200);
});
