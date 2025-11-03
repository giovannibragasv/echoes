import { pgTable, uuid, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { album } from "./albums";

export const track = pgTable("track", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  albumId: uuid("album_id").notNull().references(() => album.id, { onDelete: "cascade" }),
  trackNumber: integer("track_number").notNull(),
  durationSeconds: integer("duration_seconds"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
