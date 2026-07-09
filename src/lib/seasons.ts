import { MediaSeason } from "~/generated/graphql";

export const ANIME_SEASONS = [
  MediaSeason.Winter,
  MediaSeason.Spring,
  MediaSeason.Summer,
  MediaSeason.Fall,
] as const;

export const FIRST_SUPPORTED_YEAR = 2019;

export const getSupportedYears = (currentYear = new Date().getFullYear()) =>
  Array.from(
    { length: currentYear + 2 - FIRST_SUPPORTED_YEAR },
    (_, index) => currentYear + 1 - index,
  );

export const getPrebuiltYears = (currentYear = new Date().getFullYear()) => [
  currentYear,
];

export const getCurrentAnimeSeason = (date = new Date()) => {
  const month = date.getMonth();

  if (month < 3) return MediaSeason.Winter;
  if (month < 6) return MediaSeason.Spring;
  if (month < 9) return MediaSeason.Summer;
  return MediaSeason.Fall;
};

export const parseAnimeSeason = (value: string) =>
  ANIME_SEASONS.find((season) => season.toLowerCase() === value.toLowerCase());
