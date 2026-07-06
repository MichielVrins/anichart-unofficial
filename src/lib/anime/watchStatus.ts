"use client";

import { useSyncExternalStore } from "react";
import {
  Check,
  CircleHelp,
  Clock,
  Eye,
  X,
  type LucideIcon,
} from "lucide-react";

/**
 * A LiveChart-style personal watch label for a show.
 * These are stored locally in the browser (no account / backend required).
 */
export type WatchStatus =
  | "watching"
  | "planning"
  | "considering"
  | "completed"
  | "dropped";

export type WatchStatusConfig = {
  value: WatchStatus;
  label: string;
  /** Icon shown on the corner badge and in the menu. */
  icon: LucideIcon;
  /** Tailwind classes for the filled badge (background + text). */
  badgeClass: string;
  /** Tailwind class for the colored icon in the menu. */
  iconClass: string;
};

// Order here is the order shown in the dropdown menu.
export const WATCH_STATUSES: WatchStatusConfig[] = [
  {
    value: "watching",
    label: "Watching",
    icon: Eye,
    badgeClass: "bg-emerald-500 text-white",
    iconClass: "text-emerald-500",
  },
  {
    value: "considering",
    label: "Considering",
    icon: CircleHelp,
    badgeClass: "bg-amber-500 text-white",
    iconClass: "text-amber-500",
  },
  {
    value: "planning",
    label: "Plan to watch",
    icon: Clock,
    badgeClass: "bg-sky-500 text-white",
    iconClass: "text-sky-500",
  },
  {
    value: "completed",
    label: "Completed",
    icon: Check,
    badgeClass: "bg-violet-500 text-white",
    iconClass: "text-violet-500",
  },
  {
    value: "dropped",
    label: "Dropped",
    icon: X,
    badgeClass: "bg-rose-500 text-white",
    iconClass: "text-rose-500",
  },
];

export const getStatusConfig = (status: WatchStatus) =>
  WATCH_STATUSES.find((s) => s.value === status)!;

const STORAGE_KEY = "anichart-unofficial:watch-status";
// Fired on the window whenever the map changes so every card stays in sync.
const CHANGE_EVENT = "watch-status-change";

type StatusMap = Partial<Record<string, WatchStatus>>;

const readMap = (): StatusMap => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StatusMap) : {};
  } catch {
    return {};
  }
};

const readStatus = (mediaId: number): WatchStatus | null =>
  readMap()[String(mediaId)] ?? null;

const writeStatus = (mediaId: number, next: WatchStatus | null) => {
  const map = readMap();
  const key = String(mediaId);
  if (next) {
    map[key] = next;
  } else {
    delete map[key];
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
};

const subscribe = (callback: () => void) => {
  window.addEventListener(CHANGE_EVENT, callback);
  // Sync across browser tabs too.
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
};

/**
 * Read + update the watch status for a single media id. Subscribes to an
 * external store (localStorage) so all cards stay in sync in-tab (via a window
 * event) and across tabs (via the storage event), and survives reloads. The
 * server snapshot is `null`, which keeps SSR/hydration in sync.
 */
export const useWatchStatus = (mediaId: number) => {
  const status = useSyncExternalStore(
    subscribe,
    () => readStatus(mediaId),
    () => null,
  );

  const setStatus = (next: WatchStatus | null) => {
    writeStatus(mediaId, next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return { status, setStatus };
};
