import GeneralContext from "./GeneralContext";
import { Link } from "react-router-dom";
import "./BuyActionWindow.css";
import axios from "axios"; //importing axios for building functionality for buy action window
import { useState } from "react";


function BuyActionWindow({ uid }) {
  const [stockQuantity , setStockQuantity] = useState(1);
  const [stockPrice , setStockPrice] = useState(0.0);    

  const handelBuyClick = () =>{
    axios.post("http://localhost:3002/newOrder",{
      name:uid,
      qty:stockPrice,
      mode:"BUY"
    });
    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="containerClass" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" name="qty" id="qty" onChange={(e) => setStockQuantity(e.target.value)}
            value={stockQuantity}/>
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number" name="price" id="price" step="0.05" onChange={(e) => setStockPrice(e.target.value)}
            value={stockPrice}/>
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue me-4" onClick={handelBuyClick}>Buy</Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BuyActionWindow;
