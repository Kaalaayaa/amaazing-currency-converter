import { useState, useEffect } from 'react';
import Axios from "axios"
import switcher  from '../images/Switcher.png'
import logo from "../images/hatch-logo.png"
import '../App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Converter() {
  
  const [options, setOptions] = useState([])
  const [input , setInput ] = useState(0)
  const [info, setInfo] = useState([]);
  const [from, setFrom] = useState("eur");
  const [to, setTo] = useState("usd");
  const [output, setOutput] = useState(0);

  useEffect(() => {
    Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      setInfo(res.data[from]);
    })
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info))
    convert()
  }, [info])

  function convert() {
    const rate = info[to]
    setOutput(input * rate)
  }

  function flip() {
    const temp = from
    setFrom(to)
    setTo(temp)
  }

  return (
    <div className="converter">
      <div className='navbar'>
        <img src={logo} alt="hatch logo" />
      </div>
      <div className='header'>
          <h1>Title</h1>
      </div>
      <div className='container'>
        <div className='amount'>
            <label>Amount</label>
            <input 
             type="text" 
             placeholder="Enter amount" 
             onChange={(e) => setInput(e.target.value)}
            />
        </div>
        <div className="from">
          <label>From</label>
          <Dropdown 
            options={options} 
            placeholder="From"
            onChange={(e) => { setFrom(e.value)}}
            value={from}
         />
        </div>
        <div className="switch">
          <img src={switcher} alt="switch" onClick={() => { flip()}} />
        </div>
        <div className="to">
          <label>To</label>
          <Dropdown 
            options={options} 
            placeholder="To"
            onChange={(e) => { setTo(e.value)}}
            value={to}
        />
        </div>
        <div>
            <button onClick={()=>{convert()}}>Convert</button>
        </div>
      </div>
      <div className='result'>
          <p>{input+" "+from+" = " }</p>
          <p>{output.toFixed(2) + " " + to}</p>
      </div>
      <p>View conversion history</p>
    </div>
  );
}

export default Converter;