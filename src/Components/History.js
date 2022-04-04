import { Link } from "react-router-dom"
import logo from "../images/hatch-logo.png"

function History() {
    return(
      <div className="history">
        <div className='navbar'>
        <img className="logo-history" src={logo} alt="hatch logo" />
      </div>
        <Link className="go-back-link" to={"/"}> Go back</Link>
        <div className="table">
          <div className="details">
            <p>Date</p>
            <p>From</p>
            <p>To</p>
          </div>
          <div className="infos">
            <p>Feb 25, 2002</p>
            <p>1.00 EUR</p>
            <p>1.12392 USD</p>
          </div>
          <div className="infos">
            <p>Feb 25, 2002</p>
            <p>1.00 EUR</p>
            <p>1.12392 USD</p>
          </div>
          <div className="infos">
            <p>Feb 25, 2002</p>
            <p>1.00 EUR</p>
            <p>1.12392 USD</p>
          </div>
          <div className="infos">
            <p>Feb 25, 2002</p>
            <p>1.00 EUR</p>
            <p>1.12392 USD</p>
          </div>
          <div className="infos">
            <p>Feb 25, 2002</p>
            <p>1.00 EUR</p>
            <p>1.12392 USD</p>
          </div>
        </div>
      </div>
    );
  }


  export default History