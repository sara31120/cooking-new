const SocialShare = () => (
    <div className="ml-4">
      <h4 className="text-base font-semibold mb-2 text-right">Share This On:</h4>
      <div className="flex flex-col items-end space-y-2">
        <a href="#" className="text-gray-700 hover:text-blue-600">
          <i className="fab fa-facebook-f text-lg"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-400">
          <i className="fab fa-twitter text-lg"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-pink-500">
          <i className="fab fa-instagram text-lg"></i>
        </a>
      </div>
    </div>
  );
  
  export default SocialShare;
  