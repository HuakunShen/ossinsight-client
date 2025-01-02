import createClient from "openapi-fetch";
import type { paths } from "./schema.d.ts";

export function getClient(opts: {
  url: string;
}): ReturnType<typeof createClient<paths>> {
  return createClient<paths>({ baseUrl: opts.url });
}
export type { paths } from "./schema.d.ts";
