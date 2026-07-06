"use client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { MediaSeason } from "~/generated/graphql";
import { getSupportedYears } from "~/lib/seasons";

export const YearSelection = (props: { year: string; season: MediaSeason }) => {
  const router = useRouter();

  return (
    <Select
      onValueChange={(year) =>
        router.push(`/anime/${year}/${props.season.toLowerCase()}`)
      }
      value={props.year}
    >
      <SelectTrigger className="max-w-[180px]">
        <SelectValue placeholder={props.year} />
      </SelectTrigger>
      <SelectContent>
        {getSupportedYears().map((year) => (
          <SelectItem key={year} value={year.toString()}>
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
