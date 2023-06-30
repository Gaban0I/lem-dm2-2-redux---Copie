import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/ui';

function AddProduct() {
  const dispatch = useDispatch();
  const { contributions, pending } = useSelector((state) => state.ui);

  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
  });

  function updateField(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    dispatch(addProduct(formData));
  }

  return (
    <div>
      <h2>Add Product</h2>
      <h3>Contribute by adding new products to the market</h3>
      <p>
        You have currently <strong>{contributions}</strong> contributions.
      </p>
      <hr />

      {/*<pre>{JSON.stringify(formData, null, 2)}</pre>*/}

      <form onSubmit={onSubmit}>
        <p>
          Title : <input type="text" name="title" placeholder="Test product" onInput={updateField} />
        </p>
        <p>
          Price : <input type="number" name="price" placeholder="13.50" step="0.01" onInput={updateField} />
        </p>
        <p>
          Description :{' '}
          <input type="text" name="description" placeholder="Lorem ipsum dolor sit amet ..." onInput={updateField} />
        </p>
        <p>
          Image : <input type="url" name="image" placeholder="https://i.pravatar.cc" onInput={updateField} />
        </p>
        <p>
          Category : <input type="text" name="category" placeholder="electronic" onInput={updateField} />
        </p>
        <button type="submit" disabled={pending}>
          Add {pending && '...'}
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
