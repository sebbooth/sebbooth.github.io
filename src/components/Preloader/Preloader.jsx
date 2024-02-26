import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader-container">
      <h1>Loading...</h1>

      <h5>This may or may not just be a timed animation</h5>
      <h5>Let's hope everything loads in time 🙃</h5>
      <div>
        <div>3...2...1...</div>
      </div>
    </div>
  );
};

export default Preloader;
