const express = require("express");
const UsersRoutes = require("./src/geodata/routes.js");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.use("/api/v1/users", UsersRoutes);



app.listen(port, () => console.log(`app listening port ${port}`));
