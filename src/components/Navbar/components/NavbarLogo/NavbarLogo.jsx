import { lazy, Suspense, useState, useEffect, useRef } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

import "./NavbarLogo.scss";

const NavbarLogo = (props) => {
  const spline = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      if (props.isDarkMode) {
        spline.current.emitEvent(
          "keyUp",
          "a9538c57-e316-48df-b44b-e96e091d773b"
        );
        spline.current.emitEvent(
          "keyUp",
          "0ea6ee37-7b08-4376-a908-603c39455b92"
        );
      } else {
        spline.current.emitEvent(
          "keyDown",
          "a9538c57-e316-48df-b44b-e96e091d773b"
        );
        spline.current.emitEvent(
          "keyDown",
          "0ea6ee37-7b08-4376-a908-603c39455b92"
        );
      }
    }
  }, [props.isDarkMode]);

  function onLoad(splineApp) {
    spline.current = splineApp;
    setIsLoading(false);
  }

  return (
    <div className="logo">
      <Suspense fallback={<></>}>
        {isLoading && <></>}
        <Spline
          className="logo"
          scene="https://prod.spline.design/YzZyD9ih9ADmXDOS/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  );
};

export default NavbarLogo;
