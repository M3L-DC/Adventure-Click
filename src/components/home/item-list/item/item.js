import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

const Item = ({ item, money, setMoney }) => {
  const {
    name, initialePrice, totalPriceSpent, upgradePrice, image
  } = item;

  const [progressVal, setprogressVal] = useState(0);
  const [currentPrice, setCurrentprice] = useState(initialePrice);
  const [levelUpPrice, setlevelUpVal] = useState(upgradePrice);
  const [totalValSpent, setTotalSpent] = useState(totalPriceSpent);

  const GainMoney = () => {
    setMoney(money + currentPrice);
    setTotalSpent(currentPrice + totalValSpent);
    console.log(totalValSpent);
    setprogressVal((totalValSpent * 100) / levelUpPrice);
  };

  const LevelUp = () => {
    if (money >= levelUpPrice) {
      setMoney(money - levelUpPrice);
      setCurrentprice(currentPrice * 2);
      setlevelUpVal(levelUpPrice * 2);
      setprogressVal(0);
    }
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <button type="button" className="btn btn-light" onClick={GainMoney}>
        <img src={image} className="card-img-top" alt="car" />
      </button>
      <div className="card-body">
        <h3 className="card-title">{`${name} : $${currentPrice}`}</h3>
        <div className="text-center">
          <Col>
            <div className="progress mb-2 text-center">
              <div className="progress-bar bg-dark" role="progressbar" style={{ width: progressVal }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> </div>
            </div>
          </Col>
        </div>
        <button type="button" className="btn btn-primary" onClick={(LevelUp)}>{`Level up ($${levelUpPrice})`}</button>
      </div>
    </div>
  );
};

export default Item;
