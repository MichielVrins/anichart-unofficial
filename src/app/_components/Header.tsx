import Link from "next/link";
import { MediaSeason } from "~/generated/graphql";
import { ANIME_SEASONS } from "~/lib/seasons";
import { ModeToggle } from "./ModeToggle";
import { YearSelection } from "./YearSelection";

export function Header(props: { year: string; season: MediaSeason }) {
  return (
    <header className="flex items-center justify-between border p-3 text-faded">
      <nav className="flex w-full items-center gap-2" aria-label="Anime season">
        {ANIME_SEASONS.map((mediaSeason) => (
          <SeasonLink
            key={mediaSeason}
            year={props.year}
            season={mediaSeason}
            currentSeason={props.season}
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
}: {
  year: string;
  season: MediaSeason;
  currentSeason: MediaSeason;
}) => {
  const isCurrent = season === currentSeason;

  return (
    <Link
      className={`h-[2em] border-primary text-sm capitalize md:text-base ${
        isCurrent ? "border-b-2 font-semibold" : ""
      }`}
      href={`/anime/${year}/${season.toLowerCase()}`}
      aria-current={isCurrent ? "page" : undefined}
    >
      {season.toLowerCase()}
    </Link>
  );
};
