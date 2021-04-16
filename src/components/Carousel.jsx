import React from "react";

function Carousel(props) {
    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/1.jpg" alt="Morning"></img>

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>{props.currentClassName}</h1>
                                <p>Start Time {props.currentClassTime}</p>
                                <p>
                                    <a
                                        className="btn btn-lg btn btn-light"
                                        href={props.currentClassLink}
                                    >
                                        Join Class
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/2.jpg" alt="Afternoon"></img>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>{props.upcomingClassName}</h1>
                                <p>Start Time {props.upcomingClassTime}</p>
                                <p>
                                    <a
                                        className="btn btn-lg btn btn-light"
                                        href={props.upcomingClassLink}
                                    >
                                        Join Class
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/3.jpg" alt="Evening"></img>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>{props.upcomingClassName2}</h1>
                                <p>Start Time {props.upcomingClassTime2}</p>
                                <p>
                                    <a
                                        className="btn btn-lg btn btn-light"
                                        href={props.upcomingClassLink2}
                                    >
                                        Join Class
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;