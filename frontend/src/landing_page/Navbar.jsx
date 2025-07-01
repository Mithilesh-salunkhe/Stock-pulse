import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav
        className="navbar navbar-expand-lg border-bottom p-1 fixed-top"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            style={{ maxWidth: "180px", display: "flex", alignItems: "center",height:"68px" }}
          >
            <img
              src="media/images/stockpulse.png"
              alt="logo"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "6.25rem",
                verticalAlign: "middle",
                display: "inline-block",
              }}
              className="img-fluid"
            />
          </Link> 
  
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  