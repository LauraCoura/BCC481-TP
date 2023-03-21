import './App.css';
import { Route, Routes, HashRouter } from "react-router-dom";

// Importando as páginas
import Home from './pages/Home.js';
import News from './pages/News.js';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/noticias" element={<News />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
