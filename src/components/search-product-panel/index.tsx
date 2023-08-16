import ProductCard from "../product-card";
import headphoneImage from "../../assets/images/category-1.jpg";
import watchImage from "../../assets/images/category-2.jpg";

interface SearchProductPanelProps {
  layout: "list" | "card";
}

const SearchProductPanel = ({ layout }: SearchProductPanelProps) => {
  const cards = Array.from({ length: 6 }, (_, i) => i + 1).map((_, i) => (
    <ProductCard
      layout={layout}
      image={i % 2 === 0 ? headphoneImage : watchImage}
    />
  ));

  return (
    <div>
      <div className="bg-white p-7 rounded">
        <div>
          <div className="grid grid-cols-1 gap-6">{cards}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchProductPanel;
