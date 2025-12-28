import { createContext } from "react";
import { UseCart } from "./UseCart";

const ShopContex = createContext({
  cart: null,
  addToCart: () => {},
  deleteFromCart: () => {},
});

export function ShopContexProvider(props) {
  return (
    <ShopContex.Provider value={UseCart()}>
      {props.children}
    </ShopContex.Provider>
  );
}
export { ShopContex };
