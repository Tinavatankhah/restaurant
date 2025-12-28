import { useState } from "react";
import { menu } from "./data/menu";

export function UseCart() {
  const [cart, setCart] = useState([]);
  function addToCart(itemId) {
    if (cart?.some((item) => item.id === itemId)) {
      setCart(
        cart?.map((item) => {
          if (item.id === itemId) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        })
      );
    } else {
      menu?.map((item) => {
        if (item.id === itemId) {
          setCart([...cart, { ...item, count: 1 }]);
        }
      });
    }
  }
  function deleteFromCart(itemId) {
    setCart(
      cart?.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })?.filter((item)=>item.count>0)
    );
    console.log(cart);
  }

  return { cart, addToCart, deleteFromCart };
}
