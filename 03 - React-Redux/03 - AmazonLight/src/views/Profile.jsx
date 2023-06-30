import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../actions/users';

function Profile() {
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({});

  function onUpdateField(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    dispatch(setUser(formData));
  }

  return (
    <div>
      <h2>Hi {user.firstname} !</h2>
      <h3>Customize your profile here</h3>

      <form onSubmit={submitForm}>
        <p>
          Your firstname :{' '}
          <input
            defaultValue={user.firstname}
            name="firstname"
            onInput={onUpdateField}
            type="text"
            placeholder="John"
          />
        </p>
        <p>
          Your lastname :{' '}
          <input defaultValue={user.lastname} name="lastname" onInput={onUpdateField} type="text" placeholder="Doe" />
        </p>
        <p>
          Your email:{' '}
          <input
            defaultValue={user.email}
            name="email"
            onInput={onUpdateField}
            type="email"
            placeholder="john.doa@email.com"
          />
        </p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;
