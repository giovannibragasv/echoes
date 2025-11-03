import { pgTable, uuid, primaryKey, timestamp } from "drizzle-orm/pg-core";
import { album } from "./albums";
import { artist } from "./artists";

export const albumArtist = pgTable(
  "album_artist",
  {
    albumId: uuid("album_id")
      .notNull()
      .references(() => album.id, { onDelete: "cascade" }),
    artistId: uuid("artist_id")
      .notNull()
      .references(() => artist.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.albumId, table.artistId] }),
  })
);
