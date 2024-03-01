// @ts-nocheck

const ContactUs = () => {
  return (
    <div className="containerP w-screen text-black bg-[#f0fbff] !py-[5rem] !pt-[4rem] " id="contactus">
      <div className="relative">
        <div className="containerP text-center flex flex-col items-center mb-6 md:my-6 lg:my-10">
          <h2 className=" mx-auto mb-[20px] max-w-6xl text-center text-xl font-bold md:text-5xl text-black lg:text-7xl">
            Contact Us
          </h2>
          <p className="text-xs lg:text-[16px]  tracking-wide text-gray-900">
            We're here for you: Connect with us for any questions or concerns.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-3xl border-gray-200 dark:border-blue-200 border rounded-lg p-5 lg:p-10">
          <p className="text-xs  tracking-wide text-gray-500 lg:text-[16px]">
            For technical questions, please post your questions on our{" "}
            <a href="">forum</a> where you can get help from fellow students.
          </p>
          
          <form
            className="mt-10 max-w-prose"
            action="https://formspree.io/f/mlezrkze"
            method="POST"
          >
            <p>
              <label className="text-xs lg:text-[16px]">Your email: </label>
              <input
                className="input"
                type="email"
                maxLength={100}
                name="_replyto"
              />
            </p>
            <p>
              <label className="text-xs lg:text-[16px]">Your message: </label>
              <textarea
                className="input !mb-0"
                maxLength={500}
                name="message"
                rows={5}
                defaultValue={""}
              />
            </p>
            <button className="bg-[#E5611A] w-full  mx-auto lg:ml-0 px-8 cursor-pointer py-3 text-sm md:text-[16px] text-white mt-3 rounded-full  ">
            send
          </button>
          <p className="text-center my-2 ">or</p>
          <div className="bg-[#25d366] rounded-full  text-sm md:text-[16px] py-3 flex justify-center items-center gap-4  text-white cursor-pointer">
            contact us on 
          <i className="fa fa-whatsapp text-[20px] lg:text-[25px] text-white " />
          </div>
          
          </form>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
