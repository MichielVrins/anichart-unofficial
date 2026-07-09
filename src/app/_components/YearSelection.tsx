"use client";
import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { MediaSeason } from "~/generated/graphql";
import { getSupportedYears } from "~/lib/seasons";

const subscribeToYearChanges = () => () => undefined;
const getBrowserYear = () => new Date().getFullYear();

export const YearSelection = (props: {
  year: string;
  season: MediaSeason;
  onNavigate: (selection: { year: string; season: MediaSeason }) => void;
}) => {
  const currentYear = useSyncExternalStore(
    subscribeToYearChanges,
    getBrowserYear,
    () => Number(props.year),
  );
  const supportedYears = getSupportedYears(currentYear);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-10 w-full max-w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
        <span>{props.year}</span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-96 min-w-[var(--radix-dropdown-menu-trigger-width)] overflow-y-auto">
        {supportedYears.map((year) => (
          <DropdownMenuItem key={year} asChild>
            <Link
              className="flex w-full py-1.5 pl-8 pr-2"
              href={`/anime/${year}/${props.season.toLowerCase()}`}
              aria-current={year.toString() === props.year ? "page" : undefined}
              onNavigate={(event) => {
                event.preventDefault();
                props.onNavigate({
                  year: year.toString(),
                  season: props.season,
                });
              }}
            >
              {year.toString() === props.year ? (
                <Check className="absolute left-2 h-4 w-4" />
              ) : null}
              {year}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
