const SectionHeader = ({ title, description }) => {
    return (
      <div className="max-w-md text-center md:text-left md:flex-1">
        <h1 className="text-2xl md:text-4xl font-bold text-black font-Inter mb-4">
          {title}
        </h1>
        <p className="text-gray-600 font-Inter mb-6">
          {description}
        </p>
      </div>
    );
  };
  
  export default SectionHeader;
  