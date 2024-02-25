import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader-container">
      <h1>Loading...</h1>
      <h5>This may or may not just be a timed animation</h5>
      <h5>Hopefully everything loads in time 🙃</h5>
      <h6>
        Real loader coming soon when I figure out how to tell when a Spline
        component actually renders.
      </h6>
    </div>
  );
};

export default Preloader;
