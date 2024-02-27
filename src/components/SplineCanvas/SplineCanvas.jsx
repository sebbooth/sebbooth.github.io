import { lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineCanvas = (props) => {
  const { attributes } = props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline {...attributes} />
    </Suspense>
  );
};

export default SplineCanvas;
