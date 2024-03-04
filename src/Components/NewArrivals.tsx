// @ts-nocheck

import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../Firebase";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getDatafromDB();
  }, []);

  const getDatafromDB = async () => {
    const q = query(
      collection(database, "products"),
      orderBy("date", "desc"),
      limit(6)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().date} `, doc.data().name);
    });
    setData(
      querySnapshot.docs.map((document) => {
        return { ...document.data(), id: document?.id };
      })
    );
  };
  return (
    <div className=" px-6 lg:px-12  xl:px-52   py-[12px]  md:py-[24px] lg:py-[24px] pt-[5rem]">
      {" "}
      <p className="my-[15px] text-[32px] font-bold md:text-[40px]">
        New Arrivals
      </p>{" "}
      <div className="flex w-full overflow-x-scroll  sm:grid z-1 sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.length > 0 &&
          data.map((d) => (
            <div
              className="min-w-[80%] sm:w-auto group relative cursor-pointer bg-[#1c1c22]  rounded-md p-4 "
              onClick={() => {
                navigate("/product", { state: d });
              }}
            >
              <div className="relative overflow-hidden rounded-t-md">
                <div>
                  <img
                    src={d.images[0]}
                    alt="Product 1"
                    className="w-full h-[300px] sm:h-[500px] md:h-[430px] lg:h-[300px] transform object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <button
                  id="addbutton"
                  className="addButton absolute bottom-2 hover:bg-[#3A1E8C] right-2 hidden  rounded-full bg-[#392A48] p-[10px] px-[20px]  text-white transition transition-all duration-300  group-hover:opacity-100 md:block md:opacity-0"
                >
                  Quick Add
                </button>
                <button className="absolute bottom-2 right-2 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-white md:hidden ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#392A48"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 text-center text-lg font-semibold text-white">
                {d.name}
              </h3>
              <p className="text-center text-gray-600">{d.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewArrivals;
