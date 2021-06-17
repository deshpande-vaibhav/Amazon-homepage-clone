import React from 'react'
import './Oximeter.css'
function Oximeter() {
    return (
        <div className="oximeter">
            <div className="oximeter__row">
                <div className="oximeter__image">
                    <img className="oximeter__image" src="https://images-na.ssl-images-amazon.com/images/I/613vPBiXBAL._SL1500_.jpg" alt="image"/>
                </div>
                <div className="oximeter__description">
                    <p className="oximeter__title">MediWeave Fingertip Pulse Oximeter, Digital Monitoring Pulse Meter Rate & SpO2, LED Digital Display with Batteries (6 Months Replaceable Warranty)</p>
                    <span>⭐⭐⭐⭐</span>
                    <hr />
                    <div className="pricing">
                        <span>&#8377;</span>
                        <strong>1849</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Oximeter
