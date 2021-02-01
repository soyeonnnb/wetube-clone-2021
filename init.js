import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";
const PORT = 4000;

const handleListening = () =>
  console.log(`Listeining on :http:/localhost:${PORT}`);

app.listen(PORT, handleListening);
