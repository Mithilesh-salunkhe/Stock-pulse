import { FaArrowRightLong } from "react-icons/fa6";

function Education() {
  return (
    <div className="container mt-5 p-3 p-md-5">
      <div className="row">
        <div className="col-12 col-md-6 text-center">
          <img src="media/images/education.svg" alt="" className="img-fluid" />
        </div>
        <div
          className="col-12 col-md-6 p-md-5 p-3 mt-2"
          style={{ color: "#424242" }}
        >
          <h2 className="mb-4">Free and open market education</h2>
          <p className="mb-3">
            Varsity, the largest online stock market education book in the world    
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="mb-4 text-decoration-none fw-medium">
            Varsity
            <FaArrowRightLong
              style={{ fontWeight: "200", marginLeft: "5px" }}
            />
          </a>
          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="mb-4 text-decoration-none fw-medium">
            TradingQ&A
            <FaArrowRightLong
              style={{ fontWeight: "200", marginLeft: "5px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
