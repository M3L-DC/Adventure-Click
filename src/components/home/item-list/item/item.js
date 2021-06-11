import React from 'react';
import ProgressBar from './progress-bar';

const Item = ({ item }) => {
  const { name, price, image } = item;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt="car" />
      <div className="card-body">
        <h3 className="card-title">{`${name} : $${price}`}</h3>
        <ProgressBar />
        <span className="btn btn-primary">Click</span>
      </div>
    </div>
  );
};

export default Item;
