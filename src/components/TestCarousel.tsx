import { useState } from "react";


const IMAGE_1_URL =
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_2_URL =
    "https://images.unsplash.com/photo-1606117331085-5760e3b58520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_3_URL =
    "https://images.unsplash.com/photo-1667971286579-63a5222780ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80";


export default function TestCarousel() {
    const [activeImage, setActive] = useState(1);
    
    return <>
        <div className="carouselTest">
            <ul className="carouselTest__slides">
                <input type="radio" name="radio-buttons" id="img-1" 
                checked = {activeImage === 1}
                readOnly />
                <li className="carouselTest__slide-container">
                    <div className="carouselTest__slide-img"><img src={IMAGE_1_URL} alt="test" /></div>
                    <div className="carouselTest__controls">
                        <label
                            className="carousel__slide-prev"
                        >&lsaquo;</label>
                        <label
                            className="carousel__slide-next"
                        >&rsaquo;</label>
                    </div>
                </li>

                <input type="radio" name="radio-buttons" id="img-2" readOnly />
                <li className="carouselTest__slide-container">
                    <div><img src={IMAGE_2_URL} alt="test" /></div>
                    <div className="carouselTest__controls">
                        <label
                            className="carousel__slide-prev"
                        >&lsaquo;</label>
                        <label
                            className="carousel__slide-next"
                        >&rsaquo;</label>
                    </div>
                </li>
            </ul>
        </div>
    </>
}