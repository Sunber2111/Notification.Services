import { ConnectionOptions } from "typeorm";
import User from "../models/user.model";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "123456",
  database: process.env.POSTGRES_DB || "Notification",
  entities: [User],
  migrationsRun:true,
  synchronize: false,
  cli: {
    migrationsDir: "src/migrations",
    entitiesDir:"src/entity"
  },
};

export default config;
