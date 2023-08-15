interface SearchCategoryCardProps {
  image: string;
}

const SearchCategoryCard = ({ image }: SearchCategoryCardProps) => {
  return (
    <div className="min-w-[270px] h-[80px] bg-gray-light rounded-lg p-3 flex items-center">
      <div className="flex items-center gap-3">
        <div className="w-[55px] h-[55px]">
          <img
            src={image}
            alt="search-category-image"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <div>
          <h1 className="font-bold">Furniture</h1>
          <span className="text-xs text-gray-default font-semibold">
            240 Item Available
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchCategoryCard;
