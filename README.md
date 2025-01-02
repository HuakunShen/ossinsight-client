# ossinsight-client

> A simple OSSInsight TypeScript SDK generated from the official public API openapi schema. https://raw.githubusercontent.com/pingcap/ossinsight/refs/heads/main/configs/public_api/openapi.yaml
> You can generate a client in any language with their schema, this package was created to facilitate my own projects.

It provides client sdk of 3 styles in subpackages

1. [`openapi-typescript`](https://www.npmjs.com/package/openapi-typescript) + [`openapi-fetch`](https://www.npmjs.com/package/openapi-fetch)

   - `ossinsight-client`

     ```ts
     import { getClient } from "ossinsight-client";

     const client = getClient({ url: "https://api.ossinsight.io/v1" });
     const res = await client.GET("/trends/repos/");
     expect(res.error).toBeUndefined();
     expect(res.data).toBeDefined();
     expect(res.response.status).toBe(200);
     ```

2. [`openapi-zod-client`](https://www.npmjs.com/package/openapi-zod-client)

   - `ossinsight-client/zod-client`

     ```ts
     import { createApiClient } from "ossinsight-client/zod-client";

     const client = createApiClient("https://api.ossinsight.io/v1");
     const trendingRepos = await client.get("/trends/repos/");
     expect(trendingRepos.data.result.code).toBe(200);
     ```

3. [`@hey-api/openapi-ts`](https://www.npmjs.com/package/@hey-api/openapi-ts)

   - `ossinsight-client/heyapi`

     ```ts
     import { createApiClient } from "ossinsight-client/zod-client";

     const client = createApiClient("https://api.ossinsight.io/v1");
     const trendingRepos = await client.get("/trends/repos/");
     expect(trendingRepos.data.result.code).toBe(200);
     ```
