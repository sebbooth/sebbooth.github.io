import { lazy, Suspense, useState } from "react";
import { Preloader } from "../";
const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineCanvas = (props) => {
  const { attributes } = props;
  const [isLoading, setIsLoading] = useState(true);

  function onLoad() {
    setIsLoading(false);
  }

  return (
    <>
      <Suspense fallback={<Preloader />}>
        {isLoading && <Preloader />}
        <Spline {...attributes} onStart={onLoad} />
      </Suspense>
    </>
  );
};

export default SplineCanvas;
