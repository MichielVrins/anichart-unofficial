"use client";

import { type ReactNode, useOptimistic, useTransition } from "react";
import { useRouter } from "next/navigation";
import { MediaSeason } from "~/generated/graphql";
import { Header } from "./Header";

type Selection = {
  year: string;
  season: MediaSeason;
};

export function SeasonView({
  children,
  year,
  season,
}: Selection & { children: ReactNode }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [selection, setSelection] = useOptimistic({ year, season });

  const navigate = (nextSelection: Selection) => {
    startTransition(() => {
      setSelection(nextSelection);
      router.push(
        `/anime/${nextSelection.year}/${nextSelection.season.toLowerCase()}`,
      );
    });
  };

  return (
    <>
      <Header {...selection} onNavigate={navigate} />
      <div
        className={`transition-opacity ${isPending ? "opacity-45" : ""}`}
        aria-busy={isPending}
      >
        {children}
      </div>
      {isPending ? (
        <div
          className="fixed inset-x-0 top-0 z-50 h-1 animate-pulse bg-primary"
          role="progressbar"
          aria-label="Loading season"
        />
      ) : null}
    </>
  );
}
