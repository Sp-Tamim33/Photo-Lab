
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Checkout from './Components/Checkout/Checkout';
import CheckoutThree from './Components/Checkout/CheckoutThree';
import CheckoutTwo from './Components/Checkout/CheckoutTwo';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NF404 from './Components/NotFound/NF404';

import Signup from './Components/Signup/Signup';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/blog' element={<Blog></Blog>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/checkout' element={<Checkout></Checkout>} />
        <Route path='/checkoutTwo' element={<CheckoutTwo></CheckoutTwo>} />
        <Route path='/checkoutThree' element={<CheckoutThree></CheckoutThree>} />
        <Route path='*' element={<NF404></NF404>} />
      </Routes>
    </div>
  );
}

export default App;
