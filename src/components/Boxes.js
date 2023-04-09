import React from 'react';
import Box from './Box';

const Boxes = ({ boxes }) => {
  return (
    <div className='box-list'>
      {boxes.map((box) => (
        <Box
          key={box.id}
          title={box.title}
          description={box.description}
          image={box.image}
        />
      ))}
    </div>
  );
};

export default Boxes;
