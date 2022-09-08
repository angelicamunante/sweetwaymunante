import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  const stock = 10;
  const handleOnAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} productos al carrito`);
  };
  
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
      <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        <ItemListContainer greeting="Bienvenidos a Sweet Way" />
      </body>


    </div>
  );
}

export default App;
