import logo from './logo.svg';
import './App.css';
import NeoMorphicIcon from './Assets/Components/NeoMorphicIcon';
import './Assets/Styles/neomorphicStyles.css'
import './Assets/Styles/textStyles.css'
import ProductDisplayCard from './Assets/Components/ProducDisplayCard';
import ProductGrid from './Assets/Components/ProductGrid';
import useGetCards from './Assets/Hooks/useGetCards.js';

import './Assets/Styles/GridStyles.css'

import './Assets/Hooks/useGetCards.js'
import SiteHeader from './Assets/Components/SiteHeader';
import ProductViewPage from './Assets/Components/ProductViewPage';



function App() {
  let products =  useGetCards();

  return (
    <div>
    <SiteHeader/>
    <ProductGrid products={products}/>
    </div>
  );
}

export default App;
