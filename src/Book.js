import React from 'react';
import './Book.css';
function Book() {
    return (
        <div className="book">
            <div className="book__row">
                <div className="book__image">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="" />
                </div>
                <div className="book__description">
                <p className="book__title">The Lean Startup by Eric Ries</p>
                <span>⭐⭐⭐⭐⭐</span>
                <hr />
                <div className="pricing">
                    <span>&#8377;</span>
                    <strong>110</strong>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Book
