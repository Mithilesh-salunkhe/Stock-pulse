function HeroSection() {
    return ( 
        <div className="container px-3 py-5"  style={{ marginTop: "70px" }}>
            <div className="row text-center align-items-center border-bottom">
                <h1 className="my-5 p-3" style={{color: "#424242",fontSize:"35px"}}>
                    We pioneered the discount broking model in India.<br/>
                    Now, we are breaking ground with our technology.
                </h1>
            </div>
            <div className="row mt-5 text-start d-flex justify-content-center gap-2">
                <div className="col-lg-5 col-md-6 col-12 mb-4 mt-5">
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders 
                        and investors face in India in terms of cost, support, and technology.
                    </p>
                    <p>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                    <p>
                        Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, 
                        contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className="col-lg-5 col-md-6 col-12 mt-5">
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p>
                        Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
                    </p>
                </div>
            </div>
        </div> 
    );
}

export default HeroSection;
