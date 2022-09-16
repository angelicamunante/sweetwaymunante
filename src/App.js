import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import HomeContainer from './pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeContainer greetings={"Bienvenidos a Sweet Way"} />}/>
        <Route path='/productos' element={<ItemListContainer greeting={"Bienvenidos a Sweet Way"} />}/>
        <Route path='/detalles/:id' element={<ItemDetailContainer /> } />
        <Route path='/category/:categoryName' element={<ItemListContainer /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
