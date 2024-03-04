// @ts-nocheck
import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-6 lg:px-12  xl:px-52   py-[12px]  md:py-[24px] lg:py-[24px] pt-[5rem]">
      <p className="my-[15px] text-[32px] font-bold md:text-[40px]">
        Shop By Category
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-8 grid-flow-row-dense grid-flow-column-dense">
        <div className="relative bg-red-100 h-[200px] md:h-[400px] group  cursor-pointer ">
          <div
            className="!absolute top-0 left-0 h-full w-full bg-[#00000050] flex justify-center items-center cursor-pointer"
            onClick={() => {
              navigate("/productList", { state: { category: "categorytwo" } });
            }}
          >
            <p className="text-white !text-sm px-4 py-2 border-2 border-white rounded-full">
              Category Name
            </p>
          </div>
          <img
            className="w-full h-full object-cover  "
            src={
              "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
            }
          ></img>
        </div>
        <div className="relative bg-green-500 h-[200px] md:h-[400px] ">
          <div
            className="!absolute top-0 left-0 h-full w-full bg-[#00000050] flex justify-center items-center cursor-pointer"
            onClick={() => {
              navigate("/productList", { state: { category: "categoryone" } });
            }}
          >
            <p className="text-white !text-sm  px-4 py-2 border-2 border-white rounded-full">
              Category Name
            </p>
          </div>
          <img
            className="w-full h-full object-cover"
            src={
              "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
            }
          ></img>
        </div>

        <div className="relative bg-red-600 h-[400px]  md:h-[800px] row-span-2 col-span-2">
          <div
            className="!absolute top-0 left-0 h-full w-full bg-[#00000050] flex justify-center items-center cursor-pointer"
            onClick={() => {
              navigate("/productList", { state: { category: "categoryone" } });
            }}
          >
            <p className="text-white !text-sm  px-4 py-2 border-2 border-white rounded-full">
              Category Name
            </p>
          </div>
          <img
            className="w-full h-full object-cover"
            src={
              "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
            }
          ></img>
        </div>
        <div className="relative bg-red-200 h-[200px] md:h-[400px]  col-span-2">
          <div
            className="!absolute top-0 left-0 h-full w-full bg-[#00000050] flex justify-center items-center cursor-pointer"
            onClick={() => {
              navigate("/productList", { state: { category: "categoryone" } });
            }}
          >
            <p className="text-white !text-sm px-4 py-2 border-2 border-white rounded-full">
              Category Name
            </p>
          </div>
          <img
            className="w-full h-full object-cover"
            src={
              "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
            }
          ></img>
        </div>

        <div className="relative bg-yellow-200 h-[200px] md:h-[400px]  ">
          <div
            className="!absolute top-0 left-0 h-full w-full bg-[#00000050] flex justify-center items-center cursor-pointer"
            onClick={() => {
              navigate("/productList", { state: { category: "categoryone" } });
            }}
          >
            <p className="text-white !text-sm  px-4 py-2 border-2 border-white rounded-full">
              Category Name
            </p>
          </div>
          <img
            className="w-full h-full object-cover "
            src={
              "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
            }
          ></img>
        </div>
        <div className="relative bg-blue-200 h-[200px] md:h-[400px] ">
          <div
            className="!absolute top-0 left-0 h-full w-full bg-[#00000050] flex justify-center items-center cursor-pointer"
            onClick={() => {
              navigate("/productList", { state: { category: "categoryone" } });
            }}
          >
            <p className="text-white !text-sm  px-4 py-2 border-2 border-white rounded-full">
              Category Name
            </p>
          </div>
          <img
            className="w-full h-full object-cover "
            src={
              "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
            }
          ></img>
        </div>
        <div className="relative bg-gray-200 h-[200px] md:h-[400px] ">
          <div
            className="!absolute top-0 left-0 h-full w-full bg-[#00000050] flex justify-center items-center !cursor-pointer"
            onClick={() => {
              navigate("/productList", { state: { category: "categoryone" } });
            }}
          >
            <p className="text-white !text-sm  px-4 py-2 border-2 border-white rounded-full">
              Category Name
            </p>
          </div>
          <img
            className="w-full h-full object-cover "
            src={
              "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
            }
          ></img>
        </div>
        <div className="relative bg-gray-200 h-[200px] md:h-[400px] ">
          <div
            className="!absolute top-0 left-0 h-full w-full bg-[#00000050] flex justify-center items-center cursor-pointer"
            onClick={() => {
              navigate("/productList", { state: { category: "categoryone" } });
            }}
          >
            <p className="text-white !text-sm  px-4 py-2 border-2 border-white rounded-full">
              Category Name
            </p>
          </div>
          <img
            className="w-full h-full object-cover "
            src={
              "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
            }
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Categories;

{
  /* <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 my-8 grid-flow-row-dense">
        <img
          className=" object-cover row-span-2 col-span-2"
          src={
            "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
          }
        ></img>
        <img
          src={
            "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
          }
        ></img>
        <img
          src={
            "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
          }
        ></img>
        <img
          src={
            "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
          }
        ></img>
        <img
          className=""
          src={
            "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
          }
        ></img>
        <img
          src={
            "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
          }
        ></img>
        <img
          className=""
          src={
            "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww"
          }
        ></img>
      </div> */
}
