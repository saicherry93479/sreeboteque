// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import AdminProducts from "../Components/AdminProducts";
import AdminAddProduct from "../Components/AdminAddProduct";
import AdminMails from "../Components/AdminMails";
import DataTables from "datatables.net";


const AdminPage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document?.querySelector(".footer")?.classList.add("!hidden");

    document?.querySelector(".navbar")?.classList.add("!hidden");
  }, []);
  function dropdown() {
    document?.querySelector("#submenu")?.classList.toggle("hidden");
    document?.querySelector("#arrow")?.classList.toggle("rotate-0");
  }
  dropdown();

  function openSidebar() {
    document.querySelector(".sidebar")?.classList.toggle("hidden");
  }
  return (
    <>
      <nav
        id="header"
        className="w-screen z-0 top-0 py-1 bg-[#f0fbff] relative"
      >
        <div className="!w-full container  px-6 py-3 mx-auto mt-0 flex flex-wrap items-center justify-between  ">
          <span
            className=" lg:hidden text-black text-4xl top-5 left-4 cursor-pointer"
            onClick={openSidebar}
          >
            <i className="bi-filter-left px-2  rounded-md" />
          </span>
          <div className="order-1 md:order-2 mx-auto ">
            <a
              className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              href="/"
            >
              <svg
                className="fill-current text-gray-800 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
              </svg>
              SAI BOTEQUE
            </a>
          </div>
        </div>
      </nav>
      <div className="flex relative ">
        <div className="">
          <div className="sidebar absolute !h-[100vh] !z-20 lg:min-h-[95vh]  lg:relative   top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ">
            <div className="text-gray-100 text-xl">
              <div className="p-2.5 mt-1 flex items-center">
                <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" />
                <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                  Menu
                </h1>
                <i
                  className="bi bi-x cursor-pointer ml-28 lg:hidden"
                  onClick={openSidebar}
                />
              </div>
              <div className="my-2 bg-gray-600 h-[1px]" />
            </div>

            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white ${
                current === 0 ? "bg-blue-600" : ""
              }`}
              onClick={() => setCurrent(0)}
            >
              <i className="bi bi-house-door-fill" />
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Home
              </span>
            </div>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white ${
                current === 1 ? "bg-blue-600" : ""
              }`}
              onClick={() => setCurrent(1)}
            >
              <i className="bi bi-bookmark-fill" />
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Add Product
              </span>
            </div>
            <div className="my-4 bg-gray-600 h-[1px]" />
            <div
              className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
              onClick={dropdown}
            >
              <i className="bi bi-chat-left-text-fill" />
              <div className="flex justify-between w-full items-center">
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Chatbox
                </span>
                <span className="text-sm rotate-180" id="arrow">
                  <i className="bi bi-chevron-down" />
                </span>
              </div>
            </div>
            <div
              className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
              id="submenu"
            >
              <h1
                className={`cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 ${
                  current === 2 ? "bg-blue-600" : ""
                }`}
                onClick={() => setCurrent(2)}
              >
                Mails
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:p-12">
          {current === 0 && <AdminProducts></AdminProducts>}
          {current === 1 && <AdminAddProduct></AdminAddProduct>}
          {current === 2 && <AdminMails></AdminMails>}
         
        </div>
      </div>
    </>
  );
};

export default AdminPage;
