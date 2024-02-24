import React from "react";
import { SplineCanvas } from "../../../";
import "./NavbarLogo.scss";

const NavbarLogo = (props) => {
  const logoStyle = { height: "10vh", width: "10vh" };
  return (
    <div className="text-logo">
      <SplineCanvas
        attributes={{
          className: props.isDarkMode ? "logo" : "logo hidden",
          style: logoStyle,
          scene: "https://prod.spline.design/Cohg1pLxDmZFW8qi/scene.splinecode",
        }}
      />
      <SplineCanvas
        attributes={{
          className: props.isDarkMode ? "logo hidden" : "logo",
          style: logoStyle,
          scene: "https://prod.spline.design/nTLHlilhxM1ub9bt/scene.splinecode",
        }}
      />
    </div>
  );
};

export default NavbarLogo;
