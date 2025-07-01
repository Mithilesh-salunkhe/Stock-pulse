import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container mt-5 p-3 p-md-5">
      <div
        className="row align-items-center text-center"
        style={{ color: "#424242" }}
      >
        <h1 className="mb-4">Open a Stock pulse account</h1>
        <p className="mb-4" style={{ fontSize: "18px" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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

export default OpenAccount;
