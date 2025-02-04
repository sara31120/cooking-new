import FormField from "../components/contact/FormField";
import SubscribeSection from "../components/contact/SubscribeSection";
import RecipeList from "../components/contact/RecipeList";
import { recipes } from "../utils/constants";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center">
      <div className="max-w-7xl w-full px-4 lg:px-8 py-12">
        <h1 className="text-4xl font-Inter font-bold text-center mb-12">
          Contact us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={process.env.PUBLIC_URL + "/images/chef2.jpg"}
              alt="Chef"
              className="rounded-lg w-full max-w-sm"
            />
          </div>

          {/* Form */}
          <div className="space-y-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <FormField
              label="NAME"
              id="name"
              placeholder="Enter your name..."
            />
            <FormField
              label="EMAIL ADDRESS"
              type="email"
              id="email"
              placeholder="Your email address..."
            />
            <FormField
              label="SUBJECT"
              id="subject"
              placeholder="Enter subject..."
            />
            <FormField
              label="ENQUIRY TYPE"
              type="select"
              id="enquiry"
              options={["Advertising", "Support", "Feedback"]}
            />
            <div className="space-y-1 col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-500"
              >
                MESSAGES
              </label>
              <textarea
                id="message"
                placeholder="Enter your messages..."
                rows="4"
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:ring-gray-200"
              ></textarea>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <SubscribeSection />

      {/* Recipe List Section */}
      <RecipeList recipes={recipes} />
    </section>
  );
};

export default Contact;
