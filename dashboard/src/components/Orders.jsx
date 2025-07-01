import axios from "axios";
import { useState , useEffect } from "react"; 



function Orders() {

  const[allOrder , setAllOrder] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3002/allOrders").then((res)=>{
      setAllOrder(res.data);
    })
  },[])


  return (
    <div className="container-fluid">
      <h3 className="title">Orders ({allOrder.length})</h3>

      {/* Responsive table wrapper */}
      <div className="order-table table-responsive">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {allOrder.map((order, index) => {
              const typeClass = order.mode === "buy" ? "profit" : "loss";
              return (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{typeof order.price === "number" ? order.price.toFixed(2) : "-"}</td>
                  <td className={typeClass}>{order.mode.toUpperCase()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Section (Optional) */}
      <div className="row mt-4 text-center">
        <div className="col-12">
          <p className="text-muted">
            {allOrder.length === 0
              ? "No orders placed yet."
              : "All orders listed above."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Orders;
