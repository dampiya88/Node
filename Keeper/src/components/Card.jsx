// Import React
import React from 'react';
import Avatar from './Avatar'
import Details from './Details';

// Card Component
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <Avatar imageUrl={props.imageUrl} />
        <Details 
            key={props.id}
            title={props.title}
            description={props.description}
            />
      </div>
    </div>
  );
};

export default Card;