import React from "react";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import clothes from "../../assests/images/clothes2.jpg";
import { filterProducts } from "../../features/slices/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import HoodiesImage from "../../assests/images/hoodie1.jpg";
import DressesImage from "../../assests/images/dress1.jpg";
import SuitsImage from "../../assests/images/suit1.jpg";
import ShoesImage from "../../assests/images/shoe5.jpg";
import TShirtsImage from "../../assests/images/t-shirt1.jpg";
import JeansImage from "../../assests/images/jeans1.jpg";
import JacketsImage from "../../assests/images/jacket1.jpg";
import BagsImage from "../../assests/images/bag1.jpg";

function NavigateButtons() {
  const buttons = [
    { label: "Hoodies", image: HoodiesImage },
    { label: "Dresses", image: DressesImage },
    { label: "Suits", image: SuitsImage },
    { label: "Shoes", image: ShoesImage },
    { label: "T-Shirts", image: TShirtsImage },
    { label: "Jeans", image: JeansImage },
    { label: "Jackets", image: JacketsImage },
    { label: "Bags", image: BagsImage },
  ];

  const dispatch = useDispatch();

  return (
    <div>
      {" "}
      <h1 className=" text-3xl font-inter text-gray-600 font-bold tracking-normal leading-non text-center my-6">
        Shop by
      </h1>
      <Marquee direction="right" speed={70} className="mb-10 mt-5 ">
        {buttons.map((button, index) => {
          return (
            <Card
              className="w-80 md:w-96 my-8 mx-5 h-80 flex  justify-center items-center transition-transform duration-300 hover:scale-105"
              key={index}
              style={{
                backgroundImage: `url(${button.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  {" "}
                  <div key={index} className="md:mr-4">
                    <Link to={"/filteredProducts/" + button.label}>
                      <Button
                        size="lg"
                        ripple={true}
                        className="bg-white text-black duration-300 ease-in-out rounded-none"
                        onClick={() => dispatch(filterProducts(button.label))}
                      >
                        {button.label}
                      </Button>
                    </Link>
                  </div>
                </Typography>
              </CardBody>
            </Card>
          );
        })}
      </Marquee>
      <div className="bg-black p-2 md:w-[55%] w-[70%] mx-auto rounded-md">
        <h3 className="text-orange-900 text-center md:text-lg text-md font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center items-center py-4 my-5">
        <img
          className="md:h-[600px] h-[400px] md:w-[80%] w-[90%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
}

export default NavigateButtons;
