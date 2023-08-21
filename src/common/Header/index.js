import React from "react";
import {
  HeartLeftIcon,
  HeartRightIcon,
  SearchIcon,
  PolygonIcon,
} from "../CustomIcon";

export const Header = () => {
  return (
    <div className="h-24 w-screen absolute top-0 left-0 bg-gradient-to-l from-purple-500 to-pink-500">
      <div className="flex py-6 px-28 justify-between items-center gap-20">
        <div className="flex py-2">
          <HeartLeftIcon height={34} width={40} />
          <div className="text-white font-starborn text-starborn-ml mx-5">
            Future Love
          </div>
          <HeartRightIcon width={40} height={34} />
        </div>
        <div className="relative">
          <div className="flex items-center">
            <input
              type="text"
              className=" pl-14 pr-16 py-2 border rounded-large"
              placeholder="Search..."
            />
            <div className="absolute left-3 cursor-pointer top-1/2 transform -translate-y-1/2">
              <SearchIcon width={20} height={20} className="text-gray-400" />
            </div>
            <div className="absolute right-3 cursor-pointer top-1/2 transform -translate-y-1/2">
              <PolygonIcon width={12} height={10} className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <button
            type="button"
            className="text-white bg-blue-700 font-bold rounded-mlarge px-2.5 py-2 text-center justify-center items-center mr-4"
          >
            Sign In
          </button>

          <button
            type="button"
            className="text-white bg-blue-700 font-bold rounded-mlarge px-2.5 py-2 text-center mr-1 justify-center items-center"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
