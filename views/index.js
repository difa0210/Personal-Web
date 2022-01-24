
const express = require("express");


const app = express();
const PORT = 5500;

app.use("/public", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (response, redirect)=> {
  response.render("index")
})

app.listen(PORT, () => {
    console.log(`Server starting on ${PORT}`);
  });