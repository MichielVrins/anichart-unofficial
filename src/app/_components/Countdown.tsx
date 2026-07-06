"use client";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";
import { MediaStatus, type MediaFragment } from "~/generated/graphql";
import { getUpcomingAiringEpisodes } from "~/lib/anime/episodes";

dayjs.extend(duration);

export const Countdown: React.FC<{ media: MediaFragment }> = ({ media }) => {
  // https://nextjs.org/docs/messages/next-prerender-current-time#reactive-use-case
  const [currentTime, setTime] = useState(0);
  useEffect(() => {
    const updateTime = () => setTime(dayjs().unix());
    const initialTimer = window.setTimeout(updateTime, 0);
    const interval = window.setInterval(updateTime, 30_000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(interval);
    };
  }, []);
  if (
    media.status !== MediaStatus.Releasing &&
    media.status !== MediaStatus.NotYetReleased
  )
    return null;
  if (currentTime === 0) return null;
  const upcomingEpisodes = getUpcomingAiringEpisodes(media).filter(
    ({ airingAt }) => airingAt > currentTime,
  );
  if (upcomingEpisodes.length === 0) return null;

  const formatTimeUntil = (airingAt: number) => {
    const difference = dayjs.duration((airingAt - currentTime) * 1000);
    const days = Math.floor(difference.asDays());
    const hours = difference.hours();
    const minutes = difference.minutes();

    return [
      days > 0 ? `${days}d` : null,
      hours > 0 ? `${hours}h` : null,
      `${minutes}m`,
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <span className="flex flex-wrap items-center gap-x-2">
      <span className="font-semibold">
        {upcomingEpisodes.length > 1 ? "Double premiere:" : "Next episode:"}
      </span>
      {upcomingEpisodes.map(({ episode, airingAt }, index) => (
        <span className="whitespace-nowrap" key={`${episode}-${airingAt}`}>
          {index > 0 ? (
            <span className="mr-2 text-muted-foreground">·</span>
          ) : null}
          Ep. {episode} <span className="text-muted-foreground">in</span>{" "}
          {formatTimeUntil(airingAt)}
        </span>
      ))}
    </span>
  );
};
