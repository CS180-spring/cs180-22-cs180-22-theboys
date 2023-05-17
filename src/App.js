import './App.css';
import './Assets/Styles/neomorphicStyles.css'
import './Assets/Styles/textStyles.css'
import useGetCards from './Assets/Hooks/useGetCards.js';

import './Assets/Styles/GridStyles.css'

import './Assets/Hooks/useGetCards.js'
import SiteHeader from './Assets/Components/SiteHeader';

import ProductViewPage from './Assets/Components/ProductViewPage.js'
import SiteFooter from './Assets/Components/SiteFooter';

function App() {
  return (
    <div>
    <SiteHeader/>
  
    <ProductViewPage />
    <SiteFooter />
    </div>
  );
}

export default App;
