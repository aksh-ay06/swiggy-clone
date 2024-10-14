const Shimmer = () => {
    return (
      <div className="shimmer-list flex flex-wrap gap-4 p-4">
        {Array(20).fill("").map((_, index) => (
          <div
            key={index}
            className="w-56 h-96 p-4 m-4 bg-gray-200 rounded-lg animate-pulse"
            aria-label="Loading content"
          ></div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  