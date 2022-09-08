import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <ItemListContainer greeting='Bienvenidos a Sweet Way' />
      </body>


    </div>
  );
}

export default App;
