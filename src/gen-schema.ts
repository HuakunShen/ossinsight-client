import { $ } from "bun";

const openapiYaml =
  "https://raw.githubusercontent.com/pingcap/ossinsight/refs/heads/main/configs/public_api/openapi.yaml";
await $`bunx openapi-typescript ${openapiYaml} -o src/schema.d.ts`;
// await $`bunx openapi-typescript-codegen -i ${openapiYaml} -o ./src/generated `;
await $`bunx @hey-api/openapi-ts -i ${openapiYaml} -o src/heyapi -c @hey-api/client-fetch`;
await $`bunx openapi-zod-client ${openapiYaml} -o "./src/zod-client.ts"`;
