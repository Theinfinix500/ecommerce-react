import { SearchCategoryCard } from "../search-category-card";
import headphoneImage from "../../assets/images/category-1.jpg";
import watchImage from "../../assets/images/category-2.jpg";

const SearchCategoryPanel = () => {
  const cards = Array.from({ length: 6 }, (_, i) => i + 1).map((_, i) => (
    <SearchCategoryCard image={i % 2 === 0 ? headphoneImage : watchImage} />
  ));

  return (
    <div>
      <div className="bg-white p-7 rounded">
        <h1 className="font-bold text-xl">Popular Categories</h1>
        <div className="border-t mt-6 pt-6">
          <div className="grid grid-cols-2 gap-6 flex-wrap">{cards}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchCategoryPanel;
