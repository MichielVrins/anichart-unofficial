import { notFound } from "next/navigation";
import { AsyncAnimeList } from "~/app/_components/AnimeList";
import { SeasonView } from "~/app/_components/SeasonView";
import {
  ANIME_SEASONS,
  FIRST_SUPPORTED_YEAR,
  getPrebuiltYears,
  parseAnimeSeason,
} from "~/lib/seasons";

export function generateStaticParams() {
  return getPrebuiltYears().flatMap((year) =>
    ANIME_SEASONS.map((season) => ({
      year: year.toString(),
      season: season.toLowerCase(),
    })),
  );
}

type SeasonPageProps = {
  params: Promise<{ year: string; season: string }>;
};

export default async function SeasonAnime({ params }: SeasonPageProps) {
  const { year: yearParam, season: seasonParam } = await params;
  const year = Number(yearParam);
  const season = parseAnimeSeason(seasonParam);

  if (!Number.isInteger(year) || year < FIRST_SUPPORTED_YEAR || !season) {
    notFound();
  }

  return (
    <SeasonView year={yearParam} season={season}>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-12 sm:px-4 sm:py-8">
          <AsyncAnimeList year={year} season={season} />
        </div>
      </main>
    </SeasonView>
  );
}
