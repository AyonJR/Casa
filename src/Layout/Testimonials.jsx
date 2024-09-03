import React, { useState } from "react";

const Testimonials = () => {
  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?",
      name: "Mia Brown",
      role: "Marketer",
      image: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 5,
    },
    {
      text: "Another review text goes here. This is an example of a different review. It will span the full width and maintain the layout.",
      name: "John Doe",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4,
    },
    // Add more reviews as needed
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const handlePrev = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-customGreen">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-black capitalize lg:text-3xl">
          What <span className="text-white">clients</span> are saying
        </h1>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-white rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-white rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
        </div>

        <div className="flex items-start max-w-6xl mx-auto mt-16">
          <button
            title="left arrow"
            onClick={handlePrev}
            className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 lg:block hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-center text-black lg:mx-8 w-full">
              {reviews[currentReview].text}
            </p>

            <div className="flex flex-col items-center justify-center mt-8">
              <img
                className="object-cover rounded-full w-14 h-14"
                src={reviews[currentReview].image}
                alt={reviews[currentReview].name}
              />

              <div className="mt-4 text-center">
                <h1 className="font-semibold text-gray-800">
                  {reviews[currentReview].name}
                </h1>
                <span className="text-sm text-black">
                  {reviews[currentReview].role}
                </span>
              </div>
              <div className="rating mt-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name={`rating-${currentReview}`}
                    className={`mask mask-star-2 ${
                      index < reviews[currentReview].rating
                        ? "bg-orange-400"
                        : ""
                    }`}
                    defaultChecked={index < reviews[currentReview].rating}
                    readOnly
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            title="right arrow"
            onClick={handleNext}
            className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 lg:block hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
