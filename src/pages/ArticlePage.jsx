import RecipeCard from "../components/recipes/RecipeCard";
import ArticleHeader from "../components/common/ArticleHeader";
import QuestionBlock from "../components/recipes/QuestionBlock";
import SocialShare from "../components/common/SocialShare";
import QuoteSection from "../components/common/QuoteSection";
import SubscribeForm from "../components/common/SubscribeForm";
import { recipes } from "../utils/constants";



const ArticlePage = () => {
  return (
    <div className="container mx-auto px-4">
      <ArticleHeader
        title="Full Guide to Becoming a Professional Chef"
        author="John Smith"
        date="15 March 2022"
        authorImage={process.env.PUBLIC_URL + "/images/author2.jpg"}
      />

      <main className="mt-8">
        <div className="flex">
          <div className="flex-1 pr-4">
            <p className="text-gray-800 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar.
            </p>

            <div className="flex justify-center mb-6">
              <img
                src={process.env.PUBLIC_URL + "/images/cooker2.jpg"}
                alt="Professional Chef"
                className="w-full max-w-4xl rounded-lg"
              />
            </div>

            {/* Questions */}
            <QuestionBlock
              question="How did you start out in the food industry?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."
            />
            <SocialShare />
            <QuestionBlock
              question="What do you like most about your job?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."
            />
            <QuestionBlock
              question="Do you cook at home on your days off?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."
              image={process.env.PUBLIC_URL + "/images/directions2.jpg"}
            />
          </div>
        </div>

        <QuoteSection quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." />

        <section className="mt-12">
          <h2 className="text-xl font-semibold">
            Biggest misconception about being a chef?
          </h2>
          <p className="text-md text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit.
          </p>
        </section>
      </main>

      <SubscribeForm />

      {/* Recipe Cards */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Check out the delicious recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
