import React from 'react';
import { Row } from 'react-bootstrap';
import Item from './item/item';
import productData from '../datas/product-data';

const ItemList = ({ money, setMoney }) => (
  <div className="m-5 d-flex justify-content-around">
    <Row>
      { productData
        .filter((i) => i.unlocked)
        .map((item) => <Item item={item} money={money} setMoney={setMoney} />) }
    </Row>
  </div>
);
export default ItemList;
