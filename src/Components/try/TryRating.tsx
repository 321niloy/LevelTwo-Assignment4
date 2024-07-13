/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const TryRating = ({ star }: any) => {
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index} className="icon">
        {star > index + 1 ? (
          <FaStar />
        ) : star > number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <>
      <div className="flex gap-2 text-yellow-500">{ratingStars}</div>
    </>
  );
};

export default TryRating;
