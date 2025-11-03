import { pgTable, uuid, primaryKey, varchar, date, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth";
import { album } from "./albums";

export const userCollection = pgTable(
  "user_collection",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    albumId: uuid("album_id")
      .notNull()
      .references(() => album.id, { onDelete: "cascade" }),
    format: varchar("format", { length: 50 }), // vinyl, CD, digital, cassette, etc.
    condition: varchar("condition", { length: 50 }), // mint, near mint, very good, etc.
    purchaseDate: date("purchase_date"),
    notes: text("notes"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.albumId] }),
  })
);
