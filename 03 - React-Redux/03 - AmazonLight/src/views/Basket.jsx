import React from 'react';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { clearBasket, removeFromBasket } from '../actions/basket';

function Basket() {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Hi John!</h2>
      <h3>There are {basket.length} items in your basket</h3>
      <button onClick={() => dispatch(clearBasket())}>Clear basket</button>
      <hr />

      <div className="basket-container">
        {basket &&
          basket.map((basketItem) => (
            <Product key={basketItem.product.id} product={basketItem.product}>
              <div>
                Quantity: {basketItem.quantity}
                <button type="submit" onClick={() => dispatch(removeFromBasket(basketItem))}>
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
