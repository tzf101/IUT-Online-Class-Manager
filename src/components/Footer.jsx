import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="container">
            <p className="float-end">
                <a href="#">Back to top</a>
            </p>
            <p>IUT CSE ⓒ {year}</p>
        </footer>
    );
}

export default Footer;