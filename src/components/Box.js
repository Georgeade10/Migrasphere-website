import React from 'react';

const Box = ({ title, description, image }) => {
  return (
    <div className='box'>
      <div className='box-image'>
        <img src={image} alt={title} />
      </div>
      <div className='box-content'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='box-button'>
          <ReadMoreButton />
        </div>
      </div>
    </div>
  );
};

const ReadMoreButton = () => {
  return <button className='read-more-button'>Read More</button>;
};

export default Box;
