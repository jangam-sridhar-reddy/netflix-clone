import React, { useEffect, useState } from 'react'
import "./nav.scss";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollEffect)

        function scrollEffect() {

            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        }

        return () => window.removeEventListener("scroll", scrollEffect)
    }, [])


    return (
        <div className={`nav ${show ? " nav--black" : ""}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix Logo" />
            <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Netflix Logo"></img>

        </div>
    )
}

export default Nav
