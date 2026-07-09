"use client";

import Link from "next/link";
import { MediaSeason } from "~/generated/graphql";
import { ANIME_SEASONS } from "~/lib/seasons";
import { ModeToggle } from "./ModeToggle";
import { YearSelection } from "./YearSelection";

type Selection = {
  year: string;
  season: MediaSeason;
};

export function Header(
  props: Selection & { onNavigate: (selection: Selection) => void },
) {
  return (
    <header className="flex items-center justify-between border p-3 text-faded">
      <nav className="flex w-full items-center gap-2" aria-label="Anime season">
        {ANIME_SEASONS.map((mediaSeason) => (
          <SeasonLink
            key={mediaSeason}
            year={props.year}
            season={mediaSeason}
            currentSeason={props.season}
            onNavigate={props.onNavigate}
          />
        ))}
        <YearSelection {...props} />
        <div className="grow" />
        <ModeToggle />
      </nav>
    </header>
  );
}

const SeasonLink = ({
  year,
  season,
  currentSeason,
  onNavigate,
}: {
  year: string;
  season: MediaSeason;
  currentSeason: MediaSeason;
  onNavigate: (selection: Selection) => void;
}) => {
  const isCurrent = season === currentSeason;
  const href = `/anime/${year}/${season.toLowerCase()}`;

  return (
    <Link
      className={`h-[2em] border-primary text-sm capitalize md:text-base ${
        isCurrent ? "border-b-2 font-semibold" : ""
      }`}
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      onClick={(event) => {
        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        event.preventDefault();
        onNavigate({ year, season });
      }}
    >
      {season.toLowerCase()}
    </Link>
  );
};
