"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


export default function SimpleSlider() {


    const [client, setClient] = useState(false);

    useEffect(() => {
        setClient(true);
    }, []);


    var settings = {
        dots: false,
        autoplay: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    if (!client) return null;
    const images = [
        {
            logo: "/IMAGES/Birla.png",
            name: "HIndalco Industries",
            sub: "Ltd.",
            price: "625.50",
            changePercent: "-0.50%",
            changeValue: "-3.15"

        },
        {
            logo: "/IMAGES/ICICI.png",
            name: "ICICI BANK",
            sub: "Ltd.",
            price: "1,428.10",
            changePercent: "-0.05%",
            changeValue: "-0.70"
        },
        {
            logo: "/IMAGES/Larsen.png",
            name: "Larsen & Tourbo",
            sub: "Ltd.",
            price: "3,350.40",
            changePercent: "-0.50%",
            changeValue: "-3.15"
        },
        {
            logo: "/IMAGES/Reliance.png",
            name: "Reliance Industries",
            sub: "Ltd.",
            price: "1,389.90",
            changePercent: "+1.54%",
            changeValue: "+21.10"
        },
        {
            logo: "/IMAGES/SBI.png",
            name: "State Bank of ",
            sub: "India",
            price: "820.85",
            changePercent: "+0.43%",
            changeValue: "+3.50"
        }




    ]
    return (   

        <div>
             <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}  
                    className=" shadow-lg p-6 w-[50%]"
                    >
                        <div className="ewewfdwwdwedw">
                            <img
                            src={image.logo}
                            alt={`Image ${index + 1}`}
                        />
                        <div>
                            <h1>{image.name}</h1>
                           </div>
                        <div className="flex ">
                             <h1>{image.sub}</h1>
                            <h1>{image.price}</h1>
                            
                        </div>
                        <div className="flex ">
                            <h1>{image.changePercent}</h1>
                            <h1>{image.changeValue}</h1>
                        </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}