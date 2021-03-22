import dotenv from "dotenv";
import app from "./app";
import "./db";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Listeining on :http:/localhost:${PORT}`);

app.listen(PORT, handleListening);
