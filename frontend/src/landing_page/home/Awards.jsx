function Awards() {
    return ( 
        <div className="container p-md-5 p-3">
            <div className="row align-items-center">
                <div className="col-md-6 col-12 text-center">
                    <img src="media/images/largestBroker.svg" alt="Awards img" className="img-fluid" />
                </div>
                <div className="col-md-6 col-12 p-md-5 p-3 text-center text-md-start mt-5 mt-md-0" style={{ color: "#424242" }}>
                    <h1 className="mb-3">Largest Stock Broker in India</h1>
                    <p className="mb-4" style={{ fontSize: "17px" }}>
                        2+ million Stock Pulse clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Future and Options</p></li>
                                <li><p>Commodity and Derivatives</p></li>
                                <li><p>Currency Derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct Mutual Funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="Press img" className="img-fluid mt-4" />    
                </div>
            </div>
        </div>
    );
}

export default Awards;
      