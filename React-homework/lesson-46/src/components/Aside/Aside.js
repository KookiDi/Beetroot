import React from "react";
import "./Aside.css"
import img from "../images/dash.svg"

class Aside extends React.Component {
    render() {
        const anchors = ["Dashboard","Sales","Catalog","Customers","Reviews"];
        const listAnchors = anchors.map((anchor) =>
        <li className="list-item">
            <div className="aside-list__item">
                <img src={img} alt="dash" className="dash"/>
                <li className="list-item">{anchor}</li>
            </div>
        </li>
        )
        return (
            <aside className="aside">
                <ul className="aside-list">{listAnchors}</ul>
            </aside>
        );
    }
}
export default Aside;