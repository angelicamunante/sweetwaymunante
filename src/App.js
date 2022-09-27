import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import HomeContainer from './pages/Home/Home';
import Cart from './components/Cart/Cart';
import CartProvider from './Context/Cartcontext';
import FinalizarCompra from './FinalizarCompra/FinalizarCompra'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeContainer greetings={"Bienvenidos a Sweet Way"} />}/>
        <Route path='/productos' element={<ItemListContainer greeting={"Productos"} />}/>
        <Route path='/detalles/:id' element={<ItemDetailContainer /> } />
        <Route path='/category/:categoryName' element={<ItemListContainer /> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/finalizarCompra" element={ <FinalizarCompra/> } />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
