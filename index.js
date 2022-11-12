require("dotenv").config();
const express = require("express");
const authRouter = require("./routes/authRouter");
const eventRoute = require("./routes/eventRoute");

const app = express();
app.use(express.json());

const { default : mongoose} = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3500;

mongoose.connect(process.env.DATABASE_STRING, {useNewURLParser: true, useUnifiedTopology: true})
mongoose.connection
.once("open", () => console.log("Connected to database..."))
.on("error", (error) => console.log("Error connecting to database...", error))

app.use(cors({origin: '*'}));

app.get("/", (req, res) => res.json("Server is running..."))

app.use("/api/auth", authRouter);
app.use("/api/events", eventRoute);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))

