import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mt-14 mx-8">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around bg-[#1313130D] rounded-3xl">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-6xl text-[#131313] font-bold leading-none sm:text-6xl">
            Books to freshen
            <span className="dark:text-violet-600"> up</span> <br /> your
            bookshelf
          </h1>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to="/listed-books">
              <button className="btn mt-12 bg-[#23BE0A] text-white text-xl font-bold">
                {" "}
                View The List
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/banner.png"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
