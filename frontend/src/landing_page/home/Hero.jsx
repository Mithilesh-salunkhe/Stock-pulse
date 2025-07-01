import { Link } from "react-router-dom";

function Hero() {
  return (
    // #2A56C5
    <div className="container p-5" style={{ marginTop: "70px" }}>
      <div className="row text-center">
        <img
          className="img-fluid mb-5 "
          style={{
            maxWidth: "793px",
            width: "100%",
            height: "auto",
            margin: "0 auto",
          }}
          src="media/images/homeHero.png"
          alt="Landing-Image"
        />
        <h1 className="pt-5" style={{ color: "#424242" }}>
          Invest in everything
        </h1>
        <p className="fs-4" style={{ color: "#424242" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
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
    </div>
  );
}

export default Hero;
