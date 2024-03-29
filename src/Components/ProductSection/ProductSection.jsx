import React from "react";
import { storeData } from "../../assests/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

function ProductSection() {
  return (
    <div>
      <div className="bg-black p-2 md:w-[55%] w-[70%] mx-auto rounded-md">
        <h2 className="text-red-600 text-center md:text-lg text-md font-inter font-bold tracking-normal leading-none">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div className="grid grid-cols-1 justify-items-center py-8 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3  md:max-w-7xl">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                price={product.price}
                totalPrice={product.totalPrice}
                color={product.color}
                size={product.size}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductSection;
