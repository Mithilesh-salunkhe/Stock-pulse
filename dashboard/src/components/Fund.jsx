function Fund() {
    return ( 
        <div className="funds-container">
      {/* Funds Transfer Section */}
      <div className="funds-header">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div className="funds-buttons">
          <a href="#" className="btn btn-green">Add funds</a>
          <a href="#" className="btn btn-blue">Withdraw</a>
        </div>
      </div>

      <div className="row">
        {/* Equity Section */}
        <div className="col equity-section">
          <h4>Equity</h4>
          <div className="funds-table">
            <div className="data">
              <p style={{color:"#444",fontSize:"16px"}}>Available margin</p>
              <p className="imp colored" style={{color:"#444",fontSize:"16px"}}>4,043.10</p>
            </div>
            <div className="data">
              <p style={{color:"#444",fontSize:"16px"}}>Used margin</p>
              <p className="imp" style={{color:"#444",fontSize:"16px"}}>3,757.30</p>
            </div>
            <div className="data">
              <p style={{color:"#444",fontSize:"16px"}}>Available cash</p>
              <p className="imp" style={{color:"#444",fontSize:"16px"}}>4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p style={{color:"#444",fontSize:"16px"}}>Opening Balance</p>
              <p style={{color:"#444",fontSize:"16px"}}>4,043.10</p>
            </div>
            <div className="data">
              <p style={{color:"#444",fontSize:"16px"}}>Payin</p>
              <p  style={{color:"#444",fontSize:"16px"}}>4064.00</p>
            </div>
            <div className="data">
              <p style={{color:"#444",fontSize:"16px"}}>SPAN</p>
              <p style={{color:"#444",fontSize:"16px"}}>0.00</p>
            </div>
            <div className="data">
              <p style={{color:"#444",fontSize:"16px"}}>Delivery margin</p>
              <p style={{color:"#444",fontSize:"16px"}}>0.00</p>
            </div>
            <hr/>
            <div className="data">
              <p style={{color:"#444",fontSize:"16px"}}>Total Collateral</p>
              <p style={{color:"#444",fontSize:"16px"}}>0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity Section */}
        <div className="col commodity-section">
          <p style={{color:"#444",fontSize:"16px"}}>You don't have a commodity account</p>
          <a href="#" className="btn btn-blue">Open Account</a>
        </div>
      </div>
    </div>
     );
}

export default Fund;