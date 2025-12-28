import { Link } from "react-router-dom";

import { SvgLogo } from "../assets/SvgLogo";

export default function Nav() {
  return (
    <div className="mt-2 mx-4 h-14 max-w-[398px]  max-lg:max-w-[834px] lg:max-w-[1200px] lg:mx-32 ">
      <div className="lg:flex lg:justify-between">
        <div
          className="flex justify-between lg:justify-start lg:gap-20
      "
        >
          <div className="bg-primary-red rounded-b-sm w-12 h-14 flex justify-center items-center ">
            <Link to="/">
                         <p className="text-4xl font-serif">T</p>
            </Link>
          </div>
          <Link
            to="/"
            className="hidden lg:block lg:mr-1 font-semibold lg:gap-0 hover:text-primary-red active:text-primary-red self-center "
          >
            Homepage
          </Link>

          <Link
            to="/cart"
            className="hidden lg:block lg:mr-3 font-semibold lg:gap-0 hover:text-primary-red active:text-primary-red self-center "
          >
            Cart
          </Link>
          <Link   to="/cart" className="lg:hidden">
            <SvgLogo />
          </Link>
           </div>
          <div className="hidden lg:block p-3 bg-[#ffbc0d] rounded-sm   self-center">
            <a
              className="text-black2 px-2"
              href="https://www.google.com"
            >
              Order on the App
            </a>
          </div> 
       
      </div>
    </div>
  );
}
