import { knex, type Knex } from "knex";
import path from "path";
import { Config } from "../utils/config";

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

  staging: {
    client: "mysql2", 
    connection: {
      host: "localhost",
      user: "staging_user", 
      password: "staging_password", 
      database: "staging_db", 
      port: 3306,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname, "migrations"),
      extension: "ts",
    },
  },

  production: {
    client: "mysql2", 
    connection: {
      host: "localhost",
      user: "production_user", 
      password: "production_password", 
      database: "production_db", 
      port: 3306,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname, "migrations"),
      extension: "ts",
    },
  },
};
export default config;
export const db = knex(config[process.env.NODE_ENV || "development"]);