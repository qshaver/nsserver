const express = require("express");


// This will be actual API. For now you can just run test files and play there

// setup and run an express server
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
// app.use(middleware);

app.listen(port, () => {
  console.log("Starting server using port " + port);
});

