// @ts-ignore
import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../Firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { MultiSelect, MultiSelectProps } from "@uc-react-ui/multiselect";

const ProductList = () => {
  const location = useLocation();
  const categoryFromHome = location.state;
  const [data, setData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);
  const navigate = useNavigate();
  const [value, setValue] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [categoryData, setCategoryData] = useState([]);

  console.log("categoryFromHome ", categoryFromHome);
  useEffect(() => {
    getDatafromDB();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      // [...new Set(data.map(item :any=> item.category))];
      console.log([
        ...new Set(
          data.map((item: { category: any }) => {
            return { label: item.category };
          })
        ),
      ]);
      setCategories([
        ...new Set(
          data.map((item: { category: any }) => {
            return { label: item.category };
          })
        ),
      ]);
      setCategoryData(data);
    }
  }, [data]);

  useEffect(() => {
    if (categoryFromHome?.category.length > 0) {
      let cats = getCategoriesValues();
      console.log("in from home ", cats, " value ", categoryFromHome.category);

      if (cats.includes(categoryFromHome.category)) {
        console.log('yes it is there')
        setValue((p:any)=>[...p,categoryFromHome.category]);
      }
    }
  }, [categoryFromHome,categories]);

  useEffect(() => {
    console.log("categories changed ", value);
    if (value.length === 0) {
      console.log("length is 0");
      setCategoryData(data);
    } else {
      const cats = getCategoriesValues();
      console.log("cats is ", cats);
      setCategoryData(
        data.filter((item: { category: string }) =>
          value.includes(item.category)
        )
      );
    }
  }, [value]);

  const getCategoriesValues = () => {
    let ca = [];
    for (var key in categories) {
      if (categories.hasOwnProperty(key)) {
        var value = categories[key].label;
        console.log("value is ", value, " key ", key);
        ca.push(value);
      }
    }
    return ca;
  };

  const getDatafromDB = async () => {
    const querySnapshot = await getDocs(collection(database, "products"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    setData(
      querySnapshot.docs.map((document: { data: any }) => document.data())
    );
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  console.log("currrent ", currentRecords);
  const nPages = Math.ceil(data.length / recordsPerPage);

  const props: MultiSelectProps = {
    label: "Select Category",
    name: "Select Category",
    size: "small",
    optionList: categories,
    placeholder: "Select Value",
    value: value,
    valueChange: setValue,
  };

  return (
    <div className=" relative  w-full flex-col lg:flex-row w-full px-6 lg:px-12  xl:px-52   py-[24px]  md:py-[24px] lg:py-[24px] bg-white text-white text-[#392a48] mb-[60px] lg:mb-[80px]">
      <div className=" relative  !text-black w-fit !w-full lg:min-w-[600px] lg:max-w-[600px] z-10 ml-auto   ">
        <MultiSelect {...props} />
      </div>
      <div className=" relative grid !z-0  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6 lg:my-12 gap-y-12">
        {categoryData.length > 0 &&
          categoryData.map((d: any) => (
            <div
              onClick={() => {
                navigate("/product", { state: d });
              }}
              className=" w-auto group relative cursor-pointer   rounded-md  "
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
              <h3 className="mt-4  text-lg font-semibold text-black">
                {d.name}
              </h3>
            </div>
          ))}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
