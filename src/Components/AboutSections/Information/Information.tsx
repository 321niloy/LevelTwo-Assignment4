import information from "../../../../image/Information-removebg-preview.png";
import "./Information.css";

const Information = () => {
  return (
    <>
      <h1 className="title text-red-500">Information About The Company</h1>
      <div className="info-container">
        <div className="info-content">
          <div className="image-container">
            <img src={information} alt="Company Information" />
          </div>
          <div className="text-container">
            <p>
              Welcome to SportsHub, your ultimate destination for top-quality
              sports gear and equipment. We are dedicated to providing athletes
              and fitness enthusiasts with the best products to help them excel.
              From durable basketballs and precision-engineered soccer balls to
              lightweight tennis rackets and versatile yoga mats, we have
              everything you need to lead an active and healthy lifestyle. Join
              us at SportsHub and take your game to the next level!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
