import React from "react";
import reset from "../images/reset.svg"
import user from "../images/user.svg"
import "./Header.css"

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="hamburger">
                    <span className="hamburger__item"></span>
                    <span className="hamburger__item"></span>
                    <span className="hamburger__item"></span>
                </div>
                <span className="logo">POSTERS GALORE </span>
                <div className="user-holder">
                    <img className="user-holder__reset" alt="reset" src={reset}/>
                    <img className="user-holder__prof" alt="prof" src={user}/>
                </div>
            </header>
        );
    }
}

export default Header