import React from 'react';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { clearBasket, removeItem } from '../features/basket';

function Basket() {
  const { firstname } = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Hi {firstname}!</h2>
      <h3>There are {basket.length} items in your basket</h3>
      <button onClick={() => dispatch(clearBasket())}>Clear basket</button>
      <hr />

      <div className="basket-container">
        {basket &&
          basket.map((basketItem) => (
            <Product key={basketItem.product.id} product={basketItem.product}>
              <div>
                <p>Quantity : {basketItem.quantity}</p>
                <button type="button" onClick={() => dispatch(removeItem(basketItem))}>
                  Remove
                </button>
              </div>
            </Product>
          ))}
      </div>
    </div>
  );
}

export default Basket;
