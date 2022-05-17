import './App.css';
import Header from './components/Header/Header';
import { Route,Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home.js';
import ListaAlbums from './pages/listaAlbums/listaAlbums';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
       <Routes>
       <Route  element={<Home/>}   path="/"  />
       <Route  element={<ListaAlbums/>}   path="/albuns"  />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
