import { pgTable, uuid, numeric, text, timestamp, primaryKey, check } from "drizzle-orm/pg-core";
import { user } from "./auth";
import { album } from "./albums";
import { sql } from "drizzle-orm";

export const rating = pgTable(
  "rating",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    albumId: uuid("album_id")
      .notNull()
      .references(() => album.id, { onDelete: "cascade" }),
    score: numeric("score", { precision: 3, scale: 1 }).notNull(), // e.g., 8.5, 10.0
    review: text("review"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.albumId] }),
    scoreCheck: check("score_check", sql`${table.score} >= 1.0 AND ${table.score} <= 10.0`),
  })
);
