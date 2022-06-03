import React from "react";

export default function Jounal(props) {
    return (
        <div className="journal-elements">
            <div className="journal">
                <img src={props.imageUrl} className="journal-image"/>
                <div className="info">
                    <img src={process.env.PUBLIC_URL + `images/location.png`} className="location-image"/>
                    <span className="journal-location">{props.location}</span>
                    <span className="google-map"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                    <h1 className="journal-title">{props.title}</h1>
                    <h2 className="time">{props.startDate} - {props.endDate}</h2>
                    <p className="description">{props.description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}