import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassLocation,
  faPhoneVolume,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="footer-cta py-5">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <div className="single-cta flex items-center">
                  <FontAwesomeIcon
                    className="text-red-400 text-2xl"
                    icon={faMagnifyingGlassLocation}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Find us</h4>
                    <span>1010 Avenue, sw 54321, Mirpur</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <div className="single-cta flex items-center">
                  <FontAwesomeIcon
                    className="text-red-400 text-2xl"
                    icon={faPhoneVolume}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Call us</h4>
                    <span>9876543210</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <div className="single-cta flex items-center">
                  <FontAwesomeIcon
                    className="text-red-400 text-2xl"
                    icon={faEnvelopeOpenText}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content py-5">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                <div className="footer-widget">
                  <div className="footer-logo ">
                    <Link to="/" className=" text-4xl md:text-3xl sm:text-2xl">
                      <span className="text-red-500">Sports</span>
                      <span className="text-white">Hub</span>
                    </Link>
                  </div>
                  <div className="footer-text mb-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <div className="flex">
                      <Link to="#" className="">
                        <img
                          className="w-11"
                          src="https://i.ibb.co/4trcWrP/twitter-removebg-preview.png"
                        ></img>
                      </Link>
                      <Link to="#" className="ml-2">
                        <img
                          className="w-11"
                          src="https://i.ibb.co/yhL3LVg/facebook-removebg-preview.png"
                        ></img>
                      </Link>
                      <Link to="#" className="ml-2 rounded-full">
                        <img
                          className="w-11 rounded-full"
                          src="https://i.ibb.co/Cbqdbps/m2i8m2d3i8i8-A0m2-removebg-preview.png"
                        ></img>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                <div className="footer-widget">
                  <div className="footer-widget-heading mb-4">
                    <h3 className="text-lg font-semibold">Useful Links</h3>
                  </div>
                  <ul className="flex flex-wrap">
                    <li className="w-1/2 mb-2">
                      <Link to="/" className="text-gray-400 hover:text-white">
                        Home
                      </Link>
                    </li>
                    <li className="w-1/2 mb-2">
                      <Link
                        to="/about"
                        className="text-gray-400 hover:text-white"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="w-1/2 mb-2">
                      <Link
                        to="/allProducts"
                        className="text-gray-400 hover:text-white"
                      >
                        products
                      </Link>
                    </li>
                    <li className="w-1/2 mb-2">
                      <Link
                        to="/manage-products"
                        className="text-gray-400 hover:text-white"
                      >
                        Manage Products
                      </Link>
                    </li>
                    <li className="w-1/2 mb-2">
                      <Link
                        to="/Carts"
                        className="text-gray-400 hover:text-white"
                      >
                        Carts
                      </Link>
                    </li>
                    <li className="w-1/2 mb-2">
                      <Link to="#" className="text-gray-400 hover:text-white">
                        Lorem 1
                      </Link>
                    </li>
                    <li className="w-1/2 mb-2">
                      <Link to="#" className="text-gray-400 hover:text-white">
                        Lorem 2
                      </Link>
                    </li>
                    <li className="w-1/2 mb-2">
                      <Link to="#" className="text-gray-400 hover:text-white">
                        Lorem 3
                      </Link>
                    </li>
                    <li className="w-1/2 mb-2">
                      <Link to="#" className="text-gray-400 hover:text-white">
                        Lorem 4
                      </Link>
                    </li>
                    <li className="w-1/2 mb-2">
                      <Link to="#" className="text-gray-400 hover:text-white">
                        Lorem 5
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                <div className="footer-widget">
                  <div className="footer-widget-heading mb-4">
                    <h3 className="text-lg font-semibold">Subscribe</h3>
                  </div>
                  <div className="footer-text mb-4">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#" className="flex">
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="w-full p-2 rounded-l-lg focus:outline-none"
                      />
                      <button className="p-2 bg-red-500 text-white rounded-r-lg">
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full lg:w-1/2 text-center lg:text-left mb-2 lg:mb-0">
                <p className="text-gray-400">
                  Copyright &copy; 2018, All Right Reserved{" "}
                  <Link
                    to="https://codepen.io/anupkumar92/"
                    className="text-white hover:underline"
                  >
                    @@@###
                  </Link>
                </p>
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-right">
                <ul className="flex justify-center lg:justify-end space-x-4">
                  <li>
                    <Link to="/" className="text-gray-400 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-400 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/allProducts"
                      className="text-gray-400 hover:text-white"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white">
                      Lorem
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white">
                      Lorem
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
