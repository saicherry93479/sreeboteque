import React from "react";

const SectionHeader = ({ children }) => (
  <div className="self-start mt-5 ml-36 text-2xl font-bold tracking-tight whitespace-nowrap text-neutral-900 max-md:ml-2.5">
    {children}
  </div>
);

const BookCard = ({ src, alt, title }) => (
  <div className="flex flex-col flex-1 pb-9">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="self-center w-44 aspect-square"
    />
    <div className="mt-3">{title}</div>
  </div>
);

const BookClub = () => {
  const previouslyReadBooks = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/15f922fafbbef64d1a277b7e3545f9c7216089e17897aa1bdd348b26e33528bf?apiKey=494978ce20ef40d1ade6deef691a35d7&",
      alt: "Inspired: How to Create Products Customers Love book cover",
      title: "Inspired: How to Create Products Customers Love",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/64b4045a00716ec0e7c09caa5e2e778a09a2808051547f877977ad001cbc9f6b?apiKey=494978ce20ef40d1ade6deef691a35d7&",
      alt: "The Design of Everyday Things book cover",
      title: "The Design of Everyday Things",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/09d70eeb7b02bdd803c9ba933526c5cdccf1460b2ba64e23aae0bc4a27df84b2?apiKey=494978ce20ef40d1ade6deef691a35d7&",
      alt: "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days book cover",
      title:
        "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/04388510a96fee3569aeec4de4c9c7232fb6b44a2e24ed99904e6d11c4209cad?apiKey=494978ce20ef40d1ade6deef691a35d7&",
      alt: "Hooked: How to Build Habit-Forming Products book cover",
      title: "Hooked: How to Build Habit-Forming Products",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c91f9274c94076cd05c76effa78479685bdc8c52564a23db2e07f2bbb1f80e3c?apiKey=494978ce20ef40d1ade6deef691a35d7&",
      alt: "Lean UX: Designing Great Products with Agile Teams book cover",
      title: "Lean UX: Designing Great Products with Agile Teams",
    },
  ];

  return (
    <main className="flex flex-col pb-8 w-full bg-white max-md:max-w-full">
      <header className="flex gap-0 justify-between px-10 py-3.5 whitespace-nowrap border-b border-solid border-b-gray-200 max:flex-wrap max-md:px-5 max-md:max-w-full">
        <nav className="flex gap-4 my-auto text-lg font-bold tracking-tight text-neutral-900">
          <div className="my-auto w-4 h-4" />
          <div className="grow">Designers Book Club</div>
          <div className="flex gap-5 justify-between pl-20 text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between py-2.5 font-medium text-neutral-900">
              <button>Books</button>
              <button>Events</button>
              <button>Members</button>
              <button>Resources</button>
            </div>
            <div className="flex gap-2 justify-between font-bold tracking-wide">
              <button className="flex flex-col flex-1 justify-center px-4 py-2.5 text-white bg-orange-600 rounded-xl">
                <div className="justify-center bg-orange-600 aspect-[2.52]">
                  Sign up
                </div>
              </button>
              <button className="flex flex-col flex-1 justify-center px-5 py-2.5 rounded-xl bg-stone-100 text-neutral-900 max-md:px-5">
                <div className="justify-center aspect-[2] bg-stone-100">
                  Log in
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default BookClub;
