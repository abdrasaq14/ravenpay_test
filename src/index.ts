import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { db } from "./database/knexfile";
import routes from "./routes/index";
import { Config } from "./utils/config";
dotenv.config();

const app = express();
const PORT = Config.PORT;
db.raw("SELECT 1")
  .then(() => console.log("Database connected ✅"))
  .catch((err) => console.error("Database connection failed ❌", err));

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));
app.use(logger("dev"));

// Routes
app.use("/v1", routes);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
