function Hero() {
    return ( 
        <div className="container text-center  "style={{ marginTop: "120px" }}>
                <h1 style={{color:"#424242"}}>Charges</h1>
                <h3 className="text-muted mb-4">List of all charges and taxes</h3>
                <div className="row text-center p-5">
                    <div className="col-12 col-md-4 p-5">
                        <img src="media/images/pricingEquity.svg" alt="" className="img-fluid" style={{width:"65%"}}/>
                        <h2 style={{color:"#424242"}}>Free equity delivery</h2>
                        <p className="text-muted mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                    <img src="media/images/20.svg" alt="" className="img-fluid"style={{width:"65%"}}/>
                        <h2 style={{color:"#424242"}}>Intraday and F&O trades</h2>
                        <p className="text-muted mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col-12 col-md-4 p-5">
                    <img src="media/images/pricingEquity.svg" alt="" className="img-fluid"style={{width:"65%"}}/>
                        <h2 style={{color:"#424242"}}>Free direct MF</h2>
                        <p className="text-muted mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
        </div>
     );
}

export default Hero;