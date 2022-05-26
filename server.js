const express = require("express"); // Access app
const socket = require("socket.io");

const app = express(); // Application will init and server ready

app.use(express.static("public"));

let port =  3000;
app.listen(port, () => {
    console.log("Listening to port " + port);
})

