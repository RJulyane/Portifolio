import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/NavBar';
import Rodape from './Components/Rodape/Rodape';
import Home from './Paginas/Home';
import Sobre from './Paginas/Sobre';
import Projetos from './Paginas/Projetos';
import Contato from './Paginas/Contato';
import './index.css';

/*Não esquecer de definir os links*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
        <Rodape/>
      </BrowserRouter>
    </div>
  );
}

export default App;
