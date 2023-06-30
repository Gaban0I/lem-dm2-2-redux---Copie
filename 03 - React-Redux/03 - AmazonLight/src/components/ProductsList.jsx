import React from 'react';
import Product from './Product';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../actions/basket';
import { nanoid } from 'nanoid';

function ProductsList({ products }) {
  const dispatch = useDispatch();

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <Product key={index} product={product}>
          <form onSubmit={onSubmit(product)}>
            Quantity :{' '}
            <input type="number" name="quantity" min="1" step="1" defaultValue="1" required style={{ width: '30px' }} />
            <br />
            <button type="submit">Add to basket</button>
          </form>
        </Product>
      ))}
    </div>
  );

  function onSubmit(product) {
    return function (event) {
      event.preventDefault();
      const quantity = Number(event.target.querySelector('[name=quantity]').value);

      dispatch(
        addToBasket({
          id: nanoid(),
          product,
          quantity,
        })
      );
    };
  }
}

export default ProductsList;
