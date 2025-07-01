import { useState } from "react";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

function Watchlist() {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [ 
          "rgba(255, 99, 132, 3)",
          "rgba(54, 162, 235, 3)",
          "rgba(255, 206, 86, 3)",
          "rgba(75, 192, 192, 3)",
          "rgba(153, 102, 255, 3)",
          "rgba(255, 159, 64, 3)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container px-4 pb-8">
      <div className="search-container mb-4">
        <input
          className="search-input"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      {/* No scrollable area — all items will flow naturally */}
      <ul className="list space-y-2">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      {/* Doughnut Chart Centered Below */}
      <div className="mt-10 flex justify-center w-full">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          <DoughnutChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Watchlist;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      className="watchlist-item"
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="stock-details">
        <p className="stock-name">{stock.name}</p>
        <div className="stock-pricing">
          <span className={stock.isDown ? "loss" : "profit"}>
            {stock.percent}%
          </span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down-icon" />
          ) : (
            <KeyboardArrowUp className="up-icon" />
          )}
          <span className="stock-price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <div className="watchlist-actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
       <button className="buy-button" onClick={() => openBuyWindow(uid)}>
          Buy
        </button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell-button">Sell</button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
      placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="Analysis-button">
          <BarChartOutlined />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="more-button">
          <MoreHoriz />
        </button>
      </Tooltip>
    </div>
  );
};
