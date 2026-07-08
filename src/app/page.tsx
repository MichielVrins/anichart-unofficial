import { Suspense } from "react";
import { AsyncAnimeList } from "~/app/_components/AnimeList";
import { Header } from "~/app/_components/Header";
import { getCurrentAnimeSeason } from "~/lib/seasons";

export default function Home() {
  const now = new Date();
  const year = now.getFullYear();
  const season = getCurrentAnimeSeason(now);

  return (
    <>
      <Header year={year.toString()} season={season} />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-12 sm:px-4 sm:py-8">
          <Suspense fallback={<p>Loading anime…</p>}>
            <AsyncAnimeList year={year} season={season} />
          </Suspense>
        </div>
      </main>
    </>
  );
}
