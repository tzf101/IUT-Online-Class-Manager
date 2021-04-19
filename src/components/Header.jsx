import React from "react";
function Header() {
    return (
        <header>
            <nav
                className="navbar navbar-expand-md navbar-light fixed-top"
                style={{ background: "#e3f2fd" }}
            >
                {/* background-color: #e3f2fd */}
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <i className="fas fa-school"></i> IUT
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="https://ibb.co/QHVvzZ7"
                                >
                                    <i className="far fa-list-alt"></i> Routine
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://cse.iutoic-dhaka.edu/academics-1/calendar"
                                >
                                    <i className="fas fa-calendar-alt"></i>{" "}
                                    Academic Calender
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://drive.google.com/drive/u/4/folders/18Clzie87ts0ZWtLY45YxDf2vfqdnngmc"
                                >
                                    <i className="fab fa-google-drive"></i>{" "}
                                    Google Drive
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://docs.google.com/spreadsheets/d/1MujdXOIR6vbp5fMicqTVta-Rj0hwiG44P_uAkbFD35s/edit#gid=0"
                                >
                                    <i className="fas fa-phone-square-alt"></i>{" "}
                                    Contact Students
                                </a>
                            </li>
                        </ul>
                        <span>
                            <p>
                                <i className="fas fa-user-alt"></i> Hello!
                            </p>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
