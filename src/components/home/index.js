import React, { useState } from 'react';
import Header from './header/header';
import ItemList from './item-list/item-list';

const Home = () => {
  const [money, setMoney] = useState(0);

  return (
    <div>
      <Header money={money} />
      <ItemList money={money} setMoney={setMoney} />
    </div>
  );
};

export default Home;
