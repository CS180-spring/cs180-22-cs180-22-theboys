import './App.css';
import './Assets/Styles/neomorphicStyles.css'
import './Assets/Styles/textStyles.css'
import './Assets/Styles/GridStyles.css'

import './Assets/Hooks/useGetCards.js'

import ProductViewPage from './Assets/Components/ProductViewPage.js'
import Homepage from './Assets/Components/HomePage';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import SingleProductPage from './Assets/Components/SingleProductPage';
import React from 'react';

export const ProductsContext = React.createContext();

function App() {
  const[products, setProducts] = React.useState({products: [], requiresUpdate: false});

  return (
    <ProductsContext.Provider value = {{products: products, setProducts: setProducts}}>    
      <Router>
        <Routes>
          <Route exact path = '/' element = {<Homepage />}></Route>
          <Route exact path = '/shop' element = {<ProductViewPage />}></Route>
          <Route exact path = '/singleproduct' element = {<SingleProductPage />}></Route>
        </Routes>
      </Router>
    </ProductsContext.Provider>
    
  );
}

export default App;
