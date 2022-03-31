import { useState } from 'react';
import Dropdown from 'react-dropdown';
import switcher  from '../images/Switcher.png'
import logo from "../images/hatch-logo.png"
import '../App.css';

function Converter() {
  
  const [options, setOptions] = useState([]);

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
            />
        </div>
        <div className="from">
          <label>From</label>
          <Dropdown 
            options={options} 
            value=""
            placeholder="From" />
        </div>
        <div className="switch">
          <img src={switcher} alt="switch" />
        </div>
        <div className="to">
          <label>To</label>
          <Dropdown 
            options={options} 
            value="" 
            placeholder="To" 
        />
        </div>
        <div>
            <button>Convert</button>
        </div>
      </div>
      <div className='result'>
          <p>1 EUR =</p>
          <p>1.123445 USD</p>
      </div>
      <p>View conversion history</p>
    </div>
  );
}

export default Converter;