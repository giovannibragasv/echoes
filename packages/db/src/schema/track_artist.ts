import { pgTable, uuid, primaryKey, timestamp } from "drizzle-orm/pg-core";
import { track } from "./tracks";
import { artist } from "./artists";

export const trackArtist = pgTable(
  "track_artist",
  {
    trackId: uuid("track_id")
      .notNull()
      .references(() => track.id, { onDelete: "cascade" }),
    artistId: uuid("artist_id")
      .notNull()
      .references(() => artist.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.trackId, table.artistId] }),
  })
);
