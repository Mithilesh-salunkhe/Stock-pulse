import { useState } from "react";

function TablesSection() {
  const [visibleTable, setVisibleTable] = useState("table1");

  const toggleTable = (table) => {
    setVisibleTable(visibleTable === table ? null : table);
  };

  return (
    <div className="container p-5">
      <div className="d-flex gap-5 flex-wrap mb-3">
        <h4
          className={`p-2 ${
            visibleTable === "table1"
              ? "text-primary border-bottom border-primary"
              : "text-secondary"
          }`}
          onClick={() => toggleTable("table1")}
          style={{ cursor: "pointer" }}
        >
          Equity
        </h4>
        <h4
          className={`p-2 ${
            visibleTable === "table2"
              ? "text-primary border-bottom border-primary"
              : "text-secondary"
          }`}
          onClick={() => toggleTable("table2")}
          style={{ cursor: "pointer" }}
        >
          Currency
        </h4>
        <h4
          className={`p-2 ${
            visibleTable === "table3"
              ? "text-primary border-bottom border-primary"
              : "text-secondary"
          }`}
          onClick={() => toggleTable("table3")}
          style={{ cursor: "pointer" }}
        >
          Commodity
        </h4>
      </div>

      {/* Table 1 */}
      {visibleTable === "table1" && (
        <div className="table-responsive">
          <table className="table table-bordered mt-2">
            <thead style={{ fontSize: "14px" }}>
              <tr>
                <th>&nbsp;</th>
                <th className="text-secondary fw-semibold">Equity Delivery</th>
                <th className="text-secondary fw-semibold">Equity Intraday</th>
                <th className="text-secondary fw-semibold">F&O - Futures</th>
                <th className="text-secondary fw-semibold">F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-secondary">Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td className="text-secondary">STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.02% on the sell side</td>
                <td>
                  <ul>
                    <li>0.125% of the intrinsic value on exercised options</li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="text-secondary">Transaction Charges</td>
                <td>
                  <ul>
                    <li>NSE: 0.00297%</li>
                    <li>BSE: 0.00375%</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>NSE: 0.00297%</li>
                    <li>BSE: 0.00375%</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>NSE: 0.00173%</li>
                    <li>BSE: 0</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>NSE: 0.03503% (on premium)</li>
                    <li>BSE: 0.0325% (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="text-secondary">GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="text-secondary">SEBI Charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td className="text-secondary">Stamp Charges</td>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {visibleTable === "table2" && (
        <div className="table-responsive">
          <table className="table table-bordered mt-2">
            <thead>
              <tr>
                <th></th>
                <th
                  className="text-secondary fw-semibold"
                  style={{ whiteSpace: "nowrap", minWidth: "120px" }}
                >
                  Currency Futures
                </th>
                <th
                  className="text-secondary fw-semibold"
                  style={{ whiteSpace: "nowrap", minWidth: "120px" }}
                >
                  Currency Options
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
              <tr>
                <td>Transaction Charges</td>
                <td>
                  NSE: 0.00035%
                  <br />
                  BSE: 0.00045%
                </td>
                <td>
                  NSE: 0.0311%
                  <br />
                  BSE: 0.001%
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI Charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp Charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {visibleTable === "table3" && (
        <div className="table-responsive">
          <table className="table table-bordered mt-2">
            <thead>
              <tr>
                <th></th>
                <th
                  className="text-secondary fw-semibold"
                  style={{ whiteSpace: "nowrap", minWidth: "120px" }}
                >
                  Commodity Futures
                </th>
                <th
                  className="text-secondary fw-semibold"
                  style={{ whiteSpace: "nowrap", minWidth: "120px" }}
                >
                  Commodity Options
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td>Transaction Charges</td>
                <td>
                  MCX: 0.0021%
                  <br />
                  NSE: 0.0001%
                </td>
                <td>
                  MCX: 0.0418%
                  <br />
                  NSE: 0.001%
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI Charges</td>
                <td>
                  Agri: ₹1 / crore
                  <br />
                  Non-Agri: ₹10 / crore
                </td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp Charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Add full content for Table 2 and Table 3 in the same way */}

      <style>{`
        @media (max-width: 768px) {
          th, td {
            font-size: 12px;
            padding: 8px;
            white-space: nowrap;
          }
        }
      `}</style>
    </div>
  );
}

export default TablesSection;
