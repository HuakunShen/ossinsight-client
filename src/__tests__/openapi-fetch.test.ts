import { expect, test } from "bun:test";
import { getClient } from "../index";

test("openapi-fetch", async () => {
  const client = getClient({ url: "https://api.ossinsight.io/v1" });
  const res = await client.GET("/trends/repos/");
  expect(res.error).toBeUndefined();
  expect(res.data).toBeDefined();
  expect(res.response.status).toBe(200);
});
