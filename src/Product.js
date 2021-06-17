import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
function Product({id, title, price, rating, image}) {
    return (
        <div className="product">
            <Link to="/description" className="product__link">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <span>&#8377;
                        </span>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {
                            Array(rating)
                            .fill()
                            .map((_) =>(
                                <p>⭐
                                </p>
                            ))
                        }
                    </div>
                </div>
            </Link>
            
           
            <img src={image} alt="" />
            <button>Add to cart</button>
        </div>
    )
}

export default Product
