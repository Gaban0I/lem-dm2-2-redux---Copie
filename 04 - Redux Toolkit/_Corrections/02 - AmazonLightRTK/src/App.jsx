import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Banner from './components/Banner';
import Basket from './views/Basket';
import Profile from './views/Profile';
import AddProduct from './views/AddProduct';
import { useSelector } from 'react-redux';

function App() {
  const { mode } = useSelector((state) => state.ui);

  return (
    <BrowserRouter>
      <div className={mode === 'dark' ? 'dark-mode' : ''}>
        <Banner />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
