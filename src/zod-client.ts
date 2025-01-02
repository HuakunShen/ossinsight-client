import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/collections/",
    alias: "list-collections",
    description: `List collections.`,
    requestFormat: "json",
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({ repo_id: z.string(), repo_name: z.string() })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/collections/:collection_id/ranking_by_issues/",
    alias: "collection-repo-ranking-by-issues",
    description: `Rank the GitHub repositories in the specified collection according to the number of issues.`,
    requestFormat: "json",
    parameters: [
      {
        name: "period",
        type: "Query",
        schema: z
          .enum(["past_28_days", "past_month"])
          .optional()
          .default("past_28_days"),
      },
      {
        name: "collection_id",
        type: "Path",
        schema: z.number(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  repo_id: z.string(),
                  repo_name: z.string(),
                  current_period_growth: z.string(),
                  past_period_growth: z.string(),
                  growth_pop: z.string(),
                  rank_pop: z.string(),
                  total: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/collections/:collection_id/ranking_by_prs/",
    alias: "collection-repo-ranking-by-prs",
    description: `Rank the GitHub repositories in the specified collection according to the number of pull requests.`,
    requestFormat: "json",
    parameters: [
      {
        name: "period",
        type: "Query",
        schema: z
          .enum(["past_28_days", "past_month"])
          .optional()
          .default("past_28_days"),
      },
      {
        name: "collection_id",
        type: "Path",
        schema: z.number(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  repo_id: z.string(),
                  repo_name: z.string(),
                  current_period_growth: z.string(),
                  past_period_growth: z.string(),
                  growth_pop: z.string(),
                  rank_pop: z.string(),
                  total: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/collections/:collection_id/ranking_by_stars/",
    alias: "collection-repo-ranking-by-stars",
    description: `Rank the GitHub repositories in the specified collection according to the number of stars.`,
    requestFormat: "json",
    parameters: [
      {
        name: "period",
        type: "Query",
        schema: z
          .enum(["past_28_days", "past_month"])
          .optional()
          .default("past_28_days"),
      },
      {
        name: "collection_id",
        type: "Path",
        schema: z.number(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  repo_id: z.string(),
                  repo_name: z.string(),
                  current_period_growth: z.string(),
                  past_period_growth: z.string(),
                  growth_pop: z.string(),
                  rank_pop: z.string(),
                  total: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/collections/:collection_id/repos/",
    alias: "list-repos-of-collection",
    description: `List the repositories of collection.`,
    requestFormat: "json",
    parameters: [
      {
        name: "collection_id",
        type: "Path",
        schema: z.number(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({ repo_id: z.string(), repo_name: z.string() })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/collections/hot/",
    alias: "list-hot-collections",
    description: `List hot collections with top repositories of the collection.`,
    requestFormat: "json",
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  id: z.string(),
                  name: z.string(),
                  repos: z.string(),
                  repo_id: z.string(),
                  repo_name: z.string(),
                  repo_current_period_rank: z.string(),
                  repo_past_period_rank: z.string(),
                  repo_rank_changes: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/repos/:owner/:repo/issue_creators/",
    alias: "list-issue-creators",
    description: `Querying the issue creators for a given repository.`,
    requestFormat: "json",
    parameters: [
      {
        name: "sort",
        type: "Query",
        schema: z
          .enum([
            "issues",
            "issues-desc",
            "first_issue_opened_at",
            "first_issue_opened_at-desc",
            "login",
          ])
          .optional()
          .default("issues-desc"),
      },
      {
        name: "exclude_bots",
        type: "Query",
        schema: z.boolean().optional().default(true),
      },
      {
        name: "page",
        type: "Query",
        schema: z.number().int().optional().default(1),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.number().int().optional().default(30),
      },
      {
        name: "owner",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "repo",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  id: z.string(),
                  login: z.string(),
                  name: z.string(),
                  issues: z.string(),
                  first_issue_opened_at: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/repos/:owner/:repo/issue_creators/countries/",
    alias: "list-countries-of-issue-creators",
    description: `List countries/regions of stargazers for the specified repository.
  
&gt; **Notice**:
&gt; In the overall data, about **3.5%** of GitHub users provided valid country/region information.

&gt; **Note**: 
&gt; By default, the API does not count users without valid country/region information. 
&gt; If you need to count these users, you can set the &#x60;exclude_unknown&#x60; parameter to &#x60;false&#x60;.
`,
    requestFormat: "json",
    parameters: [
      {
        name: "exclude_unknown",
        type: "Query",
        schema: z.boolean().optional().default(true),
      },
      {
        name: "from",
        type: "Query",
        schema: z.string().optional().default("2000-01-01T00:00:00.000Z"),
      },
      {
        name: "to",
        type: "Query",
        schema: z.string().optional().default("2099-01-01T00:00:00.000Z"),
      },
      {
        name: "owner",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "repo",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  country_code: z.string(),
                  issue_creators: z.string(),
                  percentage: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/repos/:owner/:repo/issue_creators/history/",
    alias: "issue-creators-history",
    description: `Querying the historical trend of the number of issue creators in a given repository.`,
    requestFormat: "json",
    parameters: [
      {
        name: "per",
        type: "Query",
        schema: z.enum(["day", "week", "month"]).optional().default("month"),
      },
      {
        name: "from",
        type: "Query",
        schema: z.string().optional().default("2000-01-01T00:00:00.000Z"),
      },
      {
        name: "to",
        type: "Query",
        schema: z.string().optional().default("2099-01-01T00:00:00.000Z"),
      },
      {
        name: "owner",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "repo",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({ date: z.string(), issue_creators: z.string() })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/repos/:owner/:repo/issue_creators/organizations/",
    alias: "list-organizations-of-issue-creators",
    description: `List organizations of stargazers for the specified repository. 

&gt; **Notice**:
&gt; In the overall data, about **5.62%** of GitHub users provided valid organization information.

&gt; **Note**: 
&gt; By default, the API does not count users without valid organization information. 
&gt; If you need to count these users, you can set the &#x60;exclude_unknown&#x60; parameter to &#x60;false&#x60;.
`,
    requestFormat: "json",
    parameters: [
      {
        name: "exclude_unknown",
        type: "Query",
        schema: z.boolean().optional().default(true),
      },
      {
        name: "from",
        type: "Query",
        schema: z.string().optional().default("2000-01-01T00:00:00.000Z"),
      },
      {
        name: "to",
        type: "Query",
        schema: z.string().optional().default("2099-01-01T00:00:00.000Z"),
      },
      {
        name: "owner",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "repo",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  issue_creators: z.string(),
                  org_name: z.string(),
                  percentage: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/repos/:owner/:repo/pull_request_creators/",
    alias: "list-pull-request-creators",
    description: `Querying the pull request creators list in a given repository.

This API provides multiple ways to sort the query results, for example:

- &#x60;sort&#x3D;prs-desc&#x60; (Default): Sorted in descending order based on &#x60;prs&#x60; field (the number of PRs they have contributed), meaning that the contributor with the most PRs is at the top.
- &#x60;sort&#x3D;first_pr_merged_at-desc&#x60;: Sorted in descending order based on &#x60;first_pr_merged_at&#x60; field (the time of their first merged PR), which means you can got a list of new code contributors of the repository.
  `,
    requestFormat: "json",
    parameters: [
      {
        name: "sort",
        type: "Query",
        schema: z
          .enum([
            "login",
            "prs",
            "prs-desc",
            "first_pr_opened_at",
            "first_pr_opened_at-desc",
            "first_pr_merged_at",
            "first_pr_merged_at-desc",
          ])
          .optional()
          .default("prs-desc"),
      },
      {
        name: "exclude_bots",
        type: "Query",
        schema: z.boolean().optional().default(true),
      },
      {
        name: "page",
        type: "Query",
        schema: z.number().int().optional().default(1),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.number().int().optional().default(30),
      },
      {
        name: "owner",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "repo",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  id: z.string(),
                  login: z.string(),
                  name: z.string(),
                  prs: z.string(),
                  first_pr_opened_at: z.string(),
                  first_pr_merged_at: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/repos/:owner/:repo/pull_request_creators/countries/",
    alias: "list-countries-of-pr-creators",
    description: `List countries/regions of pull request creators for the specified repository.

&gt; **Notice**:
&gt; In the overall data, about **3.5%** of GitHub users provided valid country/region information.

&gt; **Note**: 
&gt; By default, the API does not count users without valid country/region information. 
&gt; If you need to count these users, you can set the &#x60;exclude_unknown&#x60; parameter to &#x60;false&#x60;.
`,
    requestFormat: "json",
    parameters: [
      {
        name: "exclude_unknown",
        type: "Query",
        schema: z.boolean().optional().default(true),
      },
      {
        name: "from",
        type: "Query",
        schema: z.string().optional().default("2000-01-01T00:00:00.000Z"),
      },
      {
        name: "to",
        type: "Query",
        schema: z.string().optional().default("2099-01-01T00:00:00.000Z"),
      },
      {
        name: "owner",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "repo",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  country_code: z.string(),
                  percentage: z.string(),
                  pull_request_creators: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/repos/:owner/:repo/pull_request_creators/history/",
    alias: "pull-request-creators-history",
    description: `Querying the historical trend of the number of pull request creators in a given repository.`,
    requestFormat: "json",
    parameters: [
      {
        name: "per",
        type: "Query",
        schema: z.enum(["day", "week", "month"]).optional().default("month"),
      },
      {
        name: "from",
        type: "Query",
        schema: z.string().optional().default("2000-01-01T00:00:00.000Z"),
      },
      {
        name: "to",
        type: "Query",
        schema: z.string().optional().default("2099-01-01T00:00:00.000Z"),
      },
      {
        name: "owner",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "repo",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({ date: z.string(), pull_request_creators: z.string() })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/repos/:owner/:repo/pull_request_creators/organizations/",
    alias: "list-organizations-of-pr-creators",
    description: `List organizations of pull request creators for the specified repository.

&gt; **Notice**:
&gt; In the overall data, about **5.62%** of GitHub users has valid organization information.

&gt; **Note**: 
&gt; By default, the API does not count users without valid organization information. 
&gt; If you need to count these users, you can set the &#x60;exclude_unknown&#x60; parameter to &#x60;false&#x60;.
`,
    requestFormat: "json",
    parameters: [
      {
        name: "exclude_unknown",
        type: "Query",
        schema: z.boolean().optional().default(true),
      },
      {
        name: "from",
        type: "Query",
        schema: z.string().optional().default("2000-01-01T00:00:00.000Z"),
      },
      {
        name: "to",
        type: "Query",
        schema: z.string().optional().default("2099-01-01T00:00:00.000Z"),
      },
      {
        name: "owner",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "repo",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  org_name: z.string(),
                  percentage: z.string(),
                  pull_request_creators: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/repos/:owner/:repo/stargazers/countries/",
    alias: "list-countries-of-stargazers",
    description: `List countries/regions of stargazers for the specified repository.
  
&gt; **Notice**:
&gt; In the overall data, about **3.5%** of GitHub users provided valid country/region information.

&gt; **Note**: 
&gt; By default, the API does not count users without valid country/region information. 
&gt; If you need to count these users, you can set the &#x60;exclude_unknown&#x60; parameter to &#x60;false&#x60;.
`,
    requestFormat: "json",
    parameters: [
      {
        name: "exclude_unknown",
        type: "Query",
        schema: z.boolean().optional().default(true),
      },
      {
        name: "from",
        type: "Query",
        schema: z.string().optional().default("2000-01-01T00:00:00.000Z"),
      },
      {
        name: "to",
        type: "Query",
        schema: z.string().optional().default("2099-01-01T00:00:00.000Z"),
      },
      {
        name: "owner",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "repo",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  country_code: z.string(),
                  stargazers: z.string(),
                  percentage: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/repos/:owner/:repo/stargazers/history/",
    alias: "stargazers-history",
    description: `Querying the historical trend of the number of stargazers in a given repository.`,
    requestFormat: "json",
    parameters: [
      {
        name: "per",
        type: "Query",
        schema: z.enum(["day", "week", "month"]).optional().default("month"),
      },
      {
        name: "from",
        type: "Query",
        schema: z.string().optional().default("2000-01-01T00:00:00.000Z"),
      },
      {
        name: "to",
        type: "Query",
        schema: z.string().optional().default("2099-01-01T00:00:00.000Z"),
      },
      {
        name: "owner",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "repo",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({ date: z.string(), stargazers: z.string() })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/repos/:owner/:repo/stargazers/organizations/",
    alias: "list-organizations-of-stargazers",
    description: `List organizations of stargazers for the specified repository. 

&gt; **Notice**:
&gt; In the overall data, about **5.62%** of GitHub users provided valid organization information.

&gt; **Note**: 
&gt; By default, the API does not count users without valid organization information. 
&gt; If you need to count these users, you can set the &#x60;exclude_unknown&#x60; parameter to &#x60;false&#x60;.
`,
    requestFormat: "json",
    parameters: [
      {
        name: "exclude_unknown",
        type: "Query",
        schema: z.boolean().optional().default(true),
      },
      {
        name: "from",
        type: "Query",
        schema: z.string().optional().default("2000-01-01T00:00:00.000Z"),
      },
      {
        name: "to",
        type: "Query",
        schema: z.string().optional().default("2099-01-01T00:00:00.000Z"),
      },
      {
        name: "owner",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "repo",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  org_name: z.string(),
                  percentage: z.string(),
                  stargazers: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
  {
    method: "get",
    path: "/trends/repos/",
    alias: "list-trending-repos",
    description: `Trending repos is an open source alternative to GitHub trends, which showcases recently popular open source projects in the GitHub community.

&gt; **Note**
&gt;
&gt; Please URI encode the requested parameters, e.g. &#x60;C++&#x60; needs to be encoded as &#x60;C%2B%2B&#x60;.
 
☁️ Daily run on [TiDB Cloud](https://tidbcloud.com/?utm_source&#x3D;ossinsight&amp;utm_medium&#x3D;ossinsight_api), analyze upon dataset that has over 6 billion GitHub events.`,
    requestFormat: "json",
    parameters: [
      {
        name: "period",
        type: "Query",
        schema: z
          .enum(["past_24_hours", "past_week", "past_month", "past_3_months"])
          .optional()
          .default("past_24_hours"),
      },
      {
        name: "language",
        type: "Query",
        schema: z
          .enum([
            "All",
            "JavaScript",
            "Java",
            "Python",
            "PHP",
            "C++",
            "C#",
            "TypeScript",
            "Shell",
            "C",
            "Ruby",
            "Rust",
            "Go",
            "Kotlin",
            "HCL",
            "PowerShell",
            "CMake",
            "Groovy",
            "PLpgSQL",
            "TSQL",
            "Dart",
            "Swift",
            "HTML",
            "CSS",
            "Elixir",
            "Haskell",
            "Solidity",
            "Assembly",
            "R",
            "Scala",
            "Julia",
            "Lua",
            "Clojure",
            "Erlang",
            "Common Lisp",
            "Emacs Lisp",
            "OCaml",
            "MATLAB",
            "Objective-C",
            "Perl",
            "Fortran",
          ])
          .optional()
          .default("All"),
      },
    ],
    response: z
      .object({
        type: z.literal("sql_endpoint"),
        data: z
          .object({
            columns: z.array(
              z
                .object({
                  col: z.string(),
                  data_type: z.enum([
                    "CHAR",
                    "BIGINT",
                    "DECIMAL",
                    "INT",
                    "UNSIGNED BIGINT",
                    "TINYINT",
                    "TIMESTAMP",
                    "TEXT",
                    "VARCHAR",
                    "DATETIME",
                    "DOUBLE",
                    "FLOAT",
                    "DATE",
                    "TIME",
                    "YEAR",
                    "MEDIUMINT",
                    "SMALLINT",
                    "BIT",
                    "BINARY",
                    "VARBINARY",
                    "JSON",
                    "ENUM",
                    "SET",
                    "TINYTEXT",
                    "MEDIUMTEXT",
                    "LONGTEXT",
                    "TINYBLOB",
                    "MEDIUMBLOB",
                    "BLOB",
                    "LONGBLOB",
                  ]),
                  nullable: z.boolean(),
                })
                .passthrough()
            ),
            rows: z.array(
              z
                .object({
                  repo_id: z.string(),
                  repo_name: z.string(),
                  primary_language: z.string(),
                  description: z.string(),
                  stars: z.string(),
                  forks: z.string(),
                  pull_requests: z.string(),
                  pushes: z.string(),
                  total_score: z.string(),
                  contributor_logins: z.string(),
                  collection_names: z.string(),
                })
                .partial()
                .passthrough()
            ),
            result: z
              .object({
                code: z.number(),
                message: z.string(),
                start_ms: z.number(),
                end_ms: z.number(),
                latency: z.string(),
                row_count: z.number(),
                row_affect: z.number(),
                limit: z.number(),
                databases: z.array(z.string()),
              })
              .partial()
              .passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
