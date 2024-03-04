// @ts-nocheck
import { ref, set, getDatabase } from "firebase/database";
import React, { useState } from "react";
import { database } from "../Firebase";
import {
  Firestore,
  Timestamp,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import firebase from "firebase/compat/app";

const AdminAddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [images, setImages] = useState<any>([]);
  const [modelImage, setModelImage] = useState("");
  const [showModel, setShowModel] = useState(false);

  async function writeUserData(
    name: any,
    description: any,
    category: any,
    ageGroup: string,
    images: any
  ) {
    console.log("came in writeuserdata ", "\n", serverTimestamp());
    const docRef = await addDoc(collection(database, "products"), {
      name: name,
      description: description,
      category: category,
      ageGroup: ageGroup,
      images: images,
      date: serverTimestamp(),
      //   firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);
  }

  const uploadData = async () => {
    if (
      name === "" ||
      description === "" ||
      category === "" ||
      ageGroup === "" ||
      images.length === 0 ||
      name.length < 6 ||
      description.length < 50 ||
      category.length < 6 ||
      ageGroup.length < 4
    ) {
      console.log("error in validation");
      return;
    }
    try {
      console.log(
        name,
        "\n",
        description,
        "\n",
        category,
        "\n",
        ageGroup,
        "\n",
        images
      );
      await writeUserData(name, description, category, ageGroup, images);
      setName("");
      setDescription("");
      setCategory("");
      setAgeGroup("");
      setImages([]);
    } catch (e) {
      console.log("error in uploading to database ", e);
    }
  };

  const addModelImage = () => {
    setImages((p: any) => [...p, modelImage]);
    setShowModel(false);
    setModelImage("");
  };
  return (
    <div className=" p-6">
      {/* This is an example component */}
      <div className=" mx-auto relative ">
        {/* Modal toggle */}

        {/* Main modal */}
        {showModel && (
          <div className=" overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 justify-center items-center bg-[#00000090]  w-full h-full flex justify-center items-center  ">
            <div className="relative w-full max-w-md px-4 h-full md:h-auto mt-[200px] lg:mt-[0px]">
              {/* Modal content */}

              <div className=" bg-white rounded-lg shadow relative dark:bg-gray-700">
                <div
                  className="flex justify-end p-2 "
                  onClick={() => setShowModel(false)}
                >
                  <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Please Upload Image to drive and Enter here
                  </h3>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                    >
                      Image Url
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Image Url Goes Here"
                      required={true}
                      value={modelImage}
                      onChange={(e) => setModelImage(e.target.value)}
                    />
                  </div>
                  <img
                    src={modelImage}
                    alt="Enter a Image Url"
                    className="w-full h-[300px] object-cover"
                  ></img>

                  <button
                    onClick={addModelImage}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6 w-full">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 text-black"
        >
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-[90vw] lg:w-[600px]  "
          placeholder="Dress Name Goes Here"
          required={true}
        />
      </div>
      <div className="mb-6 w-full">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 text-black"
        >
          Category
        </label>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-[90vw] lg:w-[600px]  "
          placeholder="Category Goes Here"
          required={true}
        />
      </div>
      <div className="mb-6 w-full">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 text-black"
        >
          Age Group
        </label>
        <input
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-[90vw] lg:w-[600px]  "
          placeholder="Age Group Goes Here"
          required={true}
        />
      </div>

      <div className="mb-6 w-full">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 text-black"
        >
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-[90vw] lg:w-[600px]  "
          placeholder="Dress Name Goes Here"
          required={true}
          rows={5}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 text-black"
        >
          Images
        </label>
        <div className="flex !overflow-x-scroll gap-2 mb-4  w-[90vw] lg:w-[600px]">
          {images.map(
            (
              image: string | undefined,
              index: React.Key | null | undefined
            ) => (
              <img
                className="min-w-[200px] min-h-[200px] object-cover "
                key={index}
                src={image}
              ></img>
            )
          )}
        </div>
        <i className="fa-solid fa-circle-plus"></i>
        {images.length < 3 && (
          <span onClick={() => setShowModel(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 cursor-pointer hover:fill-blue-600 "
            >
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
          </span>
        )}
        <button
          onClick={uploadData}
          className="mt-[30px] w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AdminAddProduct;
