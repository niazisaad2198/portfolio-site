const App = () => {
  return (
    <div className=" h-screen bg-gradient-to-b from-darker to-light">
      <div
        id="navbar"
        className=" grid grid-cols-4 justify-around py-4 bg-light h-16"
      >
        <h1 className=" ml-4 col-span-1 text-white font-mono text-lg font-semibold">
          N-Tech
        </h1>
        <div id="nav-links" className=" flex justify-end gap-x-4 col-start-3 col-span-2 pr-4">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <div id="content" className="text-white">
        content
      </div>
    </div>
  );
};

export default App;
