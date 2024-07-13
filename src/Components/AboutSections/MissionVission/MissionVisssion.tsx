import Mission from "../../../../image/VisionMission-removebg-preview.png";

const MissionVission = () => {
  return (
    <>
      <h1 className="text-center text-5xl font-serif text-red-500 mt-32 mb-10">
        Mission and Vission
      </h1>
      <div className="lg:flex justify-center">
        <div className="lg:flex  justify-center gap-20  lg:w-[1030px] items-center">
          <div className="lg:w-[50%]">
            <h1 className="font-bold mb-5">Mission Statement</h1>
            <p>
              At SportsHub, our mission is to empower athletes and fitness
              enthusiasts by providing high-quality, reliable sports equipment
              that enhances performance and encourages a healthy, active
              lifestyle. We strive to inspire passion for sports and wellness
              through our commitment to excellence, innovation, and customer
              satisfaction.
            </p>
            <h1 className="font-bold mb-5 mt-5">Vision Statement</h1>
            <p>
              Our vision is to become the leading provider of sports gear and
              equipment globally, recognized for our dedication to quality,
              innovation, and customer-centric service. We aim to foster a
              community where athletes of all levels can achieve their fullest
              potential and enjoy the benefits of a healthy, active lifestyle.
            </p>
          </div>
          <div className="lg:w-[50%]">
            <img src={Mission} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionVission;
