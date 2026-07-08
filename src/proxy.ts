import { NextResponse, type NextRequest } from "next/server";

const getCurrentAnimeSeasonSlug = (date: Date) => {
  const month = date.getMonth();

  if (month < 3) return "winter";
  if (month < 6) return "spring";
  if (month < 9) return "summer";
  return "fall";
};

export function proxy(request: NextRequest) {
  const now = new Date();
  const destination = request.nextUrl.clone();

  destination.pathname = `/anime/${now.getFullYear()}/${getCurrentAnimeSeasonSlug(now)}`;

  return NextResponse.rewrite(destination);
}

export const config = {
  matcher: "/",
};
