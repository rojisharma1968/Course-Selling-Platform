
import { useState, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories } from "@/data/categories";

export type CourseFilters = {
  category: string;
  price: string;
  level: string;
};

interface CourseFiltersProps {
  onFilterChange: (filters: CourseFilters) => void;
  activeFilters: CourseFilters;
}

const CourseFilters = ({ onFilterChange, activeFilters }: CourseFiltersProps) => {
  const levels = ["beginner", "intermediate", "advanced"];
  const prices = ["all", "free", "paid"];
  
  const [selectedCategory, setSelectedCategory] = useState<string>(activeFilters.category || "all");
  const [selectedPrice, setSelectedPrice] = useState<string>(activeFilters.price || "all");
  const [selectedLevel, setSelectedLevel] = useState<string>(activeFilters.level || "all");
  
  useEffect(() => {
    onFilterChange({
      category: selectedCategory,
      price: selectedPrice,
      level: selectedLevel,
    });
  }, [selectedCategory, selectedPrice, selectedLevel, onFilterChange]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handlePriceChange = (price: string) => {
    setSelectedPrice(price);
  };
  
  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
  };
  
  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSelectedPrice("all");
    setSelectedLevel("all");
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
        {/* Category Filter */}
        <div className="w-full md:w-1/3">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Category</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {selectedCategory === "all" ? "All Categories" : categories.find(c => c.id === selectedCategory)?.name || selectedCategory}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Select Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={selectedCategory === "all"}
                onCheckedChange={() => handleCategoryChange("all")}
              >
                All Categories
              </DropdownMenuCheckboxItem>
              {categories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category.id}
                  checked={selectedCategory === category.id}
                  onCheckedChange={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Price Filter */}
        <div className="w-full md:w-1/3">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Price</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between capitalize">
                {selectedPrice === "all" ? "All Prices" : selectedPrice}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Select Price</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {prices.map((price) => (
                <DropdownMenuCheckboxItem
                  key={price}
                  checked={selectedPrice === price}
                  onCheckedChange={() => handlePriceChange(price)}
                  className="capitalize"
                >
                  {price === "all" ? "All Prices" : price}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Level Filter */}
        <div className="w-full md:w-1/3">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Level</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between capitalize">
                {selectedLevel === "all" ? "All Levels" : selectedLevel}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Select Level</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={selectedLevel === "all"}
                onCheckedChange={() => handleLevelChange("all")}
              >
                All Levels
              </DropdownMenuCheckboxItem>
              {levels.map((level) => (
                <DropdownMenuCheckboxItem
                  key={level}
                  checked={selectedLevel === level}
                  onCheckedChange={() => handleLevelChange(level)}
                  className="capitalize"
                >
                  {level}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Clear Filters */}
      {(selectedCategory !== "all" || selectedPrice !== "all" || selectedLevel !== "all") && (
        <div className="mt-4 text-right">
          <Button variant="ghost" size="sm" onClick={handleClearFilters} className="text-primary hover:text-primary hover:bg-primary/10">
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseFilters;
