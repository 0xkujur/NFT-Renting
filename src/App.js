
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import ListofNFT from './pages/ListofNFT';
import Rent from './pages/Rent';
import Wallet from './pages/Wallet';

import Navigation from './components/Navigation';

const App = () => {
  return (
    <>
    <Router>
        <Navigation /> 
        <Routes>
            <Route path='/' element={<Home/>}> </Route>

            <Route path='/ListofNFT' element={<ListofNFT/>}></Route>

            <Route path='/Rent' element={<Rent/>}></Route>

            <Route path='/wallet' element={<Wallet/>}></Route>

            <Route path='/nftlist' element={<nftlist/>}/>

           
        </Routes>
    </Router>
    
    </>
  )
}

export default App;