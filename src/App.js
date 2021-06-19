import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { PayPalButton } from "react-paypal-button-v2";

function App() {
  const [databp, setdatabp] = useState({ price: 50, datane: {} });
  const savedata = (ordata) => {
    try {
      axios({
        method: "post",
        url: "https://tcsserver.herokuapp.com/api/orders/create/order",
        data: { ...ordata },
      });
    } catch (error) {}
  };
  useEffect(() => {
    const loaddatfm = () => {
      // var body = document.getElementsByTagName('BODY')[0];
      document.addEventListener("message", function (msg) {
        var dt = msg.data;
        alert(dt);
        setdatabp(dt);
      });
    };
    loaddatfm();
  }, []);
  return (
    <div className="App">
      <div>{databp.price}</div>
      <div style={{ paddingTop: 50 }}>
        <PayPalButton
          amount={databp.price}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            // alert("Transaction completed by " + details.payer.name.given_name);
            // OPTIONAL: Call your server to save the transaction
            // return fetch("/paypal-transaction-complete", {
            //   method: "post",
            //   body: JSON.stringify({
            //     orderId: data.orderID,
            //   }),
            // });
            savedata(databp.datane);
          }}
          options={{
            clientId:
              "AQ-ayr-c98Wf9fMdr07vzQ-iLBEtWuLf7f3XqQdVg5n7FuaJj6O0WZs1mqmPLfLfBIuJKZ8HDVfoO8qO",
          }}
        />
      </div>
    </div>
  );
}

export default App;
