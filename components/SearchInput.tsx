import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchInput = () => {
  return (
    <div className="mx-auto max-w-md">
      <div className="relative flex h-8 w-full items-center overflow-hidden rounded-lg bg-main-100/40 focus-within:shadow-lg">
        <div className="flex h-full w-12 items-center justify-center text-xs text-gray-300">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </div>
        <input
          type="text"
          className="peer h-full w-full bg-common-light/60 pr-2 text-sm text-gray-700 outline-none"
          id="search"
          placeholder="Search Products.."
        />
      </div>
    </div>
  );
};

export default SearchInput;
