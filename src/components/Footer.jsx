import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="container">
            <p className="float-end">
                <a href="https://github.com/Tariquzzaman-faisal/IUT-Online-Class-Manger"><i class="fab fa-github"></i> View on Github</a>
            </p>
            <p>IUT CSE ⓒ {year}</p>
        </footer>
    );
}

export default Footer;