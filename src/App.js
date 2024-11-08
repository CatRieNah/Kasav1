import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Layout from './components/Layout';
import Erreur404 from './components/Erreur404';
const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element= {<Home />} />
                <Route path='/about' element= {<About />} />
                <Route path='/logement/:id' element= {<Logement />} />
                <Route path='*' element= {<Erreur404 />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
};

export default App;
