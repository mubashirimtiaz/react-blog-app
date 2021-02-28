import React from "react";
import Navbar from "./components/navbar/Navbar.component";
import Home from "./pages/home/home.page";
import Create from "./pages/create_blog/create.page";
import { Route, Switch } from "react-router-dom";
import BlogDetail from "./pages/blog_detail/BlogDetail.page";
import NotFound from "./pages/404/NotFound.page";
function App() {
  return (
    <div className="content">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blog/:id">
          <BlogDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {/* <InvoiceContextProvider>
        <InvoiceList />
      </InvoiceContextProvider> */}
    </div>
  );
}

export default App;
