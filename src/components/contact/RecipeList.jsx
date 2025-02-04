import RecipeCard from "../../components/recipes/RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-semibold font-inter text-center mb-8">
        Check out the delicious recipe
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
            category={recipe.category}
          />
        ))}
      </div>
    </section>
  );
};

export default RecipeList;
