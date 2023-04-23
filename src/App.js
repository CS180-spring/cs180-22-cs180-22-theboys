import logo from './logo.svg';
import './App.css';
import NeoMorphicIcon from './Assets/Components/NeoMorphicIcon';
import './Assets/Styles/neomorphicStyles.css'
import './Assets/Styles/textStyles.css'
import ProductDisplayCard from './Assets/Components/ProducDisplayCard';

function App() {
  return (
    
        <ProductDisplayCard 
          itemImage={`${process.env.PUBLIC_URL}Images/Bored Apes/QmabwwMDTAvKNvcapqWgnRDkMqXuMSkpK5Q8oopMhT7wAU.png`}
          itemPrice={25}
          itemTitle={'Bored Ape #1'}  
        />
        
  );
}

export default App;
