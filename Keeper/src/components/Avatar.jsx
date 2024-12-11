import React from 'react';

const Avatar=(props)=>{
    return  <img src={props.imageUrl} alt={props.title} className="card-image" />
}

export default Avatar;
