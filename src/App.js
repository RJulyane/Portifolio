import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Rodape from './components/Rodape/Rodape';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import './index.css';
import styles from './App.module.css'

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
