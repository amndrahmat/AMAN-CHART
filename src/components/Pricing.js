import React from "react";
import { Button } from "./Button";
import "./Pricing.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Premium</h3>
                <h4>$0.00</h4>
                <p>1 month</p>
                <ul className="pricing__container-features">
                  <li>10 Free Access Design</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Get Started
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Pro</h3>
                <h4>$9.99</h4>
                <p>3 month</p>
                <ul className="pricing__container-features">
                  <li>All Free Access Design</li>
                  <li>10% Cash Back Money</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Get Started
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <GiCrystalize />
                </div>
                <h3>Pro Plus</h3>
                <h4>$59.99</h4>
                <p>12 month</p>
                <ul className="pricing__container-features">
                  <li>All Free Access Design</li>
                  <li>20% Cash Back Money</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Get Started
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
