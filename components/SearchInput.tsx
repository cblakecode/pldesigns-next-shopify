import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchInput = () => {
  return (
    <div className="group relative flex items-center">
      <MagnifyingGlassIcon className="absolute top-3 bottom-3 left-0 h-4 w-4 text-main-700/50 group-hover:text-main-800" />
      <input
        type="search"
        name="search-nav"
        placeholder="Search"
        className="block h-full w-full cursor-pointer rounded-md border border-main-500 bg-transparent p-2 pl-6 text-sm text-common-light placeholder:text-main-700/70 focus:border-main-700/50 focus:ring-main-700/50 "
      />
      <button
        type="submit"
        className="absolute top-1 bottom-1 right-0 mr-2 flex items-center justify-center rounded-md bg-main-500 p-2 text-sm"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
