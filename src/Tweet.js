import React from "react";
import "./App.css";
function Tweet(props) {
    return (
        <div className="tweet">
            <h4>{props.name}</h4>
            <p>just testing react</p>
            <h5>Number of likes</h5>
        </div>
    )
}

export default Tweet;