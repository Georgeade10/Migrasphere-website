import React, { useState } from 'react';

const boxes = [
  {
    id: 1,
    title: 'Box 1',
    content: 'This is the content for box 1.',
  },
  {
    id: 2,
    title: 'Box 2',
    content: 'This is the content for box 2.',
  },
  {
    id: 3,
    title: 'Box 3',
    content: 'This is the content for box 3.',
  },
  {
    id: 4,
    title: 'Box 4',
    content: 'This is the content for box 4.',
  },
  {
    id: 5,
    title: 'Box 5',
    content: 'This is the content for box 5.',
  },
  {
    id: 6,
    title: 'Box 6',
    content: 'This is the content for box 6.',
  },
];

const BoxList = () => {
  const [currentBoxIndex, setCurrentBoxIndex] = useState(0);

  const handleNext = () => {
    setCurrentBoxIndex(
      currentBoxIndex === boxes.length - 1 ? 0 : currentBoxIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentBoxIndex(
      currentBoxIndex === 0 ? boxes.length - 1 : currentBoxIndex - 1
    );
  };

  const Box = ({ title, content }) => (
    <div className='box'>
      <h2>{title}</h2>
      <p>{content}</p>
      <button>Read more</button>
    </div>
  );

  return (
    <div>
      <div className='box-list'>
        {boxes.slice(currentBoxIndex, currentBoxIndex + 3).map((box) => (
          <Box key={box.id} title={box.title} content={box.content} />
        ))}
      </div>
      <div className='arrows'>
        <button onClick={handlePrev}>
          <img src='' alt='Previous' />
        </button>
        <button onClick={handleNext}>
          <img src='' alt='Next' />
        </button>
      </div>
    </div>
  );
};

export default BoxList;
