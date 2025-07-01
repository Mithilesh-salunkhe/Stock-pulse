import { IoMdAddCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { TbAntennaBars4 } from "react-icons/tb";
import { LuCreditCard } from "react-icons/lu";
import { PiUserCircleDuotone } from "react-icons/pi";
import { CiCoins1 } from "react-icons/ci";

function CreateTicket() {
  return (
    <div className="container">
      <h3
        className="px-5"
        style={{ color: "#666666", fontWeight: 400, fontSize: "25px" }}
      >
        To create a ticket, select a relevant topic
      </h3>
      <div className="row px-lg-5 mt-5">
        <div className="col-12 col-md-4">
          <h3>
            <a
              href="#"
              className="text-decoration-none fw-medium"
              style={{ fontSize: "18px", color: "#424242" }}
            >
              <IoMdAddCircleOutline className="me-2" /> Account Opening
            </a>
          </h3>
          <ul className="list-none ">
            <a href="#" className="text-decoration-none">
              Resident individual
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Minor
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Non Resident Indian (NRI)
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Company, Partnership, HUF and LLP
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Glossary
            </a>
            <br />
          </ul>
        </div>

        <div className="col-12 col-md-4">
          <h3>
            <a
              href="#"
              className="text-decoration-none fw-medium"
              style={{ fontSize: "18px", color: "#424242" }}
            >
              <CiUser /> Your Stock Pulse Account
            </a>
          </h3>
          <ul>
            <a href="#" className="text-decoration-none">
              Your Profile
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Account modification
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Nomination
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Transfer and conversion of securities
            </a>
            <br />
          </ul>
        </div>

        <div className="col-12 col-md-4">
          <h3>
            <a
              href="#"
              className="text-decoration-none fw-medium"
              style={{ fontSize: "18px", color: "#424242" }}
            >
              <TbAntennaBars4 /> Kite
            </a>
          </h3>
          <ul>
            <a href="#" className="text-decoration-none">
              IPO
            </a>
            <a href="#" className="text-decoration-none">
              Trading FAQs
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Margin Trading Facility (MTF) and Margins
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Alerts and Nudges
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              General
            </a>
            <br />
          </ul>
        </div>
      </div>

      <div className="row mt-5 px-lg-5">
        <div className="col-12 col-md-4">
          <h3>
            <a
              href="#"
              className="text-decoration-none fw-medium"
              style={{ fontSize: "18px", color: "#424242" }}
            >
              <LuCreditCard /> Funds
            </a>
          </h3>
          <ul>
            <a href="#" className="text-decoration-none">
              Add money
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Withdraw money
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Add bank accounts
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              eMandates
            </a>
            <br />
          </ul>
        </div>

        <div className="col-12 col-md-4">
          <h3>
            <a
              href="#"
              className="text-decoration-none fw-medium"
              style={{ fontSize: "18px", color: "#424242" }}
            >
              <PiUserCircleDuotone /> Console
            </a>
          </h3>
          <ul>
            <a href="#" className="text-decoration-none">
              Portfolio
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Corporate actions
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Funds statement
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Reports
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Profile
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Segments
            </a>
            <br />
          </ul>
        </div>

        <div className="col-12 col-md-4">
          <h3>
            <a
              href="#"
              className="text-decoration-none fw-medium"
              style={{ fontSize: "18px", color: "#424242" }}
            >
              <CiCoins1 /> Coin
            </a>
          </h3>
          <ul>
            <a href="#" className="text-decoration-none">
              Understanding mutual funds and Coin
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Coin app
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Coin web
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Transactions and reports
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              National Pension Scheme (NPS)
            </a>
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
