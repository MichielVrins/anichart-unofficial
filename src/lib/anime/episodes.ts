import { MediaStatus, type MediaFragment } from "~/generated/graphql";

type EpisodeContext = {
  status?: MediaStatus;
  totalEpisodes?: number;
  currentEpisodes?: number;
};

type EpisodeRule = {
  when: (context: EpisodeContext) => boolean;
  text: (context: EpisodeContext) => string;
};

const STATUS_LABELS: Partial<Record<MediaStatus, string>> = {
  [MediaStatus.Finished]: "Finished",
  [MediaStatus.Releasing]: "Airing",
  [MediaStatus.NotYetReleased]: "Upcoming",
  [MediaStatus.Cancelled]: "Cancelled",
  [MediaStatus.Hiatus]: "Hiatus",
};

const isNumber = (value: number | undefined): value is number =>
  typeof value === "number" && Number.isFinite(value);

const releasingRules: EpisodeRule[] = [
  {
    when: (context) =>
      isNumber(context.currentEpisodes) && isNumber(context.totalEpisodes),
    text: (context) => `${context.currentEpisodes} / ${context.totalEpisodes}`,
  },
  {
    when: (context) =>
      isNumber(context.currentEpisodes) && !isNumber(context.totalEpisodes),
    text: (context) => `${context.currentEpisodes} / ?`,
  },
  {
    when: (context) => isNumber(context.totalEpisodes),
    text: (context) => `? / ${context.totalEpisodes}`,
  },
];

const plannedRules: EpisodeRule[] = [
  {
    when: (context) => isNumber(context.totalEpisodes),
    text: (context) => `${context.totalEpisodes} planned`,
  },
];

const defaultRules: EpisodeRule[] = [
  {
    when: (context) => isNumber(context.totalEpisodes),
    text: (context) => `${context.totalEpisodes}`,
  },
];

const pickText = (
  rules: EpisodeRule[],
  context: EpisodeContext,
  fallback = "TBA",
) => rules.find((rule) => rule.when(context))?.text(context) ?? fallback;

const getStatusLabel = (status?: MediaStatus | null) =>
  (status ? STATUS_LABELS[status] : undefined) ?? "Status Unknown";

const canHaveUpcomingEpisode = (status?: MediaStatus) =>
  status === MediaStatus.Releasing || status === MediaStatus.NotYetReleased;

const MULTI_EPISODE_PREMIERE_WINDOW_SECONDS = 2 * 60 * 60;

export const getUpcomingAiringEpisodes = (media: MediaFragment) => {
  const schedule = [
    media.nextAiringEpisode,
    ...(media.airingSchedule?.nodes ?? []),
  ]
    .filter(
      (airing): airing is NonNullable<typeof airing> =>
        Boolean(airing) && typeof airing?.airingAt === "number",
    )
    .map(({ airingAt, episode }) => ({ airingAt, episode }))
    .filter(
      (airing, index, all) =>
        all.findIndex(
          (candidate) =>
            candidate.episode === airing.episode &&
            candidate.airingAt === airing.airingAt,
        ) === index,
    )
    .sort((a, b) => a.airingAt - b.airingAt);

  const first = schedule[0];
  if (!first) return [];

  return schedule.filter(
    ({ airingAt }) =>
      airingAt - first.airingAt <= MULTI_EPISODE_PREMIERE_WINDOW_SECONDS,
  );
};

const getUpcomingAiringEpisode = (media: MediaFragment) => {
  return getUpcomingAiringEpisodes(media)[0];
};

export const getEpisodeSummary = (media: MediaFragment) => {
  const status = media.status ?? undefined;
  const totalEpisodes = media.episodes ?? undefined;
  const upcoming = getUpcomingAiringEpisode(media);
  const nextEpisodeNumber = upcoming?.episode;
  const currentEpisodes = nextEpisodeNumber ? nextEpisodeNumber - 1 : undefined;

  const context: EpisodeContext = {
    status,
    totalEpisodes,
    currentEpisodes,
  };

  const episodesText = (() => {
    switch (status) {
      case MediaStatus.Releasing:
        return pickText(releasingRules, context);
      case MediaStatus.NotYetReleased:
        return pickText(plannedRules, context);
      default:
        return pickText(defaultRules, context);
    }
  })();

  return {
    statusLabel: getStatusLabel(status),
    episodesText,
    hasUpcomingEpisode: canHaveUpcomingEpisode(status) && Boolean(upcoming),
  } as const;
};
