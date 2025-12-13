import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Header from './components/Header.jsx';
import User from './pages/User.jsx';
import Batiment from './pages/Batiment.jsx';
import Fabrication from './pages/Fabrication.jsx';
import Services from './pages/Services.jsx';
import Alimentation from './pages/Alimentation.jsx';
import Footer from './components/Footer.jsx';
import FourOhFour from './pages/404.jsx';

function App() {

  return (
    <div className="App">
      <Header />
      <main className="content">
        <Routes>
          <Route path='/' element={<Accueil/>}></Route>
          <Route path='/user/:id' element={<User/>}></Route>
          <Route path='/batiment' element={<Batiment/>}></Route>
          <Route path='/fabrication' element={<Fabrication/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/alimentation' element={<Alimentation/>}></Route>
          <Route path='*' element={<FourOhFour/>}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
