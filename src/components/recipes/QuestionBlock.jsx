const QuestionBlock = ({ question, answer, image }) => (
    <div>
      <h2 className="text-xl font-semibold mt-8">{question}</h2>
      {image && <img src={image} alt="Related" className="w-full max-w-lg rounded-lg shadow-lg ml-1 mb-4" />}
      <p className="text-md text-gray-600">{answer}</p>
    </div>
  );
  
  export default QuestionBlock;
  