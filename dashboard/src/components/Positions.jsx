import { useState, useEffect } from "react";
import axios from "axios";

function Positions() {

  const [allPositions , SetAllPositions] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:3002/allPositions").then((res) =>{
      SetAllPositions(res.data);
    })
  },[])
  return (
    <div className="positions-container">
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const currvalue = stock.price * stock.qty;
              const isProfit = currvalue - stock.avg * stock.qty >= 0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayclass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currvalue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.day}</td>
                </tr>
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Positions;
