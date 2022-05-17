const orderController = require("../controllers/order.controller");

module.exports = (app) => {
    app.post("/api/newOrder", orderController.createOrder); //postman approved
    app.get("/api/viewOrder/:id", orderController.viewOrder); //postman approved
    app.get("/api/orders", orderController.viewAllOrders); //postman approved
    app.delete("/api/cancelOrder/:id", orderController.deleteOrder); //postman approved
    app.put("/api/updateOrder/:id", orderController.editOrder); //postman approved
}