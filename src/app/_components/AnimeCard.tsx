import Link from "next/link";
import type { MediaFragment } from "~/generated/graphql";
import { RatingBadge } from "./RatingBadge";
import { Card } from "~/components/ui/card";
import parse from "html-react-parser";
import { Countdown } from "./Countdown";
import { getEpisodeSummary } from "~/lib/anime/episodes";
import { WatchLabelButton } from "./WatchLabelButton";

export const NewAnimeCard: React.FC<{ media: MediaFragment }> = ({ media }) => {
  const { statusLabel, episodesText, hasUpcomingEpisode } =
    getEpisodeSummary(media);
  const coverImage = media.coverImage?.large;

  return (
    <Card className="relative overflow-hidden rounded-none sm:rounded-md">
      <div className="absolute right-2 top-2 z-10">
        <WatchLabelButton mediaId={media.id} />
      </div>
      <div className="flex gap-4">
        {coverImage ? (
          // AniList images are served directly to retain their browser/CDN caching.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            width={175}
            height={247}
            alt={`Cover image for ${media.title?.romaji ?? "anime"}`}
            src={coverImage}
            className="h-[193px] w-[135px] object-cover sm:h-[247px] sm:w-[175px]"
          />
        ) : null}

        <div className="pr-2 pt-2">
          <h2 className="pr-8 text-2xl font-medium tracking-tighter">
            <Link href={media.siteUrl ?? ""}>{media.title?.romaji ?? ""}</Link>
          </h2>
          <div className="flex flex-wrap items-center gap-x-2 text-sm">
            <span className="font-semibold">Genres:</span>
            {media.genres?.map((genre) => {
              return <div key={genre}>{genre}</div>;
            })}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">Rating:</span>
            <RatingBadge media={media} />
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold">Episodes:</span>
            <span>{episodesText}</span>
            <span className="rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
              {statusLabel}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">Source:</span>
            <span className="capitalize">
              {media.source?.toLowerCase().replaceAll("_", " ") ?? "Unknown"}
            </span>
          </div>
          {hasUpcomingEpisode ? (
            <div className="text-sm">
              <Countdown media={media} />
            </div>
          ) : null}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">Studio:</span>
            {media.studios?.nodes?.map((studio) => {
              return (
                <Link key={studio?.id} href={studio?.siteUrl ?? ""}>
                  {studio?.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-2 text-sm/relaxed text-faded">
        {media.description && parse(media.description)}
      </div>
    </Card>
  );
};
