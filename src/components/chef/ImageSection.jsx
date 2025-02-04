const ImageSection = ({ imageSrc, altText }) => {
  return (
    <div className="relative mt-10 md:mt-0 md:flex-1">
      <img
        src={imageSrc}
        alt={altText}
        className="relative z-10 w-80 md:w-[30rem] lg:w-[35rem]"
      />
    </div>
  );
};

export default ImageSection;
