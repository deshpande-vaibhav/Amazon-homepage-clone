import React from 'react';
import "./Home.css";
import Product from "./Product";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* Product id, title, rating, price, image */}
            <div className="home__row">
                <Product
                    id= "123455"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price= {110}
                    rating= {5}
                    image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        
                />
                
                 <Product
                    id= "123456"
                    title="MediWeave Fingertip Pulse Oximeter, Digital Monitoring Pulse Meter Rate & SpO2, LED Digital Display with Batteries (6 Months Replaceable Warranty)"
                    price= {1849}
                    rating= {4}
                    image= "https://images-na.ssl-images-amazon.com/images/I/613vPBiXBAL._SL1500_.jpg"
        
                />
            </div>
            <div className="home__row">
                <Product
                    id= "123457"
                    title="Lee Cooper Lightweight Face Mask for Outdoor Protection, Super Breathable & Reusable Cloth – Pack of 3"
                    price= {199}
                    rating= {5}
                    image= "https://images-na.ssl-images-amazon.com/images/I/61ia1wOrKWS._SL1500_.jpg"
        
                />
                 <Product
                    id= "123458"
                    title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1 (40.9 cms) FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/MS Office/NVIDIA GTX 1650 4GB/Shadow Black), 16-a0022TX"
                    price= {78990}
                    rating= {5}
                    image= "https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg"
        
                />
                <Product
                    id= "123459"
                    title="New Apple iPhone 12 Mini (128GB) - White"
                    price= {67900}
                    rating= {4}
                    image= "https://images-na.ssl-images-amazon.com/images/I/71tT8J5cKuL._SL1500_.jpg"
        
                />
            </div>
            <div className="home__row">
                <Product
                    id= "123460"
                    title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
                    price= {15999}
                    rating= {5}
                    image= "https://images-na.ssl-images-amazon.com/images/I/81qtALn%2BGpL._SL1500_.jpg"
        
                />
            </div>
        
        </div>
    );
};

export default Home;
