import { useState } from "react";
import { ShoppingCartIcon, HomeIcon } from "@heroicons/react/24/outline";
import SearchInput from "./SearchInput";
import ShoppingCart from "./ShoppingCart";

const navList: string[] = ["About", "Contact", "Shop", "Legal"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed z-10 col-end-5 grid h-min max-h-min w-full grid-flow-col-dense grid-cols-8 place-content-center bg-transparent px-6 pt-6 text-common-light 2xl:bg-main">
      <div className="col-start-1 col-end-5 flex h-full flex-row items-center justify-start pt-6 lg:pt-0">
        <button className="hover:text-main-300">
          <HomeIcon className="w-6" />
        </button>
        <ul className="hidden flex-row lg:flex">
          {navList.map((item, index) => {
            return (
              <button
                key={index}
                className="flex items-center justify-center rounded-md p-6 text-center hover:text-main-300"
              >
                <li className="p-4">{item}</li>
              </button>
            );
          })}
        </ul>
      </div>
      <div className="col-start-6 col-end-9 flex flex-row items-center justify-center gap-6">
        <SearchInput />
        <button className="hover:text-main-300" onClick={() => setOpen(true)}>
          <ShoppingCartIcon className="w-6" />
        </button>
      </div>
      <ShoppingCart open={open} handleOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
