import React, { useState } from 'react';
import ProgressBar from './progress-bar';

const Item = ({ item, money, setMoney }) => {
  const {
    name, initialePrice, levelUpPrice, image
  } = item;

  const [currentPrice, setCurrentprice] = useState(initialePrice);

  const GainMoney = () => {
    setMoney(money + currentPrice);
  };

  const LevelUp = () => {
    if (money >= levelUpPrice) {
      setMoney(money - levelUpPrice);
      setCurrentprice(currentPrice * 2);
    }
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <button type="button" className="btn btn-light" onClick={GainMoney}>
        <img src={image} className="card-img-top" alt="car" />
      </button>
      <div className="card-body">
        <h3 className="card-title">{`${name} : $${currentPrice}`}</h3>
        <ProgressBar />
        <button type="button" className="btn btn-primary" onClick={(LevelUp)}>{`Level up ($${levelUpPrice})`}</button>
      </div>
    </div>
  );
};

export default Item;
