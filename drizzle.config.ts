import { defineConfig } from "drizzle-kit";
export default defineConfig({
  // schema: "./src/db/schema.ts",
  // dbCredentials: {
  //   connectionString: process.env.DATABASE_URL!,
  // },
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  // driver: "pg",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
