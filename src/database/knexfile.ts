import { knex, type Knex } from "knex";
import path from "path";
import { Config } from "../utils/config";
console.log('config', Config)
const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: Config.DB_HOST,
      user: Config.DB_USER,
      password: Config.DB_PASSWORD, 
      database: Config.DB_NAME, 
      port: Config.DB_PORT as number,
    },
    migrations: {
      tableName: "knex_migrations", // Table where Knex stores migration info
      directory: path.resolve(__dirname, "migrations"), // Migration files directory
      extension: "ts", // TypeScript extension for migrations
    },
  },

};
export default config;
export const db = knex(config["development"]);