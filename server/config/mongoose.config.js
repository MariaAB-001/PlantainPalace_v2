//this is where you set database

const mongoose = require("mongoose");
const dbName = "plantain_palace";

mongoose
    .connect(`mongodb://localhost/${dbName}`, { //connecting to db
        useNewUrlParser: true,   //these two to make sure there are no depreciation issues or warnings, learned this in MERN lecture
        useUnifiedTopology: true,
    })
    .then(() => console.log(`Connected to ${dbName} database!`))
    .catch((error) => console.log(error)); // i like to spell out error