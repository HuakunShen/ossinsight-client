import { $ } from "bun";

import { createClient } from "@hey-api/openapi-ts";

const openapiYaml =
  "https://raw.githubusercontent.com/pingcap/ossinsight/refs/heads/main/configs/public_api/openapi.yaml";

await createClient({
  input: openapiYaml,
  output: "src/heyapi",
  plugins: ["@hey-api/client-fetch"],
});

Bun.write(
  "src/heyapi/index.ts",
  (await Bun.file("src/heyapi/index.ts").text()) +
    `\nexport * from "./client.gen";`
);

await $`bunx openapi-typescript ${openapiYaml} -o src/schema.d.ts`;
// await $`bunx openapi-typescript-codegen -i ${openapiYaml} -o ./src/generated `;
// await $`bunx @hey-api/openapi-ts -i ${openapiYaml} -o src/heyapi -c @hey-api/client-fetch`;
await $`bunx openapi-zod-client ${openapiYaml} -o "./src/zod-client.ts"`;
