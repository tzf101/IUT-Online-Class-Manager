import React from "react";

function External() {
    return (
        <div>
            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
                        <i className="fab fa-youtube fa-7x" style={{color: 'red'}}></i>

                        <h2>Youtube</h2>
                        <p>The Class recordings can be found here</p>
                        <p>
                            <a
                                className="btn btn-secondary"
                                href="https://www.youtube.com/channel/UC1t6b94H0ix0yDwuo1CDTZw/playlists"
                            >
                                Visit &raquo;
                            </a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img src="images/classroom.png" alt=""></img>
                        <h2>Google Classroom</h2>
                        <p>Find the latest updates from course teachers.</p>
                        <p>
                            <a
                                className="btn btn-secondary"
                                href="https://classroom.google.com"
                            >
                                Visit &raquo;
                            </a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img src="images/IUT_logo_v_2.png" alt="IUT logo"></img>
                        <h2>IUT Website</h2>
                        <p>The official website of IUT.</p>
                        <p>
                            <a className="btn btn-secondary" href="#">
                                Visit &raquo;
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default External;