import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-top" style={{backgroundColor:"#FBFBFB"}}>
    <div className="container mt-4">
      <div className="row text-center text-md-start mt-5">

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <img
            src="media/images/stockpulse.png"
            alt="StockPulse"
            style={{ width: "60%",marginLeft:"-2rem" }}
          />
          <p
            className="mb-1 text-muted fw-medium mt-3"
            style={{ fontSize: "14px" }}
          >
            ©2025, Stock Pulse Broking Ltd.
          </p>
          <p className="mb-3 text-muted fw-medium" style={{ fontSize: "14px" }}>
            All rights reserved.
          </p>


          <ul className="d-flex list-unstyled gap-3 flex-wrap justify-content-center justify-content-md-start p-0 m-0">
            <li>
              <a href="#" className="text-decoration-none text-secondary fs-5">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary fs-5">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary fs-5">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary fs-5">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <hr />
          <ul className="d-flex list-unstyled gap-3 flex-wrap justify-content-center justify-content-md-start p-0 m-0">
            <li>
              <a href="#" className="text-decoration-none text-secondary fs-5">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary fs-5">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary fs-5">
                <FaTelegram />
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <p className="fw-medium fs-5" style={{ color: "#424242" }}>
            Company
          </p>
          {[
            "About",
            "Products",
            "Pricing",
            "Referral programme",
            "Careers",
            "Stock pulse.tech",
            "Open source",
            "Press & media",
            "Zerodha Cares (CSR)",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-decoration-none text-secondary d-block fw-medium mb-2"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <p className="fw-medium fs-5" style={{ color: "#424242" }}>
            Support
          </p>
          {[
            "Contact us",
            "Support portal",
            "Z-Connect blog",
            "List of charges",
            "Downloads & resources",
            "Videos",
            "Market overview",
            "How to file a complaint?",
            "Status of your complaints",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-decoration-none text-secondary d-block fw-medium mb-2"
            >
              {item}
            </a>
          ))}
        </div>


        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <p className="fw-medium fs-5" style={{ color: "#424242" }}>
            Account
          </p>
          <a
            href="#"
            className="text-decoration-none text-secondary fw-medium d-block mb-2"
          >
            Open an account
          </a>
          <a
            href="#"
            className="text-decoration-none text-secondary fw-medium d-block"
          >
            Fund transfer
          </a>
        </div>
      </div>


      <div className="row">
        <div className="col">
          <p style={{ fontSize: "11px", color: "#9B9B9B" }}>
          Stock Pulse Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Stock Pulse Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Stock Pulse Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Stock Pulse Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@stockpulse.com, for DP related to dp@stockpulse.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>
          <p style={{ fontSize: "11px", color: "#9B9B9B" }}>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <p style={{ fontSize: "11px", color: "#9B9B9B" }}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p style={{ fontSize: "11px", color: "#9B9B9B" }}>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p style={{ fontSize: "11px", color: "#9B9B9B" }}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p style={{ fontSize: "11px", color: "#9B9B9B" }}>
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of stock pulse and offering such services, please create a ticket here.
          </p>
        </div>
      </div>


      <div className="row">
        <ul
          className="d-flex list-unstyled gap-3 flex-wrap p-0 m-0 justify-content-center mb-3"
          style={{ fontSize: "11px" }}
        >
          {[
            "NSE",
            "BSE",
            "MCX",
            "Terms & Conditions",
            "Policies & Procedures",
            "Privacy Policy",
            "Disclosure",
            "For Investor's Attention",
            "Investor Charter",
          ].map((item, index) => (
            <li key={index}>
              <a href="#" className="text-decoration-none">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
