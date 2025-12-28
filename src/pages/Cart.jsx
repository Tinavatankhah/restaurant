import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContex } from "../ShopContexProvider";
import { MenuItem } from "../components/MenuItem";
import { Basket } from "../assets/basket";

export default function Cart() {
  const { cart } = useContext(ShopContex);
  return (
    <div className="min-h-[10vh] mt-10 mx-4 mb-30  max-w-[398px]  max-lg:max-w-[834px] lg:max-w-[1200px] lg:mx-32">
      {cart?.length == 0 ? (
        <div>
          <div>
            <h3 className="capitalize flex justify-center items-center text-4xl my-44">
              your cart is empty
            </h3>
                
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <div
            className=" grid
        gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4"
          >
            {cart.map((item) => {
              return <MenuItem key={item.id} data={item} />;
            })}
          </div>
          <button className="border-red-300 border-2 flex justify-center items-center rounded-lg text-lg py-1.5 px-3 mx-auto my-6 cursor-pointer">
            reset
          </button>
        </div>
      )}
    </div>
  );
}
