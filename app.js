const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const path = require("path");

// create our application
const app = express();

// api/table routes
const tableRoutes = require("./routing/table.routes");

// api/auth routes
const authRoutes = require("./routing/authorization.routes");

app.use(express.json({ extended: true }));

app.use("/api/table", tableRoutes);

app.use("/api/auth", authRoutes);

// server port
const PORT = process.env.PORT || config.get("port") || 80;

// mongodb URI
const MONGOURI = config.get("mongoURI");

app.use("/", express.static(path.join(__dirname, "web-client", "build")));
/*app.get("*", (req, res) => {
  res.sendfile(path.resolve(__dirname, "web-client", "build", "index.html"));
});*/

// connecting to data base and run server
async function runServerWithDB() {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    //start server listerning PORT
    app.listen(PORT, () => console.log(`Server is on port ${PORT}`));
  } catch (e) {
    console.log("Data base connection error:", e.message);
    process.exit(1);
  }
}

runServerWithDB();
