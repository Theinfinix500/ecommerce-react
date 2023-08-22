import { Phone } from 'lucide-react';

const SubNav = () => {
  return (
    <div className="flex items center justify-between bg-green-900 text-white px-24 py-2">
      <div>
        <div className="flex items-center gap-1">
          <Phone className="h-5" /> +001234567890
        </div>
      </div>
      <div className="flex items-center gap-4">
        Get 50% off on Selected Items{' '}
        <span className="border-l-2 border-white pl-4 capitalize">
          shop now
        </span>
      </div>
      <div>Eng | Location</div>
    </div>
  );
};

export { SubNav };
