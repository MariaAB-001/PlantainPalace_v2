import './App.css';
import Home from './components/Home';
import Order from './components/Order';
import Cart from './components/Cart';
import EditOrder from './components/EditOrder';
import ConfirmationPage from './components/ConfirmationPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/orderCart/:id' element={<Cart/>}/>
          <Route path='/editOrder/:id' element={<EditOrder/>}/>
          <Route path='/orderConfirmation/:id' element={<ConfirmationPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
