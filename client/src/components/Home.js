//about section, button to start ordering which will navigate to Order.js
import React from "react"
import {Link} from "react-router-dom"


function Home() {
    return (
        <div className="home-container">

            <header className="header">
                <br/>
                <h1 className="plantain-palace-title">PLANTAIN PALACE</h1>
            </header>

            <div className="about-us">
                <div className="about-items">
                <h2>ABOUT US</h2>
                    <p>We are a small family-owned business with one goal:</p>
                    <p>Make everyone a plantain lover</p>
                        
                    <p>Try our loaded plantains &</p>
                    <p>experience a taste of South America's favorite meal.</p>
                    <br/>
                </div>
            </div>
            <button className="start-order-button">
                <Link to={"/order"} className="link-start">
                    START ORDER
                </Link>
            </button>

        </div>

    )
}





export default Home;