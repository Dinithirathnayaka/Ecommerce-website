import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assests/data/dummyData";

function Slider() {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", slideIndex);

  const dispatch = useDispatch();
  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <div className="relative h-[350px] md:h-[700px] ">
                    <div className="absolute inset-0 ">
                      <img
                        src={item.img}
                        alt="shoes"
                        className="h-full w-full object-cover "
                      />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                  </div>
                )}
              </div>
              <div className="absolute md:top-60 top-32 mx-auto inset-x-1/4 ">
                <p className="text-white md:text-4xl text-xl font-bold font-inter text-center">
                  {" "}
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-12 left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={dot.id}>
              <div
                className={
                  index === slideIndex
                    ? "bg-gray-500 rounded-full p-2 cursor-pointer"
                    : "bg-white rounded-full p-2 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Slider;
