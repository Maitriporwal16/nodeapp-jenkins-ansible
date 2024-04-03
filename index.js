//This is a nodejs sample app
//Another comment
//Another comment to test out
const express = require("express");
const app = express();
const PORT = 4000;
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.listen( PORT, () => console.log("Server is listening to port" + PORT ));
