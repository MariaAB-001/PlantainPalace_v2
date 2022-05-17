const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json()); // this middleware will allow to read json objects
app.use(express.urlencoded({extended: true}));
app.use(cors({
   origin: "http://localhost:3000"     //this will allow for the client port 3000 to talk to the server port 8000
}));

require("./config/mongoose.config");
require("./routes/plantainpalace.routes")(app); //this is the line importing routes into the server


app.listen(port, () => console.log(`Listening on port ${port}`));