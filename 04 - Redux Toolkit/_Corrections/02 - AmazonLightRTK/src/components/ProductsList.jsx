import React from 'react';
import Product from './Product';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/basket';
import { nanoid } from '@reduxjs/toolkit';

function ProductsList({ products }) {
  const dispatch = useDispatch();

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <Product key={index} product={product}>
          <form onSubmit={onSubmit(product)}>
            Quantity :{' '}
            <input name="quantity" type="number" min="1" step="1" defaultValue="1" required style={{ width: '30px' }} />
            <br />
            <button type="submit">Add to basket</button>
          </form>
        </Product>
      ))}
    </div>
  );

  function onSubmit(product) {
    return (event) => {
      event.preventDefault();
      const quantity = Number(event.target.querySelector('[name=quantity]')?.value) || 1;
      dispatch(
        addItem({
          id: nanoid(),
          product,
          quantity,
        })
      );
    };
  }
}

export default ProductsList;
