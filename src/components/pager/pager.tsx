import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Pager = () => {
  const pages = Array.from({ length: 3 }, (_, i) => i + 1).map((page) => (
    <Button size="icon" variant="pager">
      {page}
    </Button>
  ));

  return (
    <div>
      <div className="flex items-center gap-2">
        {pages}

        <Button
          size="icon"
          variant="pager"
          className="border border-green-800 bg-white"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Pager;
