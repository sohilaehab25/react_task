import React from 'react';
import '../css/Slider.css';

export function Slider() {
    return (
        <div id="carouselExampleControls" className="carousel slide w-100 h-100 bg-light " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/4964349/pexels-photo-4964349.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block text-center" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/8923957/pexels-photo-8923957.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/4964285/pexels-photo-4964285.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block" alt="..." />
                </div>
               
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;
