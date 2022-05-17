import React, {useState} from "react"
import {useNavigate, Link} from "react-router-dom"
import axios from "axios";


function Order() {

    const [errors, setErrors] = useState({}); //state to store error messages
    const [customerName, setCustomerName] = useState(""); //state for storing name
    const [customerLastname, setCustomerLastname] = useState(""); // etc etc
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerCity, setCustomerCity] = useState("");
    const [customerState, setCustomerState] = useState("");
    const [customerZip, setCustomerZip] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [orderMethod, setOrderMethod] = useState("");
    const [sizeChoice, setSizeChoice] = useState("");
    const [quantityChoice, setQuantityChoice] = useState(0);
    const [baconTopping, setBaconTopping] = useState(false);
    const [quesoFrescoTopping, setQuesoFrescoTopping] = useState(false);
    const [pulledPorkTopping, setPulledPorkTopping] = useState(false);
    const [pulledChickenTopping, setPulledChickenTopping] = useState(false);
    const [bbqTofuTopping, setBbqTofuTopping] = useState(false);
    const [veganCheeseTopping, setVeganCheeseTopping] = useState(false);
    const [avocadoTopping, setAvocadoTopping] = useState(false);
    const [redOnionsTopping, setRedOnionsTopping] = useState(false);
    const [cilantroTopping, setCilantroTopping] = useState(false);
    const [specialDetails, setSpecialDetails] = useState("");
    const navigate = useNavigate();

    const preventDefaultHandler = (event) => { //I like to spell out event
        event.preventDefault();
        axios.post(`http://localhost:8000/api/newOrder`, { //can use shorthand bc I named getters the same as in the model
            customerName,
            customerLastname,
            customerAddress,
            customerCity,
            customerState,
            customerZip,
            customerEmail,
            customerPhone,
            orderMethod,
            sizeChoice,
            quantityChoice,
            baconTopping,
            quesoFrescoTopping,
            pulledPorkTopping,
            pulledChickenTopping,
            bbqTofuTopping,
            veganCheeseTopping,
            avocadoTopping,
            redOnionsTopping,
            cilantroTopping,
            specialDetails
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
            navigate(`/orderCart/${response.data._id}`); 
        })
        .catch((error) => {
            console.log(error);
            setErrors(error.response.data.errors);
        })
    }

    return(
        <div className="order-main-container">
            <header className="header">
                <h1 className="plantain-palace-title">PLANTAIN PALACE</h1>
                <h2>START YOUR ORDER BELOW</h2>
            </header>
            
            <div className="order-form-container">
                <form onSubmit={preventDefaultHandler}>

                    <div className="food-order-side-container">

                        <div>
                            <p>METHOD</p>
                            <select onChange={(event) => setOrderMethod(event.target.value)}>
                                <option>SELECT METHOD</option>
                                <option value="DELIVERY">DELIVERY</option>
                                <option value="PICKUP">PICKUP</option>
                            </select>
                            <div className="new-order-error-container">
                                {errors.orderMethod ? <span>{errors.orderMethod.message}</span> : null}
                            </div>
                        
                        
                            <p>SIZE</p>
                            <select onChange = {(event) => setSizeChoice(event.target.value)}>
                                <option>SELECT SIZE</option>
                                <option value="SMALL">SMALL</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="LARGE">LARGE</option>
                            </select>
                            <div className="new-order-error-container">
                                {errors.sizeChoice ? <span>{errors.sizeChoice.message}</span> : null}
                            </div>
                        </div>
                        <div>
                            <p>QTY</p>
                            <p>($5 per toston base)</p>
                            <input
                                value={quantityChoice}
                                type="number"
                                onChange={(event) => setQuantityChoice(event.target.value)}
                            />
                            <div className="new-order-error-container">
                                {errors.quantityChoice ? <span>{errors.quantityChoice.message}</span> : null}
                            </div>
                        </div>

                        <div>
                            <p>TOPPINGS</p>
                            <p>$0.50 per topping</p>
                            <div>
                                <div>
                                    <p>BACON</p>
                                    <input
                                        checked={baconTopping}
                                        type="checkbox"
                                        onChange={(event) => setBaconTopping(event.target.checked)}
                                    />
                                </div>
                                <div>
                                    <p>QUESO FRESCO</p>
                                    <input
                                        checked={quesoFrescoTopping}
                                        type="checkbox"
                                        onChange={(event) => setQuesoFrescoTopping(event.target.checked)}
                                    />
                                </div>
                                <div>
                                    <p>PULLED PORK</p>
                                    <input
                                        checked={pulledPorkTopping}
                                        type="checkbox"
                                        onChange={(event) => setPulledPorkTopping(event.target.checked)}
                                    />
                                </div>
                                <div>
                                    <p>PULLED CHICKEN</p>
                                    <input
                                        checked={pulledChickenTopping}
                                        type="checkbox"
                                        onChange={(event) => setPulledChickenTopping(event.target.checked)}
                                    />
                                </div>
                                <div>
                                    <p>BBQ TOFU</p>
                                    <input
                                        checked={bbqTofuTopping}
                                        type="checkbox"
                                        onChange={(event) => setBbqTofuTopping(event.target.checked)}
                                    />
                                </div>
                                <div>
                                    <p>VEGAN CHEESE</p>
                                    <input
                                        checked={veganCheeseTopping}
                                        type="checkbox"
                                        onChange={(event) => setVeganCheeseTopping(event.target.checked)}
                                    />
                                </div>
                                <div>
                                    <p>AVOCADO</p>
                                    <input
                                        checked={avocadoTopping}
                                        type="checkbox"
                                        onChange={(event) => setAvocadoTopping(event.target.checked)}
                                    />
                                </div>
                                <div>
                                    <p>RED ONIONS</p>
                                    <input
                                        checked={redOnionsTopping}
                                        type="checkbox"
                                        onChange={(event) => setRedOnionsTopping(event.target.checked)}
                                    />
                                </div>
                                <div>
                                    <p>CILANTRO</p>
                                    <input
                                        checked={cilantroTopping}
                                        type="checkbox"
                                        onChange={(event) => setCilantroTopping(event.target.checked)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <p>ORDER NOTES</p>
                            <input
                                value={specialDetails}
                                type="text"
                                onChange={(event) => setSpecialDetails(event.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="customer-side-container">
                        <div>
                            <div>
                                <p>NAME</p>
                                <input
                                    value={customerName}
                                    type="text"
                                    onChange={(event) => setCustomerName(event.target.value)}
                                />
                            <div className="new-order-error-container">
                                {errors.customerName ? <span>{errors.customerName.message}</span> : null}
                            </div>
                            </div>
                            <div>
                                <p>LAST NAME</p>
                                <input
                                    value={customerLastname}
                                    type="text"
                                    onChange={(event) => setCustomerLastname(event.target.value)}
                                />
                                <div className="new-order-error-container">
                                    {errors.customerLastname ? <span>{errors.customerLastname.message}</span> : null}
                                </div>
                            </div>
                            <div>
                                <p>STREET ADDRESS</p>
                                <input
                                    value={customerAddress}
                                    type="text"
                                    onChange={(event) => setCustomerAddress(event.target.value)}
                                />
                            </div>
                            <div>
                                <p>CITY</p>
                                <input
                                    value={customerCity}
                                    type="text"
                                    onChange={(event) => setCustomerCity(event.target.value)}
                                />
                            </div>
                            <div>
                                <p>STATE</p>
                                <input
                                    value={customerState}
                                    type="text"
                                    onChange={(event) => setCustomerState(event.target.value)}
                                />
                            </div>
                            <div>
                                <p>ZIP CODE</p>
                                <input
                                    value={customerZip}
                                    type="number"
                                    onChange={(event) => setCustomerZip(event.target.value)}
                                />
                            </div>
                            <div>
                                <p>EMAIL</p>
                                <input
                                    value={customerEmail}
                                    type="text"
                                    onChange={(event) => setCustomerEmail(event.target.value)}
                                />
                                <div className="new-order-error-container">
                                    {errors.customerEmail ? <span>{errors.customerEmail.message}</span> : null}
                                </div>
                            </div>
                            <div>
                                <p>PHONE NUMBER</p>
                                <input
                                    value={customerPhone}
                                    type="number"
                                    onChange={(event) => setCustomerPhone(event.target.value)}
                                />
                                <div className="new-order-error-container">
                                    {errors.customerPhone ? <span>{errors.customerPhone.message}</span> : null}
                                </div>
                            </div>
                        <div>
                                <br/>
                        <button className="add-to-cart-button" type="submit">
                            ADD TO CART
                        </button>
                        <button>
                            <Link className="cancel-link" to={"/home"}>
                            CANCEL CART
                            </Link>
                        </button>
                    </div>
                    
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Order;