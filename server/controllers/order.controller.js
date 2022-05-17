const plantainOrder = require("../models/plantainOrder.model");

module.exports = {

    createOrder: (request, response) => {
        plantainOrder.create(request.body) // POST call
            .then((newOrder) => {
                console.log(newOrder);
                response.json(newOrder); //response client will get from server
            })
            .catch((error) => { //promise always has to handle possible error
                console.log(error);
                response.status(400).json(error); //show error on frontend
            })
    },

    viewOrder: (request, response) => {
        plantainOrder.findById({_id: request.params.id}) //GET call
            .then((oneOrder) => {
                console.log(oneOrder);
                response.json(oneOrder);
        })
        .catch((error) => {
            console.log(error);
            response.status(400).json(error);
        })
    },

    viewAllOrders: (request, response) => {
        plantainOrder.find({}) //GET call
            .then((allOrders) => {
                console.log(allOrders);
                response.json(allOrders);
            })
            .catch((error) => {
                console.log(error);
                response.status(400).json(error);
            })
    },

    deleteOrder: (request, response) => {
        plantainOrder.deleteOne({_id: request.params.id}) //DELETE call
            .then((deletedOrder) => {
                response.json(deletedOrder);
            })
            .catch((error) => {
                console.log(error);
                response.status(400).json(error);
            })
    },

    editOrder: (request, response) => {
        plantainOrder.findByIdAndUpdate({_id: request.params.id}, //PUT call
            request.body,
            {
                new: true,
                runValidators: true
            })
            .then((updatedOrder) => {
                console.log(updatedOrder);
                response.json(updatedOrder);
            })
            .catch((error) => {
                console.log(error);
                response.status(400).json(error);
            })
    },
}