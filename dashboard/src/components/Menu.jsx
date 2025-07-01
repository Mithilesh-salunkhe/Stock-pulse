import { FaUserTie } from "react-icons/fa";
import { useState } from "react";
import { Link} from "react-router-dom";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const[isProfileDropDown , setIsProfileDropDown] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handelProfileClick = () =>{
    setIsProfileDropDown(!isProfileDropDown);
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex align-items-center justify-content-between position-relative">
        <img
          src="/logo.png"
          alt="Logo"
          className="img-fluid"
          style={{ width: "50px" }}
        />
        <button
          className="navbar-toggler hamburger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className={`nav-link ${selectedMenu === 0 ? "active-menu" : ""}`}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${selectedMenu === 1 ? "active-menu" : ""}`}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${selectedMenu === 2 ? "active-menu" : ""}`}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              Holdings
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${selectedMenu === 3 ? "active-menu" : ""}`}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              Positions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${selectedMenu === 4 ? "active-menu" : ""}`}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              Funds
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${selectedMenu === 5 ? "active-menu" : ""}`}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              Apps
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="border-start pe-3 ps-3 d-flex align-items-center justify-content-center mt-1 ms-4"
          style={{ color: "#424242" }}
        >
          <Link className={`nav-link ${selectedMenu === "/apps" ? "active-menu" : ""} d-flex nav-item`} onClick={handelProfileClick}>
            <FaUserTie className="me-2 fs-5" />
            <p className="mb-0 fw-bold">USERID</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
