import { useState } from "react";

const IMAGE_1_URL =
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_2_URL =
    "https://images.unsplash.com/photo-1606117331085-5760e3b58520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_3_URL =
    "https://images.unsplash.com/photo-1667971286579-63a5222780ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80";


export default function Carousel() {
    const [activeImage, setActive] = useState(1);

    return (
        <>
            <div className="carousel">
                <ul className="carousel__slides">
                    <input type="radio"
                        name="radio-buttons"
                        id="img-1"
                        checked={activeImage === 1}
                        readOnly />
                    <li className="carousel__slider-container">
                        <div className="carousel__slider-img">
                            <img src={IMAGE_1_URL} alt="scenery 1" />
                        </div>
                        <div className="carousel_controls">
                            <label
                                onClick={() => setActive(3)}
                                className="carousel__slide-prev"
                            >&lsaquo;</label>
                            <label onClick={() => setActive(2)}
                                className="carousel__slide-next"
                            >&rsaquo;</label>
                        </div>
                    </li>

                    <input type="radio"
                        name="radio-buttons"
                        id="img-2"
                        checked={activeImage === 2}
                        readOnly />
                    <li className="carousel__slider-container">
                        <div className="carousel__slider-img">
                            <img src={IMAGE_2_URL} alt="scenery 2" />
                        </div>
                        <div className="carousel__slider_controls">
                            <label onClick={() => setActive(1)}
                                className="carousel__slide-prev">
                                &lsaquo;
                            </label>
                            <label onClick={() => setActive(3)}
                                className="carousel__slide-next">
                                &rsaquo;
                            </label>
                        </div>
                    </li>

                    <input type="radio"
                        name="radio-buttons"
                        id="img 3"
                        checked={activeImage === 3}
                        readOnly />
                    <li className="carousel__slide_container">
                        <div>
                            <img src={IMAGE_3_URL} alt="scnery 3"/>
                        </div>
                        <div>
                            <label onClick={() => setActive(2)}
                                className="carousel__slide-prec">
                                &lsaquo;
                            </label>
                            <label onClick={() => setActive(1)}
                                className="carousel__slide-next">
                                &rsaquo;
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}