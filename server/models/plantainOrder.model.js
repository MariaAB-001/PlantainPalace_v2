const mongoose = require("mongoose"); //gotta make schema to shape info the api calls to

//this schema is for the loaded plantains order

const plantainOrderSchema = new mongoose.Schema({

    customerName: {
        type: String,
        required: [true, "Please type your name!"],
        minlength: [3, "Names must be at least three characters"],
    },

    customerLastname: {
        type: String,
        required: [true, "Please type your last name!"],
        minlength: [3, "Last names must be at least three characters"],
    },

    customerAddress: {
        type: String,
    },

    customerCity: {
        type: String,
    },

    customerState: {
        type: String,
        default: "FL",
    },

    customerZip: {
        type: Number,
    },

    customerEmail: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
    },

    customerPhone: {
        type: Number,
        required: [true, "Phone number is required"],
    },

    orderMethod: {
        type: String,
        required: [true, "Sorry, you need to select an oder method!"],
        enum: [
            "DELIVERY",
            "PICKUP",
        ],
    },

    sizeChoice: {
        type: String,
        required: [true, "Sorry, you need to select the size of your plantain base!"],
        enum: [
            "SMALL",
            "MEDIUM",
            "LARGE",
        ],
    },

    quantityChoice: {
        type: Number,
        required: [true, "Please choose how many loaded plantains you want!"],
        min: 1,
        max: 100,
    },

    //topings start
    //this way makes more sense since it's a check mark option
    baconTopping: {  
        type: Boolean,
        default: false,
    },

    quesoFrescoTopping: {
        type: Boolean,
        default: false,
    },

    pulledPorkTopping: {
        type: Boolean,
        default: false,
    },

    pulledChickenTopping: {
        type: Boolean,
        default: false,
    },

    bbqTofuTopping: {
        type: Boolean,
        default: false,
    },

    veganCheeseTopping: {
        type: Boolean,
        default: false,
    },

    avocadoTopping: {
        type: Boolean,
        default: false,
    },

    redOnionsTopping: {
        type:Boolean,
        default: false,
    },

    cilantroTopping: {
        type: Boolean,
        default: false,
    },

    specialDetails: {
        type: String,
        default: "Feel free to specify any food sensitivities or details you want us to know",
    }

}, {timestamps: true});

const plantainOrder = mongoose.model("plantainOrder", plantainOrderSchema);
module.exports = plantainOrder;

//need to export bc i will use this in controller and will be used as interface for API calls

//PS sorry if some comments seem reduntant, I like to remind myself of certain things that are easy for me to forget