import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const artist = pgTable("artist", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  bio: text("bio"),
  imageUrl: varchar("image_url", { length: 512 }),
  country: varchar("country", { length: 100 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
