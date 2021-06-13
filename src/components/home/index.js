import React, { useState } from 'react';
import Header from './header/header';
import ItemList from './item-list/item-list';
import UnlockNewItem from './item-list/unlock-item';
import productData from './datas/product-data';

const Home = () => {
  const [money, setMoney] = useState(0);

  return (
    <div>
      <Header money={money} />
      <ItemList money={money} setMoney={setMoney} />
      <UnlockNewItem money={money} setMoney={setMoney} items={productData} />
    </div>
  );
};

export default Home;
