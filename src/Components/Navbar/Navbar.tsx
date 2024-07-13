/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from "react";
import "./Navbar.css"; // Import your CSS file
import { Link } from "react-router-dom";

interface NavbarState {
  showMenu: boolean;
}

class Navbar extends Component<any, NavbarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showMenu: false, // Initial state to control menu visibility
    };
  }

  // Function to toggle menu visibility
  toggleMenu = () => {
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  };

  render() {
    return (
      <div className="bg-black z-0">
        <nav>
          <Link className="menu-icon text-2xl md:text-xl sm:text-xs" to="/">
            <span className="text-red-500">Sports</span>
            <span className="text-white">Hub</span>
          </Link>
          <ol className={`main-menu ${this.state.showMenu ? "show-menu" : ""}`}>
            <li>
              <Link to="/" className="main-item">
                <span className="home"></span>
              </Link>
            </li>
            <li className="main-item">
              <Link to="/about" className="main-item">
                <span className="about"></span>
              </Link>
            </li>
            <li className="main-item">
              <Link to="/allProducts" className="main-item">
                <span className="products"></span>
              </Link>
              <ol className="sub-menu">
                <li className="sub-item item-left">
                  <Link to="/genarate">
                    <span className="small"></span>
                  </Link>
                </li>
                <li className="sub-item item-left">
                  <Link to="/kaka">
                    <span className="standart"></span>
                  </Link>
                </li>
                <li className="sub-item item-left">
                  <Link to="big">
                    <span className="big"></span>
                  </Link>
                </li>
              </ol>
            </li>
            <li className="main-item">
              <Link to="/manage-products" className="main-item">
                <span className="manage-products"></span>
              </Link>
              <ol className="sub-menu">
                <li className="sub-item item-right">
                  <Link to="/lala">
                    <span className="premium"></span>
                  </Link>
                </li>
                <li className="sub-item item-right">
                  <Link to="/ddd">
                    <span className="combo"></span>
                  </Link>
                </li>
                <li className="sub-item item-right">
                  <Link to="/hmmm">
                    <span className="special"></span>
                  </Link>
                </li>
              </ol>
            </li>
            <li>
              <Link to="/carts" className="main-item">
                <span className="contact"></span>
              </Link>
            </li>
          </ol>
          <button className="menu-toggle text-white" onClick={this.toggleMenu}>
            {this.state.showMenu ? "Colse" : "Menu"}
          </button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
