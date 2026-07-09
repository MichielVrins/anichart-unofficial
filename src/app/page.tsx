import { AsyncAnimeList } from "~/app/_components/AnimeList";
import { SeasonView } from "~/app/_components/SeasonView";
import { getCurrentAnimeSeason } from "~/lib/seasons";

const buildDate = new Date();
const year = buildDate.getFullYear();
const season = getCurrentAnimeSeason(buildDate);

export default function Home() {
  return (
    <SeasonView year={year.toString()} season={season}>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-12 sm:px-4 sm:py-8">
          <AsyncAnimeList year={year} season={season} />
        </div>
      </main>
    </SeasonView>
  );
}
