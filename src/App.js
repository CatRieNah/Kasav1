import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/logement/:id' element={<Logement />} />
                <Route path='/404' element={<ErrorPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
};

export default App;
