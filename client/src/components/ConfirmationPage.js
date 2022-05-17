import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link, useParams} from "react-router-dom"

function ConfirmationPage() {

    const {id} = useParams();
    const [orderCart, setOrderCart] = useState({});

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
    }, [id]);

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
        <div className="confirmation-container">
            <header className="header">
                <h1 className="plantain-palace-title">PLANTAIN PALACE</h1>
                <h2>ORDER CONFIRMATION</h2>

            </header>
            <div>
                <div>
                <h2>Thank you, {orderCart.customerName} {orderCart.customerLastname}!</h2>
                <p>ORDER #{orderCart._id}</p>
                    <p>METHOD: {orderCart.orderMethod}</p>
                    <p>SIZE: {orderCart.sizeChoice}</p>
                    <p>QTY: {orderCart.quantityChoice}</p>
                </div>
                <div>
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
                </div>
                <div>
                    <p>PLANTAIN BASE PRICE: ${subTotalBaseOnly.toFixed(2)}</p>
                    <p>SUBTOTAL (BASE + TOPPINGS): ${orderPrice.toFixed(2)}</p>
                </div>
                <div>
                    <p>TAXES: ${foodTax.toFixed(2)}</p>
                </div>
                <div>
                    <p>TOTAL: ${totalCharge.toFixed(2)}</p>
                </div>
                <div>
                    <button>
                        <Link className="home-link" to={"/home"}>
                        BACK TO HOME
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ConfirmationPage;

//cash upon arrival cash before pickup personalized message