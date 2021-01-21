import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { Console } from "console";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);
/*
const handleHome = (req, res) => res.send("hello from home~");

const handleProfile = (req, res) => res.send("You are on my profile");
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());

app.get("/profile", handleProfile);

app.get("/", handleHome);
*/

const handleHome = (req, res) => res.send("Home");
const handleAboutUs = (req, res) => res.send("About Us");
const handleContact = (req, res) => res.send("Contact");
const handleProtected = (req, res) => res.send("Protected");
const consoleMiddleware = (req, res, next) => {
  console.log("I'm a middle ware");
  next();
};
const protectedMiddleware = (req, res, next) => {
  res.redirect("/");
};

app.use(consoleMiddleware);
app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);
app.listen(PORT, handleListening);
app.get("/protected", protectedMiddleware, handleProtected);
