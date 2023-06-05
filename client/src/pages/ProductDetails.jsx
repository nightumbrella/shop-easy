import React from "react";
import { useParams } from "react-router-dom";
import { product } from "../../product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  console.log(product);
  let productDetail = product.find((product) => product.id == id);

  console.log(productDetail);
  return (
    <div className="border rounded-md px-5 py-3 relative mb-10">
      {/* <Carousel className="w-full h-full">
        <div className="w-[300px] h-[300px]">
          <img
            src={productDetail.thumbnail}
            alt="images"
            className="w-[300px] h-[300px] mb-5 select-none"
          />
        </div>
        {productDetail.images.map((image) => (
          <div key={image.id} className="w-[300px] h-[300px] border">
            <img
              src={image.img}
              alt="image"
              className="w-[100px] h-[100px] object-cover"
            />
          </div>
        ))}
      </Carousel> */}
        <img
            src={productDetail.thumbnail}
            alt="images"
            className="w-[300px] mb-5 select-none"
          />

      <div>
        <div className="flex items-center justify-between border-t-2 pt-2">
          <h1 className="font-semibold">AirPods Max</h1>
          <h1 className="font-medium bg-[#e7e7e7] px-2 py-1 rounded-md">
            $80.00
          </h1>
        </div>
        <h2 className="text-sm">technology</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
