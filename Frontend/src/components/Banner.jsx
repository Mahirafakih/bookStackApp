import React from "react";
import books from "/books.png";
function Banner() {
  return (
    <div className=" mt-16 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <div className="space-y-8 mt-12 md:mt-32">
          <h1 className="text-4xl font-extrabold ">
            Hello, welcome here to learn something
            <span className="text-pink-600"> new everyday!!! </span>
          </h1>
          <div>
            <p className="md:text-xl">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas
              senectus egestas aptent blandit, ornare lacinia. Taciti faucibus
              feugiat volutpat pellentesque malesuada maximus nam dui.
            </p>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 dark:text-black"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="mt-4 mb-3 btn btn-secondary">Secondary</button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2 ml-4 ">
        <img src={books} alt="" />
      </div>
    </div>
  );
}

export default Banner;
