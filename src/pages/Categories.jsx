import CategoryCard from "../components/categories/CategoryCard";
import SectionHeader from "../components/categories/SectionHeader";

const Categories = () => {
  const categoriesData = [
    {
      img: "/images/sushi.jpg",
      alt: "Breakfast",
      title: "Breakfast",
      gradient: "linear-gradient(to bottom, #f9fafb, #e5e7eb)",
    },
    {
      img: "/images/vegy.jpg",
      alt: "Vegan",
      title: "Vegan",
      gradient: "linear-gradient(to bottom, #f9fafb, #d1fae5)",
    },
    {
      img: "/images/meatt.jpg",
      alt: "Meat",
      title: "Meat",
      gradient: "linear-gradient(to bottom, #f9fafb, #fecaca)",
    },
    {
      img: "/images/dessertt.jpg",
      alt: "Dessert",
      title: "Dessert",
      gradient: "linear-gradient(to bottom, #f9fafb, #ffe4e6)",
    },
    {
      img: "/images/lu.jpg",
      alt: "Lunch",
      title: "Lunch",
      gradient: "linear-gradient(to bottom, #f9fafb, #e5e7eb)",
    },
    {
      img: "/images/choco.jpg",
      alt: "Chocolate",
      title: "Chocolate",
      gradient: "linear-gradient(to bottom, #f9fafb, #e5e7eb)",
    },
  ];

  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Categories"
            buttonText="View All Categories"
            onClick={() => console.log("View all clicked")}
          />
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {categoriesData.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </>
  );
};

export default Categories;
