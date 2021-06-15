import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import { PayPalButton } from "react-paypal-button-v2";

function App() {
  const [data, setdata] = useState("trung");

  useEffect(() => {
    // const abd = document.addEventListener("message", handleEvent);
    // setdata(abd);
    // window.addEventListener("message", (message) => {
    //   console.log(message.data); // Wayne is coming!!!
    //   setdata(message.data);
    // });
    window.addEventListener("message", function (event) {
      // alert(event.data);
      // setdata(event.data);
      setdata("qua ne");
    });
  }, []);
  return (
    <div className="App">
      <div>{data}</div>
      <div style={{ paddingTop: 50 }}>
        <PayPalButton
          amount={4}
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
