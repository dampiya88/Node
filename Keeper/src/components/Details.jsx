import React from "react";

const Details =(props)=>{
    return <>
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">{props.description}</p>
    </>
}

export default Details;