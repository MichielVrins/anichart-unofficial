import { Suspense } from "react";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { getCurrentAnimeSeason } from "~/lib/seasons";

export default function Home() {
  return (
    <Suspense fallback={<p>Loading current season…</p>}>
      <CurrentSeasonRedirect />
    </Suspense>
  );
}

async function CurrentSeasonRedirect() {
  await connection();
  const now = new Date();
  return redirect(
    `/anime/${now.getFullYear()}/${getCurrentAnimeSeason(now).toLowerCase()}`,
  );
}
