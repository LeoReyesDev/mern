let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let dbConfig = require("./database/database");
require("dotenv").config();

// Express Route
const personRoute = require("./routes/person.route");
const movieRoute = require("./routes/movie.route");

//var dotenv = require("dotenv");
// var myKeys = dotenv.config();

// Connecting mongoDB Database
// console.log("Xxxxxxxxx", JSON.stringify(myKeys.parsed.MONGOLAB_USER));

// const serverCloudMongo = "mongodb+srv://";
// const urlConnect = `${serverCloudMongo}${process.env.MONGOLAB_USER}:${process.env.MONGOLAB_PASSWORD}@${process.env.MONGOLAB_DOMAIN}?${process.env.MONGOLAB_PARAMS}`;
// console.log("ProcessURL", urlConnect);

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGOLAB_URI, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected!");
      console.log("CREDENTIALS", process.env.MONGOLAB_URI);
    },
    (error) => {
      console.log(
        "DAMN :< Could not connect to database : " +
          error +
          "MONGODB" +
          dbConfig.database
      );
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/persons", personRoute);
app.use("/movies", movieRoute);

// PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("backend/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "backend", "build", "index.html"));
  });
}
