import "./Acontact.css";
import contacInformation from "../../../../image/ContactInformation-removebg-preview.png";

const ContactInformation = () => {
  return (
    <>
      <h1 className="text-center text-5xl font-serif text-red-500 mt-32 mb-10">
        Contact Information
      </h1>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-image-container">
            <img
              src={contacInformation}
              alt="Contact Us"
              className="contact-image"
            />
          </div>
          <div className="contact-details">
            <p className="text-white">
              We'd love to hear from you! Whether you have a question about our
              products, need assistance, or just want to talk about sports, our
              team is ready to answer all your questions.
            </p>
            <p className="text-white">
              <strong>Email:</strong> support@sportshub.com
            </p>
            <p className="text-white">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-white">
              <strong>Address:</strong> 123 SportsHub Lane, Fitness City,
              ActiveState 45678
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
