import logo from './logo.svg';
import './App.css';
import Test from "./components/Test"
import {useState} from "react"

function App() {

  const [hide,setHide] = useState(false);

  return (
    <div className="App">
     {hide && <Test />}
     <button  onClick={()=>setHide(!hide)} >CLICK</button>
    </div>
  );
}

export default App;
