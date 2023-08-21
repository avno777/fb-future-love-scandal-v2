import React from "react";

export const Header = () => {
  return (
    <div className="h-24 w-screen absolute top-0 left-0 bg-gradient-to-l from-purple-500 to-pink-500">
      <div className="flex py-6 px-28 justify-between items-center gap-20">
        <div className="flex py-2">
          <svg
            width="40"
            height="34"
            viewBox="0 0 40 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1">
              <path
                id="Vector"
                d="M14.4131 0.762948C17.7776 1.28519 20.5293 3.34282 22.0747 6.11925C24.3779 3.94016 27.6165 2.81247 30.981 3.33471C36.7871 4.23599 40.7689 9.70943 39.8745 15.56C37.8397 28.8697 17.9096 33.3634 17.9096 33.3634C17.9096 33.3634 0.245625 23.0341 2.28047 9.72447C3.17492 3.87387 8.60687 -0.138337 14.4131 0.762948Z"
                fill="#FF4C4C"
              />
              <path
                id="Vector_2"
                d="M5.93285 12.0839C8.39019 11.4373 10.8793 12.0249 12.7538 13.4648C13.6903 11.2853 15.5764 9.54638 18.0338 8.89983C22.2745 7.78395 26.6102 10.3435 27.7176 14.6167C30.2369 24.338 17.9106 33.3637 17.9106 33.3637C17.9106 33.3637 2.77855 31.5629 0.259262 21.8417C-0.84808 17.5684 1.69199 13.1998 5.93285 12.0839Z"
                fill="#FFCCD7"
              />
              <path
                id="Vector_3"
                d="M5.93306 12.0838C7.4272 11.6907 8.93275 11.7545 10.3051 12.1881C6.2822 13.4504 3.91635 17.6909 4.99205 21.8415C6.59564 28.0295 13.2882 31.5785 17.9414 33.3409C17.9216 33.3557 17.9109 33.3636 17.9109 33.3636C17.9109 33.3636 2.77885 31.5627 0.259556 21.8415C-0.847866 17.5684 1.69221 13.1997 5.93306 12.0838Z"
                fill="#FFB3CB"
              />
            </g>
          </svg>
          <div className="text-white font-starborn text-starborn-ml mx-5">
            Future Love
          </div>
          <svg
            width="40"
            height="34"
            viewBox="0 0 40 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 2">
              <path
                id="Vector"
                d="M25.5869 0.762948C22.2224 1.28519 19.4707 3.34282 17.9253 6.11925C15.6221 3.94016 12.3836 2.81247 9.01902 3.33471C3.21286 4.23599 -0.768938 9.70944 0.125514 15.56C2.16028 28.8698 22.0904 33.3634 22.0904 33.3634C22.0904 33.3634 39.7544 23.0341 37.7195 9.72447C36.8251 3.87387 31.3931 -0.138337 25.5869 0.762948Z"
                fill="#FF4C4C"
              />
              <path
                id="Vector_2"
                d="M34.0672 12.0839C31.6098 11.4373 29.1207 12.0249 27.2462 13.4648C26.3097 11.2853 24.4236 9.54638 21.9662 8.89983C17.7255 7.78395 13.3898 10.3435 12.2824 14.6167C9.76312 24.338 22.0894 33.3637 22.0894 33.3637C22.0894 33.3637 37.2215 31.5629 39.7407 21.8417C40.8481 17.5684 38.308 13.1998 34.0672 12.0839Z"
                fill="#FFCCD7"
              />
              <path
                id="Vector_3"
                d="M34.0669 12.0838C32.5728 11.6907 31.0673 11.7545 29.6949 12.1881C33.7178 13.4504 36.0837 17.6909 35.008 21.8415C33.4044 28.0295 26.7118 31.5785 22.0586 33.3409C22.0784 33.3557 22.0891 33.3636 22.0891 33.3636C22.0891 33.3636 37.2212 31.5627 39.7404 21.8415C40.8479 17.5684 38.3078 13.1997 34.0669 12.0838Z"
                fill="#FFB3CB"
              />
            </g>
          </svg>
        </div>
        <div className="relative">
          <div className="flex items-center">
            <input
              type="text"
              className=" pl-14 pr-16 py-2 border rounded-large"
              placeholder="Search..."
            />
            <div className="absolute left-3 cursor-pointer top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-400"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="search">
                  <path
                    id="Vector"
                    d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z"
                    stroke="#65676B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M28.0002 28L22.2002 22.2"
                    stroke="#65676B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="absolute right-3 cursor-pointer top-1/2 transform -translate-y-1/2">
              <svg
                className="w-3 h-2.5 text-gray-400"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Polygon 1"
                  d="M8 14L15.7942 0.5H0.205771L8 14Z"
                  fill="#65676B"
                />
              </svg>
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
