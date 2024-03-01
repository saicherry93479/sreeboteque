// @ts-nocheck
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { database } from "../Firebase";

// const data = [
//   {
//     name: "name one ",
//     description: "description one",
//     category: "category one",
//     images: [
//       "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww",
//       "https://images.unsplash.com/photo-1583391733981-8b530b760347?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbHdhciUyMGthbWVlenxlbnwwfHwwfHx8MA%3D%3D",
//     ],
//     age: "10-20",
//   },
// ];

const AdminProducts = () => {
  const [data, setData] = useState<any>([]);
  const [isReloaded, setIsReloaded] = useState<any>(
    localStorage.getItem("isReloaded")
  );

  useLayoutEffect(() => {
    // Check if the page needs to be reloaded

    console.log("came ", isReloaded);

    if (isReloaded === "false" || isReloaded === null) {
      console.log("true updated");
      // Set the flag in localStorage to prevent further reloads
      localStorage.setItem("isReloaded", "true");
      setIsReloaded("true");
      // Reload the page after a brief delay
      window.location.reload();
      // Adjust the delay if needed
    }
    return () => {
      console.log("removed");
      localStorage.setItem("isReloaded", "false");
    };
  }, []);
  useEffect(() => {
    getDatafromDB();
  }, []);


  const getDatafromDB = async () => {
    const q=query(collection(database, "products"),orderBy("date",'desc'))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id  } => ${doc.data().date} `, doc.data().name);
    });
    setData(querySnapshot.docs.map((document) => document.data()));
    $(document).ready(function () {
      var table = $("#example")
        .DataTable({
          responsive: true,
        })
        .columns.adjust()
        .responsive.recalc();
    });
  };
  return (
    <div className="  !z-1  mx-auto px-2">
      {
        <div
          id="recipients"
          className="md:p-8 mt-6 lg:mt-0 rounded shadow bg-white"
        >
          <table
            id="example"
            className="stripe hover"
            style={{ width: "100%", paddingTop: "1em", paddingBottom: "1em" }}
          >
            <thead>
              <tr>
                <th data-priority={1}>Name</th>
                {/* <th data-priority={2}>Description</th> */}
                <th data-priority={3}>Category</th>
                <th data-priority={4}>AgeGroup</th>
                <th data-priority={5}>Image</th>
                <th data-priority={6}></th>
                <th data-priority={7}></th>
                <th data-priority={8}></th>
              </tr>
            </thead>
            <tbody>
              {data.map((d: any) => {
                //   const d = da.data()
                return (
                  <tr>
                    <td>{d.name}</td>
                    {/* <td>
                      <textarea
                        value={d.description}
                        cols={30}
                        rows={6}
                      ></textarea>
                    </td> */}
                    <td> {d.category}</td>
                    <td>{d.ageGroup} </td>
                    <td>
                      <div className="flex overflow-x-scroll gap-2  h-[200px] w-[200px]">
                        {d.images.map((imgurl) => (
                          <img
                            className="h-full w-full object-cover"
                            src={imgurl}
                          ></img>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-1 w-fit bg-green-500 text-white rounded-md cursor-pointer">
                        View
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-1 bg-blue-500 !w-fit text-white rounded-md cursor-pointer">
                        Edit
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-1 w-fit bg-red-500 text-white rounded-md cursor-pointer">
                        Delete
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default AdminProducts;
