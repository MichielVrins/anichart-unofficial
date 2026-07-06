"use cache";

import {
  GetSeasonalAnimeDocument,
  type GetSeasonalAnimeQuery,
  type GetSeasonalAnimeQueryVariables,
} from "~/generated/graphql";

import { client } from "./graphqlClient";

type Media = NonNullable<
  NonNullable<NonNullable<GetSeasonalAnimeQuery["Page"]>["media"]>[0]
>[];

const fetchAllPages = async (variables: GetSeasonalAnimeQueryVariables) => {
  let items: Media = [];
  let hasNext = true;
  let currentPage = 1;
  while (hasNext) {
    const res = await client.request<GetSeasonalAnimeQuery>(
      GetSeasonalAnimeDocument,
      { ...variables, page: currentPage },
    );
    currentPage++;
    hasNext = res.Page?.pageInfo?.hasNextPage ?? false;
    const media = (res.Page?.media ?? []).filter((x) => x != null);
    items = items.concat(media);
  }
  return items;
};

export const fetchSeasonalAnime = async (
  variables: GetSeasonalAnimeQueryVariables,
) => {
  return (await fetchAllPages(variables)).sort(
    (a, b) => (b.popularity ?? 0) - (a.popularity ?? 0),
  );
};
