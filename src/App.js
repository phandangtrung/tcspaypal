import logo from "./logo.svg";
import "./App.css";
import { PayPalButton } from "react-paypal-button-v2";

function App() {
  return (
    <div className="App">
      trungphan
      <div style={{ paddingTop: 150 }}>
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
