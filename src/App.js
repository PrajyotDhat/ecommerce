
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import Details from './components/Details';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* <Provider store={store}> */}

        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/details/:id' element={<Details />} />
        {/* </Provider> */}
      </Routes>
    </>
  );
}

export default App;
