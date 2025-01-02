<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import { getClient } from "ossinsight-client";
  onMount(async () => {
    const client = getClient({ url: "https://api.ossinsight.io/v1" });
    const trendingRepos = await client.GET("/trends/repos/");
    console.log(trendingRepos);
  });
  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>Trending Repos</h1>
  <pre>{JSON.stringify(data.trendingRepos, null, 2)}</pre>
</section>
<section>
  <h1>Stargzers Countries</h1>
  <pre>{JSON.stringify(data.stargazersCountries, null, 2)}</pre>
</section>
<section>
  <h1>Kunkun Stargzers</h1>
  <pre>{JSON.stringify(data.kunkunStargazers, null, 2)}</pre>
</section>

<style>
  section > pre {
    height: 40rem;
    overflow-y: scroll;
  }
</style>
