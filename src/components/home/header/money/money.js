import React from 'react';

const Money = ({ money }) => (
  <div className="price-container">
    <div className="price mr-5">{`$${money}`}</div>
  </div>
);

export default Money;
