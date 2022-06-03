import React from "react";

export default function Jounal(props) {
    return (
        <div className="jounal">
            <img src={props.imageUrl} className="jounal-image"/>
            <div className="info">
                <img src={process.env.PUBLIC_URL + `images/location.png`} />
                <span className="jounal-location">{props.location}</span>
                <span className="google-map"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                <h1 className="jounal-title">{props.title}</h1>
                <h2 className="time">{props.startDate} - {props.endDate}</h2>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}