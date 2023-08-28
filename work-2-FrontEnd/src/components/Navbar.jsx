import React from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "../SearchContext";

function Navbar() {
  const { searchValue, setSearchValue } = useSearchContext();

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <header class="pb-6 bg-white lg:pb-0">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
              <Link to="/" title="" class="flex">
                <h1 className="text-[38px]">Restaurant</h1>
              </Link>
            </div>

            <div class="flex items-center flex-grow border rounded-md border-gray-300 ml-[25px]">
              {/* Search Input */}
              <div class="w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={handleSearchInputChange}
                  class="w-full px-4 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <button
              type="button"
              class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {/* Hamburger Icon */}
            </button>

            <Link
              to="/createPlayer"
              title=""
              class="items-center justify-center hidden px-4 py-3 ml-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              Create New Restaurant
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
