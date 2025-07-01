import { FaArrowRightLong } from "react-icons/fa6";


function Pricing() {
  return (
    <div className="container mt-5 p-3 p-md-5">
      <div className="row align-items-center">
        <div className="col-md-6 col-12 text-gray-700 text-center text-md-start" style={{ color: "#424242",fontSize:"17px" }}>
          <h2>Unbeatable pricing</h2>
          <p className=" mx-auto mx-md-0 mt-4" style={{width:"85%"}}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="text-decoration-none fw-medium">
            See pricing <FaArrowRightLong style={{fontWeight:"200",marginLeft:"5px"}} />
          </a>
        </div>

        <div className="col-12 col-md-6 d-flex flex-wrap justify-content-between">
          <div className="col-12 col-sm-4 d-flex align-items-center">
            <img
              src="media/images/pricingMF.svg"
              alt=""
              className="img-fluid  w-50 w-sm-50 w-md-25 w-lg-10"
            />
            <p className="mb-0 ms-2 text-muted" style={{fontSize:"10px" ,paddingTop:"18px"}}>Free account opening</p>
          </div>

          <div className="col-12 col-sm-4 d-flex align-items-center">
            <img
              src="media/images/pricingEquity.svg"
              alt=""
              className="img-fluid  w-50 w-sm-50 w-md-25 w-lg-10"
            />
            <p className="mb-0   text-muted" style={{fontSize:"10px",paddingTop:"18px"}}>
              Free equity delivery and direct mutual funds
            </p>
          </div>

          <div className="col-12 col-sm-4 d-flex align-items-center">
            <img src="media/images/20.svg" alt="" className="img-fluid w-50 w-sm-50 w-md-25 w-lg-10" />
            <p className="mb-0  text-muted" style={{fontSize:"10px",paddingTop:"18px"}}>Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
