import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link, useParams, useNavigate} from "react-router-dom"

function Cart() {

    const {id} = useParams();
    const [orderCart, setOrderCart] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/viewOrder/${id}`) //get the order we want via id
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setOrderCart(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const cancelOrder = () => {
        axios.delete(`http://localhost:8000/api/cancelOrder/${id}`) //deletes order from db
            .then((response) => {
                console.log(response);
                console.log(response.data);
                navigate("/home");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    let subTotalBaseOnly = orderCart.quantityChoice * 5.00;
    let orderQuantity = orderCart.quantityChoice;
    let orderPrice = orderQuantity * 5;
    let toppingPrices = [orderCart.baconTopping, orderCart.quesoFrescoTopping, orderCart.pulledPorkTopping,
                        orderCart.pulledChickenTopping, orderCart.bbqTofuTopping, orderCart.veganCheeseTopping,
                    orderCart.avocadoTopping, orderCart.redOnionsTopping, orderCart.cilantroTopping]
    for (let index = 0; index < toppingPrices.length; index ++) {
        if (toppingPrices[index] === true){
            orderPrice = orderPrice + (toppingPrices[index]* 0.50);
        }
    }
    let foodTax = orderPrice * 0.20;
    let totalCharge = orderPrice + foodTax;

    return(
        <div className="view-cart-container">
            <header className="header">
                <h1 className="plantain-palace-title">PLANTAIN PALACE</h1>
                <h2>VIEW YOUR CART</h2>
            </header>
            
            <div className="cart-order-info-container">
                <h2>{orderCart.customerName} {orderCart.customerLastname}'s Order</h2>
                <p>ORDER #{orderCart._id}</p>
                <button>
                    <Link className="link-edit" to={`/editOrder/${orderCart._id}`}>
                        EDIT ORDER
                    </Link>
                </button>
            
                    <p>METHOD: {orderCart.orderMethod}</p>
                    <p>SIZE: {orderCart.sizeChoice}</p>
                    <p>QTY: {orderCart.quantityChoice}</p>
            
                
                    <p>TOPPINGS:</p>
                    <p>($0.50 each)</p>
                    <p>{orderCart.baconTopping ? <span>BACON</span> : null}</p>
                    <p>{orderCart.quesoFrescoTopping ? <span>QUESO FRESCO</span> : null}</p>
                    <p>{orderCart.pulledPorkTopping ? <span>PULLED PORK</span> : null}</p>
                    <p>{orderCart.pulledChickenTopping ? <span>PULLED CHICKEN</span> : null}</p>
                    <p>{orderCart.bbqTofuTopping ? <span>BBQ TOFU</span> : null}</p>
                    <p>{orderCart.veganCheeseTopping ? <span>VEGAN CHEESE</span> : null}</p>
                    <p>{orderCart.avocadoTopping ? <span>AVOCADO</span> : null}</p>
                    <p>{orderCart.redOnionsTopping ? <span>RED ONIONS</span> : null}</p>
                    <p>{orderCart.cilantroTopping ? <span>CILANTRO</span> : null}</p>
            
                
                    <p>PLANTAIN BASE PRICE: ${subTotalBaseOnly.toFixed(2)}</p>
                    <p>SUBTOTAL (BASE + TOPPINGS): ${orderPrice.toFixed(2)}</p>
                
                
                    <p>TAXES: ${foodTax.toFixed(2)}</p>
                
                
                    <p>TOTAL: ${totalCharge.toFixed(2)}</p>
                
                <div>
                    <button className="confirm-order-button">
                        <Link className="link-confirm" to={`/orderConfirmation/${orderCart._id}`}>
                        CONFIRM ORDER
                        </Link>
                    </button>
                    <button onClick={() => cancelOrder(orderCart._id)}>
                        CANCEL ORDER
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;