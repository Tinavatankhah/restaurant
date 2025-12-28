import { Btn } from "../components/Btn";
import { MenuItem } from "../components/MenuItem";
import { menu } from "../data/menu";

export function Shop() {
  return (
    <div className="mt-10 mx-4 mb-30  max-w-[398px]  max-lg:max-w-[834px] lg:max-w-[1200px] lg:mx-32 ">
      <h2 className="text-primary-red text-4xl font-semibold m-4 p-2">Menu</h2>
      <div className="p-4 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3  ">
        {menu?.map((item) => (
          <MenuItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
