function Hero() {
    return ( 
        <div style={{backgroundColor:"#387ED1", marginTop: "70px"}}>
            <div className="container px-lg-5 mb-5">
            <div className="row py-5">
                <div className="col-6">
                    <a href="" className="text-decoration-none" style={{color:"white",fontSize:"20px"}}>Support Portal</a>
                </div>
                <div className="col-6 text-end">
                <a href="" className="fa-underline text-decoration-none " style={{color:"white",fontSize:"18px"}}>Track tickets</a>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-7 mt-4 mb-5">
                    <h3 className="mb-5" style={{color:"white",fontSize:"22px"}}>Search for an answer or browse help topics to create a ticket</h3>
                    <input  style={{height:"38px" ,width:"90%" , padding:"30px" ,border:"none", borderRadius:"2px"}}  placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."/>
                    <div className="superLinks mt-4">
                        <a href=""  className="text-decoration-none text-white fs-5">Track account opening</a><br/>
                        <a href="" className="text-decoration-none text-white fs-5"> Track segment activation</a><br/>
                        <a href="" className="text-decoration-none text-white fs-5"> Intraday margins</a><br/>
                        <a href="" className="text-decoration-none text-white fs-5">Kite user manual</a>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <h2 className="mb-5 mt-lg-4" style={{color:"white",fontSize:"22px"}}>Featured</h2>
                    <ol>
                        <li className="text-white"><a href="" className="text-decoration-none text-white">Revision in tick size for NSE derivatives and cash segment from April 15, 2025
                        </a></li>
                        <li className="text-white"><a href="" className="text-decoration-none text-white">Surveillance measure on scrips - March 2025</a></li>
                    </ol>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Hero;