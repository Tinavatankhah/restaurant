import { useEffect, useState } from "react";
import { menu } from "./data/menu";

export function UseCart() {
  const [cart, setCart] = useState(()=>{
    const data=localStorage.getItem('cartItems');
    return (data?JSON.parse(data):[])
  });
  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cart))
  },[cart])
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
function reset(){
  localStorage.clear;
  setCart([]);
}
  return { cart, addToCart, deleteFromCart , reset };
}
