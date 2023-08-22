import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Option } from '@/models/options.model';

interface SortSelectProps {
  placeholder: string;
  options: Option[];
}

const SortSelect = ({ placeholder, options }: SortSelectProps) => {
  const selectItems = options.map(({ label, value }) => (
    <SelectItem value={value}>{label}</SelectItem>
  ));

  return (
    <Select>
      <SelectTrigger className="w-auto bg-gray-200 rounded-full gap-2 items-center capitalize font-medium">
        <SelectValue
          placeholder={placeholder}
          className="font-bold placeholder:font-bold"
        />
      </SelectTrigger>
      <SelectContent>{selectItems}</SelectContent>
    </Select>
  );
};

export default SortSelect;
