import { useContext } from "react";
import { ShopContex } from "../ShopContexProvider";

export function Btn(props) {
  const { cart, addToCart, deleteFromCart } = useContext(ShopContex);
  return (
    <div className="shadow-ligt-black   flex justify-center items-center rounded-3xl">
      <button
        className="px-2 text-2xl cursor-pointer pr "
        onClick={() => addToCart(props.id)}
      >
        +
      </button>

      
        {cart.map((item)=>{
          if(item.id==props.id){
            return <span key={item.id} className="text-amber-600">{item.count}</span>
          }
        })}
   
      <button
        className="cursor-pointer px-2  pl text-2xl"
        onClick={() => deleteFromCart(props.id)}
      >
        -
      </button>
    </div>
  );
}
