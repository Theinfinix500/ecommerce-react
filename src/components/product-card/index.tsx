import productImage from "../../assets/icons/1.jpg";
import { IoStar, IoHeartOutline } from "react-icons/io5";

const ProductCard = () => {
  return (
    <div>
      <div className="h-[295px] w -[295px] bg-gray-light rounded-lg relative">
        <img
          src={productImage}
          alt="product-image"
          className="w-full h-full object-cover mix-blend-multiply"
        />
        <button className="absolute top-4 right-4 bg-white rounded-full p-[10px] flex items-center justify-center">
          <IoHeartOutline className="text-xl" />
        </button>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between gap-2 text-black-default">
          <h1 className="font-bold">Wireless Headphones, IPX8</h1>
          <span className="font-bold">89.00</span>
        </div>
        <p className="my-2 text-xs text-gray-default font-bold">
          Organic Cotton, fairtrade certified
        </p>
        <div className="flex items-center gap-1">
          <span className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((_) => (
              <IoStar className="text-green" />
            ))}
          </span>
          <span className="text-gray-default text-sm font-semibold">(121)</span>
        </div>
        <div className="mt-4">
          <button className="px-[18px] py-[6px] border-2 border-black-darker font-semibold text-black-darker rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;