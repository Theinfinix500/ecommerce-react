import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

interface FilterSelectProps {
  placeholder: string;
}

const FilterSelect = ({ placeholder }: FilterSelectProps) => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px] bg-gray-200 rounded-full">
          <SelectValue
            placeholder={placeholder}
            className="font-bold placeholder:font-bold"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterSelect;
