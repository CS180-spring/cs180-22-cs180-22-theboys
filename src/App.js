import logo from './logo.svg';
import './App.css';
import NeoMorphicIcon from './Assets/Components/NeoMorphicIcon';
import './Assets/Styles/neomorphicStyles.css'

function App() {
  return (
    <div className="">
    
        <NeoMorphicIcon iconFilepath={`Images/shopping-cart`} />
        <div className='neomorphic-card' style = {{top: "100px", width: "300px", height: '400px'}}></div>
 
    
    </div>
  );
}

export default App;
