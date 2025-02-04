import ButtonSection from "../components/chef/ButtonSection";
import SectionHeader from "../components/chef/SectionHeader";
import ImageSection from "../components/chef/ImageSection";

const Chef = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Section - Text + Button */}
        <div className="md:w-1/2">
          <SectionHeader
            title="Everyone can be a chef in their own kitchen"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim."
          />
          {/* Button below text */}
          <div className="mt-6">
            <ButtonSection text="Learn More" />
          </div>
        </div>

        {/* Right Section - Image (Moved Closer to Text) */}
        <div className="relative z-10 w-80 md:w-[30rem] lg:w-[35rem] md:-ml-10 lg:-ml-16">
          <ImageSection
            imageSrc={process.env.PUBLIC_URL + "/images/chef.jpg"}
            altText="Chef"
          />
        </div>

      </div>
    </section>
  );
};

export default Chef;



