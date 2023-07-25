const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hello, world! Welcome to my application. Here's some more text to display. Here's another line of text"
  );
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
