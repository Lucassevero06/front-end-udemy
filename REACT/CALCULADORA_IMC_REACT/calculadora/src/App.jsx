import { data } from "./data/data";
import { useState } from 'react'
import './App.css'
import ImcCalc from './components/ImcCalc'
import ImcTable from "./components/ImcTable";

function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault();
    
    console.log("Executou");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

    return (
      <div className='Container'>
        {!imc ? <ImcCalc calcImc={calcImc}/> : <ImcTable />}
      </div>
    )
}

export default App
