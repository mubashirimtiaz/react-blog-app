import { v4 as uuid } from "uuid";
export const invoiceReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [
          ...state.items,
          {
            item: uuid(),
            quantity: action.payload.quantity,
            tax: action.payload.tax,
            price: action.payload.price,
            discount: action.payload.discount,
            description: action.payload.description,
          },
        ],
      };
    default:
      return state;
  }
};
