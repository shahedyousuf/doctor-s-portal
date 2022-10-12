import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people1.png";
import people3 from "../../assets/images/people1.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Harry",
      review: "Great experience",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Harry",
      review: "Great experience",
      location: "California",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Harry",
      review: "Great experience",
      location: "California",
      img: people3,
    },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl text-primary font-bold uppercase">
            Testimonials
          </h3>
          <h2 className="text-2xl">What our patients say</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
