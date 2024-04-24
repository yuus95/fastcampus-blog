import { useState } from "react";

const IMAGE_1_URL =
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_2_URL =
    "https://images.unsplash.com/photo-1606117331085-5760e3b58520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_3_URL =
    "https://images.unsplash.com/photo-1667971286579-63a5222780ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80";


export default function Carousel() {
    const [activeImage, setActiveImage] = useState(1);

    <div className="">
        <div>
            <ul>
                <input type="radio"
                    name="radio-buttons"
                    id="img-1"
                    checked={activeImage === 1}
                    readOnly
                />
                <li >
                    <div className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img src={IMAGE_1_URL} alt="scenery 1" />                               
                        </div>
                        <div className="carousel__controls">
                            <label onClick={()=> setActiveImage(3)} 
                                   className="carousel__slide-prev">
                                    <span>&lsaquo;</span>
                            </label>
                            <label onClick={() => setActiveImage(2)}
                                    className="carousel__slide-next">
                                    <span>&lsaquo;</span>
                            </label>
                        </div>
                    </div>
                </li>
                <input type="radio"
                name="radio-buttons"
                id="img-2"
                checked={activeImage === 2}
                readOnly />
                <li className="carousel__slide-container">
                    <div className="carousel__slide-img">
                        <img src={IMAGE_2_URL} alt="scenery 2" />
                    </div>
                    <div className="carousel__controls">
                        <label onClick={()=> setActiveImage(1)}
                                className="carousel__slide-prev">
                                    <span>&lsaquo;</span>
                        </label>
                        <label onClick={()=> setActiveImage(3)}
                                className="carousel__slide-next">
                                    <span>&lsaquo;</span>
                        </label>
                    </div>
                </li>
                <input type="radio"
                name="radio-buttons"
                id="img-3"
                checked={activeImage === 3}
                readOnly />
                <li className="carousel__slide-container">
                    <div className="carousel__slide-img">
                        <img src={IMAGE_3_URL} alt="scenery 3" />
                    </div>
                    <div className="carousel__controls">
                        <label onClick={()=> setActiveImage(2)}
                                className="carousel__slide-prev">
                                    <span>&lsaquo;</span>
                        </label>
                        <label onClick={()=> setActiveImage(1)}
                                className="carousel__slide-next">
                                    <span>&lsaquo;</span>
                        </label>
                    </div>
                </li>
                <div className="carousel__dots">
                    <label onClick={() => setActiveImage(1)}
                    className="carousel__dot"
                    id="img-dot-1">
                    </label>
                    <label onClick={() => setActiveImage(2)}
                    className="carousel__dot"
                    id="img-dot-2">
                    </label>
                    <label onClick={() => setActiveImage(3)}
                    className="carousel__dot"
                    id="img-dot-3">
                    </label>
                </div>
            </ul>
        </div>
    </div>
}