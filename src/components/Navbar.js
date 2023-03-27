import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [state, setstate] = useState("auto");

  const [Imgstate, setImgstate] = useState("/navbarimgcontainer/menu.png");

  const navigate = useNavigate();

  const [InnerNav, setInnerNav] = useState("none");

  const ShowNavBarContent = () => {
    if (Imgstate === "/navbarimgcontainer/menu.png") {
      setImgstate("/navbarimgcontainer/close.png");
      setstate("230px");
      setInnerNav("flex");
    } else {
      setImgstate("/navbarimgcontainer/menu.png");
      setstate("auto");
      setInnerNav("none");
    }
  };

  const showContent1 = () => {
    navigate("/Home");
  };
  const showContent2 = () => {
    navigate("/Maintenance");
  };
  const showContent3 = () => {
    navigate("/HouseHoldThings");
  };
  const showContent4 = () => {
    navigate("/MedicalFacilities");
  };
  const showContent5 = () => {
    navigate("/SignUp");
  };
  return (
    <MainContainer>
      <NavbarMainContainer
        className="NavbarContainerForSwitching"
        style={{ height: state }}
      >
        <NavbarContainerForSwitch>
          <LogoImg className="LogoImgContainer">
            <img
              src="/navbarimgcontainer/website_logo.png"
              alt="HouseHoldWebsite"
            />
          </LogoImg>

          {/* below navbar items will appear to the screen until the media query we have is not fired   */}

          <NavbarContent className="NavbarItemsForLaptopScreen">
            <ul className="Navbar_ul">
              <div className="NavContentContainer">
                <div className="NavContent">
                  <a href="/Home">
                    <li className="Navbar_li">Home</li>
                  </a>
                </div>
              </div>

              <div className="NavContentContainer">
                <div className="NavContent">
                  <a href="/Maintenance">
                    <li className="Navbar_li">Maintainance</li>
                  </a>
                  <div className="InnerOptions">
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">Electrical supplies</li>
                    </a>
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">Water Supplies</li>
                    </a>
                  </div>
                </div>
              </div>

              <div className="NavContentContainer">
                <div className="NavContent">
                  <a href="/HouseHoldThings">
                    <li className="Navbar_li">HouseHold Things</li>
                  </a>
                  <div className="InnerOptions">
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">Kid accessories</li>
                    </a>
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">Cleaning tools</li>
                    </a>
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">Bathroom accessories</li>
                    </a>

                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">Toilet accessories</li>
                    </a>
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">
                        Storage and organinzing
                      </li>
                    </a>
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">Kitchen accessories</li>
                    </a>
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">Home decore</li>
                    </a>
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">
                        Feature and categories
                      </li>
                    </a>
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">Beauty and health</li>
                    </a>
                  </div>
                </div>
              </div>

              <div className="NavContentContainer">
                <div className="NavContent">
                  <a href="/MedicalFacilities">
                    <li className="Navbar_li">Medical Facilities</li>
                  </a>
                  <div className="InnerOptions">
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">Medicines</li>
                    </a>
                    <a href="#" className="InnerOptions_a">
                      <li className="InnerOptions_li">Check Up</li>
                    </a>
                  </div>
                </div>
              </div>

              <div className="NavContentContainer">
                <div className="NavContent">
                  <a href="/SignUp">
                    <li className="Navbar_li">Sign up</li>
                  </a>
                </div>
              </div>
            </ul>
          </NavbarContent>

          {/* below navbar items content will appear to us only till media query is accessed */}

          <NavBarForPhoneWindow className="NavForPhoneWindow">
            <div className="NavBarForPhoneWindowMainContainer">
              <img
                src={Imgstate}
                alt="HouseHoldWebsite"
                onClick={ShowNavBarContent}
              />
            </div>
          </NavBarForPhoneWindow>
        </NavbarContainerForSwitch>

        <NavbarInnerContentContainer
          className="navbar_inner_content_container"
          style={{ display: InnerNav }}
        >
          <div className="Phone_navbar">
            {/* first phone nav item  */}
            <div className="dropdown Drop_down_container">
              <button
                className="btn  Drop_Down_button_container"
                type="button"
                onClick={() => showContent1()}
              >
                Home
              </button>
            </div>

            {/* second phone nav item  */}

            <div className="dropdown Drop_down_container">
              <button
                className="btn dropdown-toggle Drop_Down_button_container"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={showContent2}
              >
                Maintainance
              </button>
              <ul className="dropdown-menu">
                <li >
                  <a className="dropdown-item" href="#">
                    Electrical supplies
                  </a>
                </li>
                <li >
                  <a className="dropdown-item" href="#">
                    Water supplies
                  </a>
                </li>
              </ul>
            </div>

            {/* Third Phone nav item  */}
            <div className="dropdown Drop_down_container">
              <button
                className="btn  dropdown-toggle  Drop_Down_button_container"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={showContent3}
              >
                HouseHold Things
              </button>
              <ul className="dropdown-menu">
                <li >
                  <a className="dropdown-item" href="#">
                    Kid accessories
                  </a>
                </li>
                <li >
                  <a className="dropdown-item" href="#">
                    Cleaning tools
                  </a>
                </li>
                <li >
                  <a className="dropdown-item" href="#">
                    Bathroom accessories
                  </a>
                </li>
                <li >
                  <a className="dropdown-item" href="#">
                    Toilet accessories
                  </a>
                </li>
                <li >
                  <a className="dropdown-item" href="#">
                    Storage and organinzing
                  </a>
                </li>
                <li >
                  <a className="dropdown-item" href="#">
                    Kitchen accessories
                  </a>
                </li>
                <li >
                  <a className="dropdown-item" href="#">
                    Home decore
                  </a>
                </li>
                <li >
                  <a className="dropdown-item" href="#">
                    Feature and categories
                  </a>
                </li>
                <li >
                  <a className="dropdown-item" href="#">
                    Beauty and health
                  </a>
                </li>
              </ul>
            </div>

            {/* phone nav fouth item  */}
            <div className="dropdown Drop_down_container">
              <button
                className="btn  dropdown-toggle Drop_Down_button_container"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={showContent4}
              >
                Medical Facilities
              </button>
              <ul className="dropdown-menu">
                <li >
                  <a className="dropdown-item" href="#">
                    Medicines
                  </a>
                </li>
                <li >
                  <a className="dropdown-item" href="#">
                    Check up
                  </a>
                </li>
              </ul>
            </div>

            {/* phone nav fifth item  */}
            <div className="dropdown Drop_down_container">
              <button
                className="btn  Drop_Down_button_container"
                type="button"
                onClick={showContent5}
              >
                Sign Up
              </button>
            </div>
          </div>
        </NavbarInnerContentContainer>
      </NavbarMainContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  box-shadow: 0 0 10px 3px #472d2d;
  background-color: #472d2d;
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 3;

  @media (min-width: 0px) and (max-width: 936px) {
    .NavbarItemsForLaptopScreen {
      display: none;
    }
    .navbar_inner_content_container {
      display: none;
      margin-top: 10px;
    }

    .LogoImgContainer {
      height: 48px;
      width: 48px;
      img {
        height: 100%;
      }
    }
    .NavForPhoneWindow {
      height: 44px;
      width: 44px;
      .NavBarForPhoneWindowMainContainer {
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
  }
  @media (min-width: 937px) {
    .NavForPhoneWindow {
      display: none;
    }
    .navbar_inner_content_container {
      display: none;
    }
  }
`;

const NavbarMainContainer = styled.nav`
  width: 100%;
  transition: all 0.3s ease-in-out;
`;

const NavbarContainerForSwitch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled.div`
  width: 6%;
  padding: 4px;
  margin: 4px;
  img {
    width: 100%;
    filter: invert(100%);
  }
`;

const NavbarContent = styled.div`
  width: 100%;

  .Navbar_ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;

    .NavContentContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3px;
      margin: 5px;
      width: 100%;
      box-sizing: border-box;

      .NavContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;

        a {
          text-decoration: none;
          color: #472d2d;
          font-size: 1.2rem;
          box-sizing: border-box;
          width: 100%;
          letter-spacing: 0.3px;

          .Navbar_li {
            font-family: "Alkatra", cursive;
            cursor: pointer;
            border-radius: 4px;
            text-align: center;
            background-color: white;
            width: 100%;
            box-sizing: border-box;
          }
        }

        /* css for inner option */

        .InnerOptions {
          position: absolute;
          top: 59.8%;
          width: 17%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          color: #472d2d;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
            rgba(0, 0, 0, 0.1) 0px 8px 16px;
          border-radius: 5px;
          background-color: white;
          display: none;
          z-index: 3;

          .InnerOptions_a {
            width: 100%;
            box-sizing: border-box;

            .InnerOptions_li {
              width: 100%;
              box-sizing: border-box;
              font-family: "Alkatra", cursive;
              font-size: 1.1rem;
              padding: 4px;

              &:hover {
                background-color: #553939;
                border-radius: 3px;
                color: white;
              }
            }
          }
        }
      }

      .NavContent:hover {
        .InnerOptions {
          display: flex;
        }
        .Navbar_li {
          background-color: #a77979;
          color: white;
        }
      }
    }
  }
`;

const NavBarForPhoneWindow = styled.div`
  width: 6%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 7px;
  padding: 2px;

  .NavBarForPhoneWindowMainContainer {
    width: 100%;

    img {
      width: 100%;
      filter: invert(100%);
    }
  }
`;

// css for navbar for inneroption content of the nav option

const NavbarInnerContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .Phone_navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    border: none;
    .Drop_down_container {
      margin: 3px;
      display: flex;
      align-items: center;
      background-color: white;
      border-radius: 4px;
      font-size: 1.18rem;
      color: #472d2d;
      border: none;
      font-family: "Alkatra", cursive;

      .Drop_Down_button_container {
        border-radius: 4px;

        .dropdown_li {
          border: 2px solid green;
        }

        &:hover {
          background-color: #a77979;
          color: white;
          border: 1px solid #a77979;
        }
      }
    }
  }
`;
