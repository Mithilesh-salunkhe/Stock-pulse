import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container p-5">
      <h2 className="text-center mb-4" style={{ color: "#424242" }}>
        The Stock Pulse Universe
      </h2>
      <p className="text-center mb-5" style={{ color: "#424242" }}>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row d-flex justify-content-center align-content-center mx-lg-5">
        <div className="col-md-4 col-12 p-5 text-center">
          <a href="" className="text-decoration-none text-secondary">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt=""
              style={{ width: "60%" }}
              className="mb-3"
            />
            <p style={{ fontSize: "12px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div className="col-md-4 col-12 p-5 text-center">
          <a href="" className="text-decoration-none text-secondary">
            <img
              src="media/images/sensibullLogo.svg"
              alt=""
              style={{ width: "60%" }}
              className="mb-4"
            />
            <p style={{ fontSize: "12px" }}>
              Options trading platform that lets you create strategies, analyze
              positions, and examin data points like open interest, FII/DII, and
              more.
            </p>
          </a>
        </div>
        <div className="col-md-4 col-12 p-5 text-center">
          <a href="" className="text-decoration-none text-secondary">
            <img
              src="media/images/tijori.svg"
              alt=""
              style={{ width: "50%" }}
              className="mb-3"
            />
            <p style={{ fontSize: "12px" }}>
              Investment research platform that offers detailed insights on
              stocks,sectors, supply chains, and more.
            </p>
          </a>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-content-center mx-lg-5">
        <div className="col-md-4 col-12 p-5 text-center">
          <a href="" className="text-decoration-none text-secondary">
            <img
              src="media/images/streakLogo.png"
              alt=""
              style={{ width: "35%" }}
              className="mb-4"
            />
            <p style={{ fontSize: "12px" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="col-md-4 col-12 p-5 text-center">
          <a href="" className="text-decoration-none text-secondary">
            <img src="media/images/smallcaseLogo.png" alt="" className="mb-3" />
            <p style={{ fontSize: "12px" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col-md-4 col-12 p-5 text-center">
          <a href="" className="text-decoration-none text-secondary">
            <img
              src="media/images/dittoLogo.png"
              alt=""
              style={{ width: "35%" }}
              className="mb-3"
            />
            <p style={{ fontSize: "12px" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </a>
        </div>
      </div>
      <Link
        to="/signup"
        className="mt-4 fs-5 p-2 d-flex justify-content-center align-items-center mb-5"
        style={{
          width: "100%",
          maxWidth: "250px",
          height: "44.64px",
          margin: "0 auto",
          border: "none",
          backgroundColor: "#2A56C5",
          color: "white",
          borderRadius: "6px",
          transition: "background-color 0.3s ease, transform 0.2s ease",
          textDecoration: "none", // removes underline
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#1e429f")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#2A56C5")}
      >
        Sign up for free
      </Link>
    </div>
  );
}

export default Universe;
