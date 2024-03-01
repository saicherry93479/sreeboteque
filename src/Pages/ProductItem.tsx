// @ts-ignore
// @ts-nocheck
import { useState } from "react";
import { useLocation } from "react-router-dom";

const images: any[] = [
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FyZWV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1617288991572-9e8755a88209?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxpbmRpYW4lMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1583391733981-8b530b760347?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbHdhciUyMGthbWVlenxlbnwwfHwwfHx8MA%3D%3D",
];

const ProductItem = () => {
  const location = useLocation();
  const data = location.state;

  const scrollToItem = (index: any) => {
    const productList = document.getElementById("productList");
    const itemWidth = productList?.children[0].offsetWidth; // Assuming all items have the same width
    const scrollAmount = index * itemWidth;

    productList?.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <>
      {data && (
        <div className="flex w-full flex-col lg:flex-row w-full px-6 lg:px-12  xl:px-52   py-[12px]  md:py-[24px] lg:py-[24px] bg-white text-white text-[#392a48] mb-[60px] lg:mb-[80px]">
          <div className="flex flex-col lg:h-[50%] lg:w-[50%] lg:space-y-[20px] xl:flex-row-reverse xl:justify-between xl:gap-2 xl:gap-[30px] xl:space-y-0">
            <div
              className="overflow-x-scroll"
              id="productList"
              style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
            >
              <div className="flex">
                {data.images.map((d) => (
                  <div
                    className="mr-1 w-full  flex-none max-h-[80vh]"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <img
                      src={d}
                      alt="Product 1"
                      className="h-full w-full object-cover lg:rounded-[10px]"
                    />
                  </div>
                ))}

                {/* Add more product images as needed */}
              </div>
            </div>

            <div className="flex  mt-[20px] w-[300px] gap-2 lg:flex xl:flex-col">
              {data.images.map((d, index) => (
                <img
                  onClick={() => scrollToItem(index)}
                  src={d}
                  className="w-[50px] lg:w-[80px] cursor-pointer rounded-[8px]"
                ></img>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[25px]  py-[12px]  md:px-[32px] md:py-[24px] lg:w-[50%] lg:px-[48px] lg:py-0 lg:py-[24px]">
            <p className="text-[32px] font-bold md:text-[40px] text-[#e5611a]">
              {data.name}
            </p>
            <button className="w-full cursor-pointer rounded rounded-[50px]    px-5 py-2 py-[10px] lg:py-[20px] text-center font-lora text-[16px] font-bold text-white md:text-[18px] bg-[#fc921b] hover:bg-[#e5611a]">
              Contact
            </button>
            <div className="space-y-[20px]">
              <p className="font-lora text-[16px] text-gray-500 md:text-[18px]">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
