import React from 'react';
import Item from './item/item';
import productData from '../datas/product-data';

const ItemList = ({ money, setMoney }) => (
  <div>
    {productData.map((item) => <Item item={item} money={money} setMoney={setMoney} />)}
  </div>
);
export default ItemList;
