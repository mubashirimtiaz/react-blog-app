import React, {
  // useContext,
  useState,
} from "react";
// import { InvoiceContext } from "../../contexts/invoice-context/invoice.context";
import TextField from "../text-field/TextField.component";
const InvoiceList = () => {
  //   const { invoices, dispatch } = useContext(InvoiceContext);
  const [values, setValues] = useState({
    quantity: 0,
    tax: 0,
    price: 0,
    discount: 0,
    description: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(values);
      }}
    >
      <TextField
        type="number"
        name="quantity"
        handleChange={handleChange}
        value={values.quantity}
      />
      <TextField
        type="number"
        name="tax"
        handleChange={handleChange}
        value={values.tax}
      />
      <TextField
        type="number"
        name="price"
        handleChange={handleChange}
        value={values.price}
      />
      <TextField
        type="number"
        name="discount"
        handleChange={handleChange}
        value={values.discount}
      />
      <TextField
        type="text"
        name="description"
        handleChange={handleChange}
        value={values.description}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InvoiceList;
