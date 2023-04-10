import React from "react";
import "./Info.css"
import comment from "../images/comment.svg"


class Info extends React.Component {
    render() {
        const info = [
            {name:"Monthly Revenue",value:"1385 $US"},
            {name:"New Orders",value:"12"},
            {name:"Pending Reviews",value:"3"},
            {name:"New Customers",value:"9"}
        ];
        const listInfo = info.map((object) =>
            <div className="info-block">
                <div className="comm-wrap">
                    <img src={comment} alt="comment" className="comment"/>
                </div>
                <div className="inf-values">
                    <span className="inf-values__name">{object.name}</span>
                    <span className="inf-values__value">{object.value}</span>
                </div>
            </div>
        );
        return (
          <div className="info-blocks">
              {listInfo}
          </div>
        );
    }
}
export default Info;