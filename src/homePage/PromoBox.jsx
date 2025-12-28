import ham from "../assets/hamberger 1.png";
export default function PromoBox() {
  return (
    <div className=" mt-14 mx-3.5  max-w-[390px] md:max-w-20   md:-mt-24  max-lg:max-w-[834px] lg:mt-10   lg:max-w-[1200px] lg:mx-32 ">
      <div className="max-sm:block  max-sm:text-center   flex m-auto sm:m-10 items-center justify-between ">
        <div className=" text-shadow-light-black lg:max-w-80 ">
          <h2 className="text-primary-red font-semibold text-4xl lg:leading-12.5">
            Order your favourite food
          </h2>
          <p className="mt-2 pb-3.5">
            Hamburger has many flavors, have you tried Cheese Beef Hamburger?
          </p>
        </div>
        <div className="flex gap-4">
          <div className="max-sm:hidden mt-8 lg:mt-24 lg:-mr-16 flex flex-col justify-center items-center-safe w-40 p-4 h-20 rounded-t-[50px] rounded-bl-[50px] bg-gray-200 border-2 border-gray-300">
            <h5>Delivery</h5>
            <p className="text-gray-600 "> 30 mins</p>
          </div>
          <img src={ham} className=" md:max-w-[500px] lg:max-w-[680px]"></img>
        </div>
      </div>
    </div>
  );
}
