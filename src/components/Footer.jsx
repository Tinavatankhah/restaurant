import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" h-[500px] bg-[#FFFDE6] ">
<div className="w-screen lg:flex lg:justify-between m-auto lg:max-w-[1116px] lg:flex-row-reverse">
  <div className="mx-8 flex pt-24 mt-28 gap-4 justify-between">
        <div className="w-1/2">
          <h3 className=" text-black1 font-medium "> USEFUL LINKS</h3>
          <Link to="/" className="block text-black2 leading-9 font-light">
            Homepage
          </Link>
          <Link to="/cart" className="block text-black2 font-light">
            Cart
          </Link>
        </div>
        <div className="w-50%">
          <h3 className=" text-black1 font-medium ">OPENING HOUR</h3>
          <p className="block text-black2 font-light">
            Monday - Friday:9:00 - 23:00h
          </p>
          <p className="block text-black2 font-light">
            Saturday:09:00 - 16:00h
          </p>
          <p className="block text-black2 font-light">Sunday:12:00 - 18:00h</p>
        </div>
      </div>
      <div className="m-4 flex gap-5 items-center justify-center mt-36 ">
        <div className="bg-primary-red  w-16 h-16  flex items-center justify-center">
          <Link to="/">
            <p className="text-5xl font-serif">T</p>
          </Link>
        </div>
        <h2 className="font-semibold text-4xl">restaurant</h2>
      </div>

</div>


    
    </div>
  );
}
