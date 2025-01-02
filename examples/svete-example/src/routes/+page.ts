import type { PageLoad } from "./$types";
import { getClient } from "ossinsight-client";
import { createApiClient } from "ossinsight-client/zod-client";
import {
  client as heyapiClient,
  stargazersHistory,
} from "ossinsight-client/heyapi";

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load: PageLoad = async ({ params }) => {
  const url = "https://api.ossinsight.io/v1";
  const client = getClient({ url });
  heyapiClient.setConfig({
    baseUrl: "https://api.ossinsight.io/v1",
  });
  const kunkunStargazers = await stargazersHistory({
    path: {
      owner: "kunkunsh",
      repo: "kunkun",
    },
  });
  const zodClient = createApiClient(url);
  const stargazersCountries = await zodClient.get(
    "/repos/:owner/:repo/stargazers/countries/",
    {
      params: {
        owner: "facebook",
        repo: "react",
      },
    }
  );
  const trendingRepos = await client.GET("/trends/repos/");
  return {
    trendingRepos,
    stargazersCountries,
    kunkunStargazers,
  };
};
