import { expect, test } from "bun:test";
import { client, listTrendingRepos } from "../heyapi";

test("api", async () => {
  client.setConfig({
    baseUrl: "https://api.ossinsight.io/v1",
  });
  const rustTrendingRepos = await listTrendingRepos({
    query: {
      language: "Rust",
    },
  });
  expect(rustTrendingRepos.error).toBeUndefined();
  expect(rustTrendingRepos.data).toBeDefined();
  expect(rustTrendingRepos.response.status).toBe(200);
});
