import Watchlist from "./WatchList";
import { Routes, Route } from "react-router-dom";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Fund";
import Apps from "./Apps";
import { GeneralContextProvider } from "./GeneralContext";
import BuyActionWindow from "./BuyActionWindow";

function Dashboard() {
    return ( 
        <div className="dashboard-container">
            <GeneralContextProvider>
                <Watchlist />
            </GeneralContextProvider>

            <div className="right-content">
                <Routes>
                    <Route path="/" element={<Summary />} />
                    <Route path="/orders" element={<Orders />}/>
                    <Route path="/holdings" element={<Holdings />}/>
                    <Route path="/positions" element={<Positions />}/>
                    <Route path="/funds" element={<Funds />}/>
                    <Route path="/apps" element={<Apps />}/>
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;