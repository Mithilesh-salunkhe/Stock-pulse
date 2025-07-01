import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {

  
  const [isBuyWindowOpen, setIsBuyWindow] = useState(false);
  const [selectStockUID, setSelectStockUID] = useState("");

  const handelOpenBuyWindow = (uid) => {
    setIsBuyWindow(true);
    setSelectStockUID(uid);
  };

  const handelCloseBuyWindow = () => {
    setIsBuyWindow(false);
    setSelectStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handelOpenBuyWindow,
        closeBuyWindow: handelCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectStockUID}
          handleCancelClick={handelCloseBuyWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
