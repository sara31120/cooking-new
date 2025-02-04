const QuoteSection = ({ quote }) => (
    <div className="relative flex items-start mt-8" style={{ position: 'relative', left: '-245px'}}>
      <img src={process.env.PUBLIC_URL + "/images/Rec.jpg"} className="w-[700px] h-auto mx-auto" alt="Quote Background" />
      <blockquote className="absolute inset-0 flex items-center justify-center text-2xl font-Inter font-semibold italic text-black px-2">
        "{quote}"
      </blockquote>
    </div>
  );
  
  export default QuoteSection;
  