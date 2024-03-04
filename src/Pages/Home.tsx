// @ts-nocheck
import HeroPageImages from "../Components/HeroPageImages";
import HeroNext from "../Components/HeroNext";
import ContactUs from "../Components/ContactUs";
import Aboutus from "../Components/Aboutus";
import Footer from "../Components/Footer";
import Categories from "../Components/Categories";
import NewArrivals from "../Components/NewArrivals";

const Home = () => {
  return (
    <div>
      <div className="w-full   px-6 lg:px-12  xl:px-52 py-3 flex flex-col-reverse lg:flex-row  gap-6  bg-[#f0fbff] pb-24">
        <div className="flex flex-col justify-center w-full justify-center   ">
          <p className=" text-4xl  font-bold lg:text-5xl xl:text-7xl text-center lg:text-left">
            Tailored Luxury Crafted Just for You.
          </p>
          <p className="mt-3 text-sm text-gray-500 md:text-xl lg:text-lg text-center lg:text-left">
          Where Luxury Meets Individuality—Your Style Perfected.
          </p>
          <a
            href="/productlist"
            className="bg-[#E5611A] w-fit break-keep  mx-auto lg:ml-0 px-8 cursor-pointer py-2 !text-sm md:text-md text-white mt-3 rounded-full "
          >
            Shop Now
          </a>
        </div>
        <div className="">
          <HeroPageImages></HeroPageImages>
        </div>
      </div>
      {/* next page */}
      <Categories></Categories>
      <NewArrivals></NewArrivals>
      <HeroNext></HeroNext>
      <Aboutus></Aboutus>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
