"use client";

import { Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { cn } from "~/lib/utils";
import {
  getStatusConfig,
  useWatchStatus,
  WATCH_STATUSES,
} from "~/lib/anime/watchStatus";

export const WatchLabelButton: React.FC<{ mediaId: number }> = ({
  mediaId,
}) => {
  const { status, setStatus } = useWatchStatus(mediaId);
  const config = status ? getStatusConfig(status) : null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={
            config ? `Watch label: ${config.label}` : "Add watch label"
          }
          title={config ? config.label : "Add watch label"}
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold shadow-sm ring-1 ring-black/10 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            config
              ? config.badgeClass
              : "bg-background/80 text-muted-foreground backdrop-blur",
          )}
        >
          {config ? (
            <config.icon className="h-4 w-4" aria-hidden />
          ) : (
            <Plus className="h-4 w-4" aria-hidden />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>Set label</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {WATCH_STATUSES.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setStatus(option.value)}
            className="gap-2"
          >
            <option.icon
              className={cn("h-4 w-4", option.iconClass)}
              aria-hidden
            />
            <span>{option.label}</span>
            {status === option.value ? (
              <span className="ml-auto text-xs text-muted-foreground">•</span>
            ) : null}
          </DropdownMenuItem>
        ))}
        {status ? (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setStatus(null)}
              className="text-muted-foreground"
            >
              Remove label
            </DropdownMenuItem>
          </>
        ) : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
