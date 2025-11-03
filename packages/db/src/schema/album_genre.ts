import { pgTable, uuid, primaryKey, timestamp } from "drizzle-orm/pg-core";
import { album } from "./albums";
import { genre } from "./genres";

export const albumGenre = pgTable(
  "album_genre",
  {
    albumId: uuid("album_id")
      .notNull()
      .references(() => album.id, { onDelete: "cascade" }),
    genreId: uuid("genre_id")
      .notNull()
      .references(() => genre.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.albumId, table.genreId] }),
  })
);
