import React, { createContext, useReducer } from "react";
import { invoiceReducer } from "../../reducers/invoiceReducer";
const initialState = {
  customer_id: "5",
  issue_date: "2021-02-09",
  due_date: "2021-02-09",
  category_id: "1",
  items: [
    {
      item: "1",
      quantity: "5000",
      tax: "",
      price: "100",
      discount: "100",
      description: "",
    },
  ],
};

export const InvoiceContext = createContext(initialState);

const InvoiceContextProvider = ({ children }) => {
  const [invoices, dispatch] = useReducer(invoiceReducer, initialState);
  return (
    <InvoiceContext.Provider value={{ invoices, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContextProvider;
