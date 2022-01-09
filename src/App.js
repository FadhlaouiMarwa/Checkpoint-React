import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NarBar from './component/NarBar';
import Image from './component/Image';
import Formulaire from './component/Formulaire';


function App() {
  return (
    <div className="App">
     <NarBar/>
     <Image/>
     <Formulaire/>
    </div>
  );
}

export default App;
