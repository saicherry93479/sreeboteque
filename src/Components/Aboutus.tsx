// @ts-nocheck
const Aboutus = () => {
  return (
    <div className="px-6 lg:px-12  xl:px-52 mx-auto flex flex-col gap-[20px] py-[5rem] lg:flex-row   text-white">
      {" "}
      <img className=" lg:w-[50%]" src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGVwZW5kZW50JTIwd29tZW58ZW58MHx8MHx8fDA%3D" alt=''  />{" "}
      <div className="bg-[#E5611A] p-[20px] md:p-[32px] lg:p-[64px] rounded-[20px] space-y-[20px] lg:w-fit lg:flex lg:flex-col lg:justify-center">
        {" "}
        <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-[40px]">
          About Us
        </h1>{" "}
        <p>
          Welcome to Vaaradhi Farms! I am Nethra and I am extremely passionate
          about healthy living and sustainable food practices.
        </p>{" "}
        <p>
          I am committed to making a positive impact on the world through our
          business. I hope that you'll join us on this journey towards healthy
          living and sustainable food practices.
        </p>{" "}
        <p>
          Thank you for choosing our organic food products, and I look forward
          to serving you soon.
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Aboutus;
