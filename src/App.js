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

function App() {
  let products =  useGetCards();

  return (
    <ProductGrid products={products}/> 
  );
}

export default App;
