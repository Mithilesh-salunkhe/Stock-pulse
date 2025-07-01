import Menu from "./Menu";

function TopBar() {
  return ( 
    <header className="topbar-container">
      <div className="container-fluid navbar navbar-light bg-white border-bottom px-3">
        <div className="w-30 topbar-section">
          <div className="d-flex justify-content-start gap-4">
            <div className="nift d-flex align-items-center">
              <p className="index mb-0 fw-semibold">NIFTY 50</p>
              <p className="index-points mb-0 text-success">{100.2}</p>
              <p className="percent mb-0 text-success"></p>
            </div>
            <div className="sensex d-flex align-items-center">
              <p className="index mb-0 fw-semibold">SENSEX</p>
              <p className="index-points mb-0 text-success">{100.2}</p>
              <p className="percent mb-0 text-success"></p>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </header>
  );
}

export default TopBar;

