import { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);

      // Prepare graph data
      const labels = res.data.map((item) => item.name);
      const data = {
        labels,
        datasets: [
          {
            label: "Stock Price",
            data: res.data.map((item) => item.price),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      };
      setGraphData(data);
    });
  }, []);

  return (
    <div className="container-fluid">
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {/* Table */}
      <div className="order-table table-responsive">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const currvalue = stock.price * stock.qty;
              const isProfit = currvalue - stock.avg * stock.qty >= 0;
              const profitClass = isProfit ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currvalue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currvalue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={profitClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="row mt-4 text-center">
        <div className="col-md-3 col-12">
          <h5>29,875.<span>55</span></h5>
          <p>Total investment</p>
        </div>
        <div className="col-md-4 col-12 mt-md-0 mt-3">
          <h5>31,428.<span>95</span></h5>
          <p>Current value</p>
        </div>
        <div className="col-md-4 col-12 mt-md-0 mt-3">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      {/* Graph below table */}
      {graphData && (
        <div className="mt-5 pt-5">
          <div className="w-full max-w-4xl mx-auto">
            <VerticalGraph data={graphData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Holdings;
