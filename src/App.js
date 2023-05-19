import './App.css';
import './Assets/Styles/neomorphicStyles.css'
import './Assets/Styles/textStyles.css'
import useGetCards from './Assets/Hooks/useGetCards.js';

import './Assets/Styles/GridStyles.css'

import './Assets/Hooks/useGetCards.js'
import SiteHeader from './Assets/Components/SiteHeader';

import ProductViewPage from './Assets/Components/ProductViewPage.js'
import SiteFooter from './Assets/Components/SiteFooter';
import Homepage from './Assets/Components/HomePage';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element = {<Homepage />}></Route>
        <Route exact path = '/shop' element = {<ProductViewPage />}></Route>
      </Routes>
    </Router>
    
    
  );
}

export default App;
