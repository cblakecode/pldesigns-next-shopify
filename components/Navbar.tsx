import { useState } from "react";
import { ShoppingCartIcon, HomeIcon } from "@heroicons/react/24/outline";
import SearchInput from "./SearchInput";
import ShoppingCart from "./ShoppingCart";
import Link from "next/link";

const navList: string[] = ["About", "Contact", "Shop", "Legal"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-auto sticky inset-x-0 top-0 z-10 col-end-5 grid h-20 w-full grid-flow-col-dense grid-cols-8 place-content-center place-items-center bg-main text-common-light">
      <div className="col-start-1 col-end-5 flex h-full flex-row items-center justify-start pt-6 lg:pt-0">
        <Link className="hover:text-main-300" href={"/"}>
          <HomeIcon className="w-6" />
        </Link>
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
