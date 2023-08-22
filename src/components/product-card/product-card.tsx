import { IoStar, IoHeartOutline } from 'react-icons/io5';
import './product-card.css';

interface ProductCardProps {
  layout?: 'list' | 'card';
  image: string;
}

const ProductCard = ({ image, layout = 'card' }: ProductCardProps) => {
  return (
    <div className={layout === 'list' ? 'item-list' : ''}>
      <div className="item-img h-[295px] min-w-[295px] bg-gray-100 rounded-lg relative">
        <img
          src={image}
          alt="product-image"
          className="w-full h-full object-cover mix-blend-multiply rounded-lg"
        />
        <button className="absolute top-4 right-4 bg-white rounded-full p-[10px] flex items-center justify-center">
          <IoHeartOutline className="text-xl" />
        </button>
      </div>
      <div className="item-details mt-4">
        <div className="flex items-center justify-between gap-2 text-black">
          <h1 className="font-bold">Wireless Headphones, IPX8</h1>
          <span className="item-price-card font-bold">89.00</span>
        </div>
        <p className="item-description my-2 text-xs text-gray-500 font-bold">
          Organic Cotton, fairtrade certified
        </p>
        <div className="flex items-center gap-1">
          <span className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((_, i) => (
              <IoStar key={i} className="text-green-600" />
            ))}
          </span>
          <span className="text-gray-500 text-sm font-semibold">(121)</span>
        </div>
        <div className="item-price-list">
          <span className="font-bold">89.00</span>
        </div>
        <div className="item-add-cart mt-4">
          <button className="px-[18px] py-[6px] border-2 border-black font-semibold text-black rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
