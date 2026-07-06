import type { MediaFragment } from "~/generated/graphql";

export const RatingBadge: React.FC<{ media: MediaFragment }> = ({ media }) => {
  if (!media.averageScore) return null;
  const scaledRating = (media.averageScore / 10).toFixed(1);
  return (
    <div className="w-fit rounded bg-muted px-2">
      <p>{scaledRating}</p>
    </div>
  );
};
