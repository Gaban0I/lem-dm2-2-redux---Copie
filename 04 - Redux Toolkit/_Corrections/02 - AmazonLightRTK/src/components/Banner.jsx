import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchMode } from '../features/ui';

function Banner() {
  const { mode, contributions, pending } = useSelector((state) => state.ui);
  const { firstname, lastname } = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  return (
    <header>
      <h1 style={styles.mainTitle}>
        <Link to="/">EZ Shopping</Link>
      </h1>

      <div style={{ display: 'flex' }}>
        <div style={styles.menuItem}>
          👱‍♂️{' '}
          <Link to="/profile">
            {firstname} {lastname}{' '}
            <>
              {pending && '...'}
              {!pending && <abbr title="Nombre de contributions">({contributions})</abbr>}
            </>
          </Link>
        </div>
        <div style={styles.menuItem}>
          ➕ <Link to="/add-product">Add Product</Link>
        </div>
        <div style={styles.menuItem}>
          🛒{' '}
          <Link to="/basket">
            <strong>{basket.length}</strong> items
          </Link>
        </div>
        <div style={styles.menuItem}>
          🌓{' '}
          <Link to="#" onClick={() => dispatch(switchMode())}>
            {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Link>
        </div>
      </div>
    </header>
  );
}

const styles = {
  menuItem: { margin: '1rem', fontSize: '1.2rem' },
  mainTitle: { fontSize: '2rem', textAlign: 'center', margin: '1rem' },
};

export default Banner;
