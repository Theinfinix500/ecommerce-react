import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Option } from "@/models/options.model";

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
      <SelectTrigger className="w-[180px] bg-gray-200 rounded-full">
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
