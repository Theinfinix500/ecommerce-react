import { Search } from 'lucide-react';
import { InputHTMLAttributes, forwardRef } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder }: SearchInputProps, ref) => {
    return (
      <div className="min-w-[300px] relative">
        <input
          type="text"
          placeholder={placeholder}
          className="px-4 py-2 rounded-full w-full pr-10 bg-gray-100 placeholder:text-gray-500"
          ref={ref}
        />
        <Search className="w-5 absolute top-2 right-4 text-gray-500 pointer-events-none" />
      </div>
    );
  }
);
SearchInput.displayName = 'SearchInput';

export default SearchInput;
