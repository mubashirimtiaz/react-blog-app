import React from "react";
import InvoiceList from "./components/invoice-list/InvoiceList.component";
import InvoiceContextProvider from "./contexts/invoice-context/invoice.context";
function App() {
  return (
    <div className="App">
      <InvoiceContextProvider>
        <h1>Hello World</h1>
        <InvoiceList />
      </InvoiceContextProvider>
    </div>
  );
}

export default App;
