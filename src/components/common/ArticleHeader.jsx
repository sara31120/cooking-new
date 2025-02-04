const ArticleHeader = ({ title, author, date, authorImage }) => {
  return (
    <header className="text-center py-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="flex items-center justify-center mt-4">
        <img 
          src={authorImage} 
          alt={author} 
          className="w-12 h-12 rounded-full mr-3"
        />
        <p className="text-gray-600">
          <span className="font-semibold">{author}</span> • {date}
        </p>
      </div>
    </header>
  );
};

export default ArticleHeader;
