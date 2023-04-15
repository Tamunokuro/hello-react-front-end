import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);

  return greeting.pending ? <div>Loading...</div> : (
    <div>
      <h1>{greeting.message}</h1>
    </div>
  );
};

export default Greeting;
