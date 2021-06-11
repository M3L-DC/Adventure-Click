import React from 'react';
import Item from './item/item';
import productData from '../datas/product-data';

const ItemList = () => (
  <div>
    {productData.map((item) => <Item item={item} />)}
  </div>
);

export default ItemList;
