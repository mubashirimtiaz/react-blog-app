import React from "react";
import Navbar from "./components/navbar/Navbar.component";
import Home from "./pages/home/home.page";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <InvoiceContextProvider>
        <InvoiceList />
      </InvoiceContextProvider> */}
    </div>
  );
}

export default App;
