interface CategoryProps {
    image: string;
  }
  
  const CategoryCard = ({ image }: CategoryProps) => {
    return (
      <div className="w-[130px] h-[160px] rounded-lg relative">
        <div className="absolute z-10 rounded-lg top-0 bottom-0 left-0 right-0">
          <img
            src={image}
            alt="category-image"
            className="w-full h-full object-cover object-top rounded-lg"
          />
        </div>
        <div className="h-full bg-category-card rounded-lg absolute z-30 left-0 right-0 bg-[rgb(65_65_65_/_0.2)]">
          <div className="pt-4 text-white text-center font-semibold text-lg rounded-lg">
            Furniture
          </div>
        </div>
      </div>
    );
  };
  
  export default CategoryCard;
  