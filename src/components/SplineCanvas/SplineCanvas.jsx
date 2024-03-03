import { lazy, Suspense, useState } from "react";
import { Preloader } from "../";
const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineCanvas = (props) => {
  const { attributes } = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Suspense fallback={<Preloader />}>
        {isLoading && <Preloader />}
        <Spline {...attributes} onLoad={() => setIsLoading(false)} />
      </Suspense>
    </>
  );
};

export default SplineCanvas;
