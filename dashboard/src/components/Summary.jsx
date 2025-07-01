function Summary() {
    return ( 
       <div className="summary">
        <div className="username">
            <h6>Hi , User</h6>
            <hr className="divider" />
        </div>
        <div className="equity-section">
            <h5>Equity</h5>
            <div className="equity-data">
                <div className="first">
                    <h3>3.74K</h3>
                    <p>Margin available</p>
                </div>
                <div className="second">
                    <p>Margins used <span>0</span></p>
                    <p>Opening balance <span>3.74k</span></p>
                </div>
            </div>
            <hr className="divider" />
        </div>
        <div className="holdings-section">
            <h5>Holdings (13)</h5>
            <div className="equity-data">
                <div className="first">
                    <h3 className="profit">
                        1.55K
                        <small>+5.20%</small>
                    </h3>
                    <p>P&L</p>
                </div>
                <div className="second">
                    <p>Current Value <span>31.43k</span></p>
                    <p>Investment <span>29.88k</span></p>
                </div>
            </div>
            <hr className="divider" />
        </div>
       </div>
     );
}

export default Summary;