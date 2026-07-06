import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  CountryCode: { input: any; output: any };
  FuzzyDateInt: { input: any; output: any };
  Json: { input: any; output: any };
};

/** Activity sort enums */
export enum ActivitySort {
  Id = "ID",
  IdDesc = "ID_DESC",
  Pinned = "PINNED",
}

/** Activity type enum. */
export enum ActivityType {
  /** A anime list update activity */
  AnimeList = "ANIME_LIST",
  /** A manga list update activity */
  MangaList = "MANGA_LIST",
  /** Anime & Manga list update, only used in query arguments */
  MediaList = "MEDIA_LIST",
  /** A text message activity sent to another user */
  Message = "MESSAGE",
  /** A text activity */
  Text = "TEXT",
}

export type AiringScheduleInput = {
  airingAt?: InputMaybe<Scalars["Int"]["input"]>;
  episode?: InputMaybe<Scalars["Int"]["input"]>;
  timeUntilAiring?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Airing schedule sort enums */
export enum AiringSort {
  Episode = "EPISODE",
  EpisodeDesc = "EPISODE_DESC",
  Id = "ID",
  IdDesc = "ID_DESC",
  MediaId = "MEDIA_ID",
  MediaIdDesc = "MEDIA_ID_DESC",
  Time = "TIME",
  TimeDesc = "TIME_DESC",
}

export type AniChartHighlightInput = {
  highlight?: InputMaybe<Scalars["String"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The names of the character */
export type CharacterNameInput = {
  /** Other names the character might be referred by */
  alternative?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Other names the character might be referred to as but are spoilers */
  alternativeSpoiler?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** The character's given name */
  first?: InputMaybe<Scalars["String"]["input"]>;
  /** The character's surname */
  last?: InputMaybe<Scalars["String"]["input"]>;
  /** The character's middle name */
  middle?: InputMaybe<Scalars["String"]["input"]>;
  /** The character's full name in their native language */
  native?: InputMaybe<Scalars["String"]["input"]>;
};

/** The role the character plays in the media */
export enum CharacterRole {
  /** A background character in the media */
  Background = "BACKGROUND",
  /** A primary character role in the media */
  Main = "MAIN",
  /** A supporting character role in the media */
  Supporting = "SUPPORTING",
}

/** Character sort enums */
export enum CharacterSort {
  Favourites = "FAVOURITES",
  FavouritesDesc = "FAVOURITES_DESC",
  Id = "ID",
  IdDesc = "ID_DESC",
  /** Order manually decided by moderators */
  Relevance = "RELEVANCE",
  Role = "ROLE",
  RoleDesc = "ROLE_DESC",
  SearchMatch = "SEARCH_MATCH",
}

export enum ExternalLinkMediaType {
  Anime = "ANIME",
  Manga = "MANGA",
  Staff = "STAFF",
}

export enum ExternalLinkType {
  Info = "INFO",
  Social = "SOCIAL",
  Streaming = "STREAMING",
}

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDateInput = {
  /** Numeric Day (24) */
  day?: InputMaybe<Scalars["Int"]["input"]>;
  /** Numeric Month (3) */
  month?: InputMaybe<Scalars["Int"]["input"]>;
  /** Numeric Year (2017) */
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Types that can be liked */
export enum LikeableType {
  Activity = "ACTIVITY",
  ActivityReply = "ACTIVITY_REPLY",
  Thread = "THREAD",
  ThreadComment = "THREAD_COMMENT",
}

export type ListActivityOptionInput = {
  disabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<MediaListStatus>;
};

/** An external link to another site related to the media */
export type MediaExternalLinkInput = {
  /** The id of the external link */
  id: Scalars["Int"]["input"];
  /** The site location of the external link */
  site: Scalars["String"]["input"];
  /** The url of the external link */
  url: Scalars["String"]["input"];
};

/** The format the media was released in */
export enum MediaFormat {
  /** Professionally published manga with more than one chapter */
  Manga = "MANGA",
  /** Anime movies with a theatrical release */
  Movie = "MOVIE",
  /** Short anime released as a music video */
  Music = "MUSIC",
  /** Written books released as a series of light novels */
  Novel = "NOVEL",
  /** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
  Ona = "ONA",
  /** Manga with just one chapter */
  OneShot = "ONE_SHOT",
  /** (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast */
  Ova = "OVA",
  /** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
  Special = "SPECIAL",
  /** Anime broadcast on television */
  Tv = "TV",
  /** Anime which are under 15 minutes in length and broadcast on television */
  TvShort = "TV_SHORT",
}

/** A user's list options for anime or manga lists */
export type MediaListOptionsInput = {
  /** The names of the user's advanced scoring sections */
  advancedScoring?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** If advanced scoring is enabled */
  advancedScoringEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The names of the user's custom lists */
  customLists?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** The order each list should be displayed in */
  sectionOrder?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** list theme */
  theme?: InputMaybe<Scalars["String"]["input"]>;
};

/** Media list sort enums */
export enum MediaListSort {
  AddedTime = "ADDED_TIME",
  AddedTimeDesc = "ADDED_TIME_DESC",
  FinishedOn = "FINISHED_ON",
  FinishedOnDesc = "FINISHED_ON_DESC",
  MediaId = "MEDIA_ID",
  MediaIdDesc = "MEDIA_ID_DESC",
  MediaPopularity = "MEDIA_POPULARITY",
  MediaPopularityDesc = "MEDIA_POPULARITY_DESC",
  MediaTitleEnglish = "MEDIA_TITLE_ENGLISH",
  MediaTitleEnglishDesc = "MEDIA_TITLE_ENGLISH_DESC",
  MediaTitleNative = "MEDIA_TITLE_NATIVE",
  MediaTitleNativeDesc = "MEDIA_TITLE_NATIVE_DESC",
  MediaTitleRomaji = "MEDIA_TITLE_ROMAJI",
  MediaTitleRomajiDesc = "MEDIA_TITLE_ROMAJI_DESC",
  Priority = "PRIORITY",
  PriorityDesc = "PRIORITY_DESC",
  Progress = "PROGRESS",
  ProgressDesc = "PROGRESS_DESC",
  ProgressVolumes = "PROGRESS_VOLUMES",
  ProgressVolumesDesc = "PROGRESS_VOLUMES_DESC",
  Repeat = "REPEAT",
  RepeatDesc = "REPEAT_DESC",
  Score = "SCORE",
  ScoreDesc = "SCORE_DESC",
  StartedOn = "STARTED_ON",
  StartedOnDesc = "STARTED_ON_DESC",
  Status = "STATUS",
  StatusDesc = "STATUS_DESC",
  UpdatedTime = "UPDATED_TIME",
  UpdatedTimeDesc = "UPDATED_TIME_DESC",
}

/** Media list watching/reading status enum. */
export enum MediaListStatus {
  /** Finished watching/reading */
  Completed = "COMPLETED",
  /** Currently watching/reading */
  Current = "CURRENT",
  /** Stopped watching/reading before completing */
  Dropped = "DROPPED",
  /** Paused watching/reading */
  Paused = "PAUSED",
  /** Planning to watch/read */
  Planning = "PLANNING",
  /** Re-watching/reading */
  Repeating = "REPEATING",
}

/** The type of ranking */
export enum MediaRankType {
  /** Ranking is based on the media's popularity */
  Popular = "POPULAR",
  /** Ranking is based on the media's ratings/score */
  Rated = "RATED",
}

/** Type of relation media has to its parent. */
export enum MediaRelation {
  /** An adaption of this media into a different format */
  Adaptation = "ADAPTATION",
  /** An alternative version of the same media */
  Alternative = "ALTERNATIVE",
  /** Shares at least 1 character */
  Character = "CHARACTER",
  /** Version 2 only. */
  Compilation = "COMPILATION",
  /** Version 2 only. */
  Contains = "CONTAINS",
  /** Other */
  Other = "OTHER",
  /** The media a side story is from */
  Parent = "PARENT",
  /** Released before the relation */
  Prequel = "PREQUEL",
  /** Released after the relation */
  Sequel = "SEQUEL",
  /** A side story of the parent media */
  SideStory = "SIDE_STORY",
  /** Version 2 only. The source material the media was adapted from */
  Source = "SOURCE",
  /** An alternative version of the media with a different primary focus */
  SpinOff = "SPIN_OFF",
  /** A shortened and summarized version */
  Summary = "SUMMARY",
}

export enum MediaSeason {
  /** Predominantly started airing between October and November */
  Fall = "FALL",
  /** Predominantly started airing between April and June */
  Spring = "SPRING",
  /** Predominantly started airing between July and September */
  Summer = "SUMMER",
  /** Predominantly started airing between January and March */
  Winter = "WINTER",
}

/** Media sort enums */
export enum MediaSort {
  Chapters = "CHAPTERS",
  ChaptersDesc = "CHAPTERS_DESC",
  Duration = "DURATION",
  DurationDesc = "DURATION_DESC",
  EndDate = "END_DATE",
  EndDateDesc = "END_DATE_DESC",
  Episodes = "EPISODES",
  EpisodesDesc = "EPISODES_DESC",
  Favourites = "FAVOURITES",
  FavouritesDesc = "FAVOURITES_DESC",
  Format = "FORMAT",
  FormatDesc = "FORMAT_DESC",
  Id = "ID",
  IdDesc = "ID_DESC",
  Popularity = "POPULARITY",
  PopularityDesc = "POPULARITY_DESC",
  Score = "SCORE",
  ScoreDesc = "SCORE_DESC",
  SearchMatch = "SEARCH_MATCH",
  StartDate = "START_DATE",
  StartDateDesc = "START_DATE_DESC",
  Status = "STATUS",
  StatusDesc = "STATUS_DESC",
  TitleEnglish = "TITLE_ENGLISH",
  TitleEnglishDesc = "TITLE_ENGLISH_DESC",
  TitleNative = "TITLE_NATIVE",
  TitleNativeDesc = "TITLE_NATIVE_DESC",
  TitleRomaji = "TITLE_ROMAJI",
  TitleRomajiDesc = "TITLE_ROMAJI_DESC",
  Trending = "TRENDING",
  TrendingDesc = "TRENDING_DESC",
  Type = "TYPE",
  TypeDesc = "TYPE_DESC",
  UpdatedAt = "UPDATED_AT",
  UpdatedAtDesc = "UPDATED_AT_DESC",
  Volumes = "VOLUMES",
  VolumesDesc = "VOLUMES_DESC",
}

/** Source type the media was adapted from */
export enum MediaSource {
  /** Version 2+ only. Japanese Anime */
  Anime = "ANIME",
  /** Version 3 only. Comics excluding manga */
  Comic = "COMIC",
  /** Version 2+ only. Self-published works */
  Doujinshi = "DOUJINSHI",
  /** Version 3 only. Games excluding video games */
  Game = "GAME",
  /** Written work published in volumes */
  LightNovel = "LIGHT_NOVEL",
  /** Version 3 only. Live action media such as movies or TV show */
  LiveAction = "LIVE_ACTION",
  /** Asian comic book */
  Manga = "MANGA",
  /** Version 3 only. Multimedia project */
  MultimediaProject = "MULTIMEDIA_PROJECT",
  /** Version 2+ only. Written works not published in volumes */
  Novel = "NOVEL",
  /** An original production not based of another work */
  Original = "ORIGINAL",
  /** Other */
  Other = "OTHER",
  /** Version 3 only. Picture book */
  PictureBook = "PICTURE_BOOK",
  /** Video game */
  VideoGame = "VIDEO_GAME",
  /** Video game driven primary by text and narrative */
  VisualNovel = "VISUAL_NOVEL",
  /** Version 3 only. Written works published online */
  WebNovel = "WEB_NOVEL",
}

/** The current releasing status of the media */
export enum MediaStatus {
  /** Ended before the work could be finished */
  Cancelled = "CANCELLED",
  /** Has completed and is no longer being released */
  Finished = "FINISHED",
  /** Version 2 only. Is currently paused from releasing and will resume at a later date */
  Hiatus = "HIATUS",
  /** To be released at a later date */
  NotYetReleased = "NOT_YET_RELEASED",
  /** Currently releasing */
  Releasing = "RELEASING",
}

/** The official titles of the media in various languages */
export type MediaTitleInput = {
  /** The official english title */
  english?: InputMaybe<Scalars["String"]["input"]>;
  /** Official title in it's native language */
  native?: InputMaybe<Scalars["String"]["input"]>;
  /** The romanization of the native language title */
  romaji?: InputMaybe<Scalars["String"]["input"]>;
};

/** Media trend sort enums */
export enum MediaTrendSort {
  Date = "DATE",
  DateDesc = "DATE_DESC",
  Episode = "EPISODE",
  EpisodeDesc = "EPISODE_DESC",
  Id = "ID",
  IdDesc = "ID_DESC",
  MediaId = "MEDIA_ID",
  MediaIdDesc = "MEDIA_ID_DESC",
  Popularity = "POPULARITY",
  PopularityDesc = "POPULARITY_DESC",
  Score = "SCORE",
  ScoreDesc = "SCORE_DESC",
  Trending = "TRENDING",
  TrendingDesc = "TRENDING_DESC",
}

/** Media type enum, anime or manga. */
export enum MediaType {
  /** Japanese Anime */
  Anime = "ANIME",
  /** Asian comic */
  Manga = "MANGA",
}

export enum ModActionType {
  Anon = "ANON",
  Ban = "BAN",
  Delete = "DELETE",
  Edit = "EDIT",
  Expire = "EXPIRE",
  Note = "NOTE",
  Report = "REPORT",
  Reset = "RESET",
}

/** Mod role enums */
export enum ModRole {
  /** An AniList administrator */
  Admin = "ADMIN",
  /** An anime data moderator */
  AnimeData = "ANIME_DATA",
  /** A character data moderator */
  CharacterData = "CHARACTER_DATA",
  /** A community moderator */
  Community = "COMMUNITY",
  /** An AniList developer */
  Developer = "DEVELOPER",
  /** A discord community moderator */
  DiscordCommunity = "DISCORD_COMMUNITY",
  /** A lead anime data moderator */
  LeadAnimeData = "LEAD_ANIME_DATA",
  /** A lead community moderator */
  LeadCommunity = "LEAD_COMMUNITY",
  /** A head developer of AniList */
  LeadDeveloper = "LEAD_DEVELOPER",
  /** A lead manga data moderator */
  LeadMangaData = "LEAD_MANGA_DATA",
  /** A lead social media moderator */
  LeadSocialMedia = "LEAD_SOCIAL_MEDIA",
  /** A manga data moderator */
  MangaData = "MANGA_DATA",
  /** A retired moderator */
  Retired = "RETIRED",
  /** A social media moderator */
  SocialMedia = "SOCIAL_MEDIA",
  /** A staff data moderator */
  StaffData = "STAFF_DATA",
}

/** Notification option input */
export type NotificationOptionInput = {
  /** Whether this type of notification is enabled */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The type of notification */
  type?: InputMaybe<NotificationType>;
};

/** Notification type enum */
export enum NotificationType {
  /** A user has liked your activity */
  ActivityLike = "ACTIVITY_LIKE",
  /** A user has mentioned you in their activity */
  ActivityMention = "ACTIVITY_MENTION",
  /** A user has sent you message */
  ActivityMessage = "ACTIVITY_MESSAGE",
  /** A user has replied to your activity */
  ActivityReply = "ACTIVITY_REPLY",
  /** A user has liked your activity reply */
  ActivityReplyLike = "ACTIVITY_REPLY_LIKE",
  /** A user has replied to activity you have also replied to */
  ActivityReplySubscribed = "ACTIVITY_REPLY_SUBSCRIBED",
  /** An anime you are currently watching has aired */
  Airing = "AIRING",
  /** A user's character submission has been accepted, partially accepted, or rejected */
  CharacterSubmissionUpdate = "CHARACTER_SUBMISSION_UPDATE",
  /** A user has followed you */
  Following = "FOLLOWING",
  /** An anime or manga has had a data change that affects how a user may track it in their lists */
  MediaDataChange = "MEDIA_DATA_CHANGE",
  /** An anime or manga on the user's list has been deleted from the site */
  MediaDeletion = "MEDIA_DELETION",
  /** Anime or manga entries on the user's list have been merged into a single entry */
  MediaMerge = "MEDIA_MERGE",
  /** A user's submission has been accepted, partially accepted, or rejected */
  MediaSubmissionUpdate = "MEDIA_SUBMISSION_UPDATE",
  /** A new anime or manga has been added to the site where its related media is on the user's list */
  RelatedMediaAddition = "RELATED_MEDIA_ADDITION",
  /** A user's staff submission has been accepted, partially accepted, or rejected */
  StaffSubmissionUpdate = "STAFF_SUBMISSION_UPDATE",
  /** A user has liked your forum comment */
  ThreadCommentLike = "THREAD_COMMENT_LIKE",
  /** A user has mentioned you in a forum comment */
  ThreadCommentMention = "THREAD_COMMENT_MENTION",
  /** A user has replied to your forum comment */
  ThreadCommentReply = "THREAD_COMMENT_REPLY",
  /** A user has liked your forum thread */
  ThreadLike = "THREAD_LIKE",
  /** A user has commented in one of your subscribed forum threads */
  ThreadSubscribed = "THREAD_SUBSCRIBED",
}

/** Recommendation rating enums */
export enum RecommendationRating {
  NoRating = "NO_RATING",
  RateDown = "RATE_DOWN",
  RateUp = "RATE_UP",
}

/** Recommendation sort enums */
export enum RecommendationSort {
  Id = "ID",
  IdDesc = "ID_DESC",
  Rating = "RATING",
  RatingDesc = "RATING_DESC",
}

/** Review rating enums */
export enum ReviewRating {
  DownVote = "DOWN_VOTE",
  NoVote = "NO_VOTE",
  UpVote = "UP_VOTE",
}

/** Review sort enums */
export enum ReviewSort {
  /** @deprecated Use ID instead */
  CreatedAt = "CREATED_AT",
  /** @deprecated Use ID_DESC instead */
  CreatedAtDesc = "CREATED_AT_DESC",
  Id = "ID",
  IdDesc = "ID_DESC",
  Rating = "RATING",
  RatingDesc = "RATING_DESC",
  Score = "SCORE",
  ScoreDesc = "SCORE_DESC",
  UpdatedAt = "UPDATED_AT",
  UpdatedAtDesc = "UPDATED_AT_DESC",
}

/** Revision history actions */
export enum RevisionHistoryAction {
  Create = "CREATE",
  Edit = "EDIT",
}

/** Media list scoring type */
export enum ScoreFormat {
  /** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
  Point_3 = "POINT_3",
  /** An integer from 0-5. Should be represented in Stars */
  Point_5 = "POINT_5",
  /** An integer from 0-10 */
  Point_10 = "POINT_10",
  /** A float from 0-10 with 1 decimal place */
  Point_10Decimal = "POINT_10_DECIMAL",
  /** An integer from 0-100 */
  Point_100 = "POINT_100",
}

/** Site trend sort enums */
export enum SiteTrendSort {
  Change = "CHANGE",
  ChangeDesc = "CHANGE_DESC",
  Count = "COUNT",
  CountDesc = "COUNT_DESC",
  Date = "DATE",
  DateDesc = "DATE_DESC",
}

/** The primary language of the voice actor */
export enum StaffLanguage {
  /** English */
  English = "ENGLISH",
  /** French */
  French = "FRENCH",
  /** German */
  German = "GERMAN",
  /** Hebrew */
  Hebrew = "HEBREW",
  /** Hungarian */
  Hungarian = "HUNGARIAN",
  /** Italian */
  Italian = "ITALIAN",
  /** Japanese */
  Japanese = "JAPANESE",
  /** Korean */
  Korean = "KOREAN",
  /** Portuguese */
  Portuguese = "PORTUGUESE",
  /** Spanish */
  Spanish = "SPANISH",
}

/** The names of the staff member */
export type StaffNameInput = {
  /** Other names the character might be referred by */
  alternative?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** The person's given name */
  first?: InputMaybe<Scalars["String"]["input"]>;
  /** The person's surname */
  last?: InputMaybe<Scalars["String"]["input"]>;
  /** The person's middle name */
  middle?: InputMaybe<Scalars["String"]["input"]>;
  /** The person's full name in their native language */
  native?: InputMaybe<Scalars["String"]["input"]>;
};

/** Staff sort enums */
export enum StaffSort {
  Favourites = "FAVOURITES",
  FavouritesDesc = "FAVOURITES_DESC",
  Id = "ID",
  IdDesc = "ID_DESC",
  Language = "LANGUAGE",
  LanguageDesc = "LANGUAGE_DESC",
  /** Order manually decided by moderators */
  Relevance = "RELEVANCE",
  Role = "ROLE",
  RoleDesc = "ROLE_DESC",
  SearchMatch = "SEARCH_MATCH",
}

/** Studio sort enums */
export enum StudioSort {
  Favourites = "FAVOURITES",
  FavouritesDesc = "FAVOURITES_DESC",
  Id = "ID",
  IdDesc = "ID_DESC",
  Name = "NAME",
  NameDesc = "NAME_DESC",
  SearchMatch = "SEARCH_MATCH",
}

/** Submission sort enums */
export enum SubmissionSort {
  Id = "ID",
  IdDesc = "ID_DESC",
}

/** Submission status */
export enum SubmissionStatus {
  Accepted = "ACCEPTED",
  PartiallyAccepted = "PARTIALLY_ACCEPTED",
  Pending = "PENDING",
  Rejected = "REJECTED",
}

/** Thread comments sort enums */
export enum ThreadCommentSort {
  Id = "ID",
  IdDesc = "ID_DESC",
}

/** Thread sort enums */
export enum ThreadSort {
  /** @deprecated Use ID instead */
  CreatedAt = "CREATED_AT",
  /** @deprecated Use ID_DESC instead */
  CreatedAtDesc = "CREATED_AT_DESC",
  Id = "ID",
  IdDesc = "ID_DESC",
  IsSticky = "IS_STICKY",
  RepliedAt = "REPLIED_AT",
  RepliedAtDesc = "REPLIED_AT_DESC",
  ReplyCount = "REPLY_COUNT",
  ReplyCountDesc = "REPLY_COUNT_DESC",
  SearchMatch = "SEARCH_MATCH",
  Title = "TITLE",
  TitleDesc = "TITLE_DESC",
  UpdatedAt = "UPDATED_AT",
  UpdatedAtDesc = "UPDATED_AT_DESC",
  ViewCount = "VIEW_COUNT",
  ViewCountDesc = "VIEW_COUNT_DESC",
}

/** User sort enums */
export enum UserSort {
  ChaptersRead = "CHAPTERS_READ",
  ChaptersReadDesc = "CHAPTERS_READ_DESC",
  Id = "ID",
  IdDesc = "ID_DESC",
  SearchMatch = "SEARCH_MATCH",
  Username = "USERNAME",
  UsernameDesc = "USERNAME_DESC",
  WatchedTime = "WATCHED_TIME",
  WatchedTimeDesc = "WATCHED_TIME_DESC",
}

/** The language the user wants to see staff and character names in */
export enum UserStaffNameLanguage {
  /** The staff or character's name in their native language */
  Native = "NATIVE",
  /** The romanization of the staff or character's native name */
  Romaji = "ROMAJI",
  /** The romanization of the staff or character's native name, with western name ordering */
  RomajiWestern = "ROMAJI_WESTERN",
}

/** User statistics sort enum */
export enum UserStatisticsSort {
  Count = "COUNT",
  CountDesc = "COUNT_DESC",
  Id = "ID",
  IdDesc = "ID_DESC",
  MeanScore = "MEAN_SCORE",
  MeanScoreDesc = "MEAN_SCORE_DESC",
  Progress = "PROGRESS",
  ProgressDesc = "PROGRESS_DESC",
}

/** The language the user wants to see media titles in */
export enum UserTitleLanguage {
  /** The official english title */
  English = "ENGLISH",
  /** The official english title, stylised by media creator */
  EnglishStylised = "ENGLISH_STYLISED",
  /** Official title in it's native language */
  Native = "NATIVE",
  /** Official title in it's native language, stylised by media creator */
  NativeStylised = "NATIVE_STYLISED",
  /** The romanization of the native language title */
  Romaji = "ROMAJI",
  /** The romanization of the native language title, stylised by media creator */
  RomajiStylised = "ROMAJI_STYLISED",
}

export type GetSeasonalAnimeQueryVariables = Exact<{
  season?: InputMaybe<MediaSeason>;
  year?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetSeasonalAnimeQuery = {
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    pageInfo?: {
      __typename?: "PageInfo";
      hasNextPage?: boolean | null;
      total?: number | null;
    } | null;
    media?: Array<({ __typename?: "Media" } & MediaFragment) | null> | null;
  } | null;
};

export type MediaFragment = {
  __typename?: "Media";
  id: number;
  status?: MediaStatus | null;
  genres?: Array<string | null> | null;
  popularity?: number | null;
  episodes?: number | null;
  source?: MediaSource | null;
  averageScore?: number | null;
  siteUrl?: string | null;
  description?: string | null;
  title?: { __typename?: "MediaTitle"; romaji?: string | null } | null;
  coverImage?: { __typename?: "MediaCoverImage"; large?: string | null } | null;
  studios?: {
    __typename?: "StudioConnection";
    nodes?: Array<{
      __typename?: "Studio";
      id: number;
      name: string;
      siteUrl?: string | null;
    } | null> | null;
  } | null;
  airingSchedule?: {
    __typename?: "AiringScheduleConnection";
    nodes?: Array<{
      __typename?: "AiringSchedule";
      episode: number;
      airingAt: number;
    } | null> | null;
  } | null;
  nextAiringEpisode?: {
    __typename?: "AiringSchedule";
    episode: number;
    airingAt: number;
  } | null;
};

export const MediaFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Media" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Media" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "title" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "romaji" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "genres" } },
          { kind: "Field", name: { kind: "Name", value: "popularity" } },
          { kind: "Field", name: { kind: "Name", value: "episodes" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "source" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "version" },
                value: { kind: "IntValue", value: "2" },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "averageScore" } },
          { kind: "Field", name: { kind: "Name", value: "siteUrl" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "large" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "studios" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "isMain" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "siteUrl" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "airingSchedule" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "notYetAired" },
                value: { kind: "BooleanValue", value: true },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "perPage" },
                value: { kind: "IntValue", value: "2" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "episode" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "airingAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "nextAiringEpisode" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "episode" } },
                { kind: "Field", name: { kind: "Name", value: "airingAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MediaFragment, unknown>;
export const GetSeasonalAnimeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSeasonalAnime" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "season" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "MediaSeason" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "year" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "Page" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "total" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "media" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "season" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "season" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "seasonYear" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "year" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "isAdult" },
                      value: { kind: "BooleanValue", value: false },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "type" },
                      value: { kind: "EnumValue", value: "ANIME" },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "sort" },
                      value: { kind: "EnumValue", value: "TITLE_ROMAJI" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Media" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Media" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Media" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "title" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "romaji" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "genres" } },
          { kind: "Field", name: { kind: "Name", value: "popularity" } },
          { kind: "Field", name: { kind: "Name", value: "episodes" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "source" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "version" },
                value: { kind: "IntValue", value: "2" },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "averageScore" } },
          { kind: "Field", name: { kind: "Name", value: "siteUrl" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "large" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "studios" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "isMain" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "siteUrl" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "airingSchedule" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "notYetAired" },
                value: { kind: "BooleanValue", value: true },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "perPage" },
                value: { kind: "IntValue", value: "2" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "episode" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "airingAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "nextAiringEpisode" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "episode" } },
                { kind: "Field", name: { kind: "Name", value: "airingAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSeasonalAnimeQuery,
  GetSeasonalAnimeQueryVariables
>;
