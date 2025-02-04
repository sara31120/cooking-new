const SubscribeSection = () => {
    return (
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="relative">
            <img
              src={process.env.PUBLIC_URL + "/images/subscribe.jpg"}
              alt="Healthy Food"
              className="mx-auto rounded-lg"
            />
            <div className="absolute top-3/4 transform -translate-y-1/2 w-1/1 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center space-y-6 bg-customBlue shadow-lg rounded-xl p-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-black text-white px-6 py-2 rounded-r-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SubscribeSection;
  