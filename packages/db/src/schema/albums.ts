import { pgTable, uuid, varchar, text, date, timestamp } from "drizzle-orm/pg-core";
import { label } from "./labels";

export const album = pgTable("album", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  releaseDate: date("release_date"),
  coverImageUrl: varchar("cover_image_url", { length: 512 }),
  description: text("description"),
  labelId: uuid("label_id").references(() => label.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
