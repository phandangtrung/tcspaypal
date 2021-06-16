import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import { PayPalButton } from "react-paypal-button-v2";

function App() {
  const [data, setdata] = useState(5);

  useEffect(() => {
    const loaddatfm = () => {
      // var body = document.getElementsByTagName('BODY')[0];
      document.addEventListener("message", function (msg) {
        var price = msg.data;
        setdata(price);
      });
    };
  }, []);
  return (
    <div className="App">
      <div>{data}</div>
      <div style={{ paddingTop: 50 }}>
        <PayPalButton
          amount={data}
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
