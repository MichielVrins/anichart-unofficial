"use cache";
import { MediaSeason } from "~/generated/graphql";
import { fetchSeasonalAnime } from "~/graphql/seasonalAnime";
import { NewAnimeCard } from "./AnimeCard";

export const AsyncAnimeList = async (props: {
  year: number;
  season: MediaSeason;
}) => {
  "use cache";

  const seasonalAnime = await fetchSeasonalAnime({
    season: props.season,
    year: props.year,
  });

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {seasonalAnime.map((media) => {
        return <NewAnimeCard key={media.id} media={media} />;
      })}
    </div>
  );
};
