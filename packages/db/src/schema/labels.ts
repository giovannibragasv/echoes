import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const label = pgTable("label", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  country: varchar("country", { length: 100 }),
  foundedYear: varchar("founded_year", { length: 4 }),
  imageUrl: varchar("image_url", { length: 512 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
