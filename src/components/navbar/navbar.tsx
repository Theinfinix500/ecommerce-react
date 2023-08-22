import { Store, User, ShoppingCart } from 'lucide-react';
import { SearchInput } from '@/components/search-input';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-24 py-4">
      <div>
        <div className="h-[50px]">
          <Store className="w-full h-full" />
        </div>
      </div>
      <div className="flex-1 ml-20">
        <ul className="flex items-center gap-8">
          <li className="font-semibold">Categories</li>
          <li className="font-semibold">Deals</li>
          <li className="font-semibold">What's New</li>
          <li className="font-semibold">Delivery</li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <div>
          <SearchInput placeholder="Search Products" />
        </div>
        <div className="flex items-center gap-2">
          <User /> <span className="font-semibold">Account</span>
        </div>
        <div className="flex items-center gap-2">
          <ShoppingCart /> <span className="font-semibold">Cart</span>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
