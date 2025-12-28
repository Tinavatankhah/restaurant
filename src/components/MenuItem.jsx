import { useContext } from "react";
import { Basket } from "../assets/basket";
import { Btn } from "./Btn";
import { ShopContex } from "../ShopContexProvider";

export function MenuItem({ data }) {
  const { cart, addToCart } = useContext(ShopContex);

  return (
    <div className="m-auto w-full  max-w-[280px] border-gray-400/40 border  rounded-xl px-10 p-8 pb-24 md:pb-34 lg:pb-24">
      <div className=" m-auto h-[300px] py-3 mx-auto ">
        <div className="w-full h-[188px] relative">
          <img
            className="absolute max-w-[197px] h-[188px] w-full z-10"
            src={data.img}
          ></img>
          <div className="h-1/2 w-full bg-yellow-100/40  absolute top-[107px] z-0"></div>
        </div>
        <div className="mt-6">
          <h5 className="text-lg font-semibold line-clamp-1">{data.name}</h5>
          <p className="text-sm text-black2 line-clamp-1">{data.desc}</p>
          <div></div>
          <div className="flex justify-between mt-10 items-center ">
            <p className="text-2xl font-semibold">{data.price}$</p>
            {cart?.some((item) => item.id === data.id) ? (
              <Btn id={data.id} />
            ) : (
              <div
                className="bg-primary-red rounded-lg w-11 h-11  hover:cursor-pointer flex  justify-center items-center "
                onClick={() => addToCart(data.id)}
              >
                <Basket />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
