import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

const Item = ({ item, money, setMoney }) => {
  const { name, image } = item;

  const [currentPrice, setCurrentprice] = useState(item.initialePrice);
  const [upgradePrice, setlevelUpVal] = useState(item.upgradePrice);
  const [totalPriceSpent, setTotalSpent] = useState(item.totalPriceSpent);

  const computePercentage = () => {
    const value = (money * 100) / upgradePrice;
    return value > 100 ? 100 : value;
  };

  let percentage = computePercentage();

  const GainMoney = () => {
    setMoney(money + currentPrice);
    setTotalSpent(currentPrice + totalPriceSpent);
    percentage = computePercentage();
  };

  const LevelUp = () => {
    if (money >= upgradePrice) {
      setMoney(money - upgradePrice);
      setCurrentprice(currentPrice * 2);
      setlevelUpVal(upgradePrice * 2);
    }
  };

  return (
    <Col>
      <div className="card" style={{ width: '18rem' }}>
        <button type="button" className="btn btn-light" onClick={GainMoney}>
          <img src={image} className="card-img-top" alt="car" />
        </button>
        <div className="card-body">
          <h3 className="card-title">{`${name} : $${currentPrice}`}</h3>
          <div className="progress mb-2">
            <div
              className="progress-bar bg-dark"
              role="progressbar"
              style={{ width: `${percentage}%` }}
              aria-valuenow={percentage}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span className="invisible">{`${percentage.toFixed(0)}%`}</span>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={(LevelUp)}>{`Level up ($${upgradePrice})`}</button>
        </div>
      </div>
    </Col>
  );
};

export default Item;
