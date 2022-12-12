import { useState } from "react";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import SearchInput from "./SearchInput";
import ShoppingCart from "./ShoppingCart";

const navList: string[] = [
  "Home",
  "About",
  "Contact",
  "Shop",
  "Legal",
  "Gift Card",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed z-10 grid h-min max-h-min w-full auto-cols-max grid-flow-col place-content-between place-items-center bg-transparent px-6 text-common-light">
      <div className="flex h-full flex-row items-center justify-center gap-8">
        <button className="hover:text-main-300">
          <HomeIcon className="w-6" />
        </button>
        <ul className="hidden flex-row lg:flex">
          {navList.map((item, index) => {
            return (
              <button
                key={index}
                className="rounded-md p-6 hover:text-main-300"
              >
                <li className="p-4">{item}</li>
              </button>
            );
          })}
        </ul>
      </div>
      <div className="flex h-full w-full flex-row items-center justify-evenly gap-6">
        <SearchInput />
        <button className="hover:text-main-300">
          <MagnifyingGlassIcon className="w-6 md:hidden" />
        </button>
        <button className="hover:text-main-300" onClick={() => setOpen(true)}>
          <ShoppingCartIcon className="w-6" />
        </button>
      </div>
      <ShoppingCart open={open} handleOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
