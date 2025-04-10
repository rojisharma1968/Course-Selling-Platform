
import { Link } from "react-router-dom";
import { Category } from "@/data/types";
import { 
  BookOpen, Code, BarChart, Palette, Smartphone, 
  Briefcase, TrendingUp, Shield, Cloud
} from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const getIcon = () => {
    switch (category.icon) {
      case "code":
        return <Code className="h-6 w-6" />;
      case "bar-chart":
        return <BarChart className="h-6 w-6" />;
      case "palette":
        return <Palette className="h-6 w-6" />;
      case "smartphone":
        return <Smartphone className="h-6 w-6" />;
      case "briefcase":
        return <Briefcase className="h-6 w-6" />;
      case "trending-up":
        return <TrendingUp className="h-6 w-6" />;
      case "shield":
        return <Shield className="h-6 w-6" />;
      case "cloud":
        return <Cloud className="h-6 w-6" />;
      default:
        return <BookOpen className="h-6 w-6" />;
    }
  };

  return (
    <Link
      to={`/courses?category=${category.id}`}
      className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover-card-effect cursor-pointer group"
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        {getIcon()}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
        {category.name}
      </h3>
      <p className="text-gray-500 text-sm">
        {category.courseCount} {category.courseCount === 1 ? "course" : "courses"}
      </p>
    </Link>
  );
};

export default CategoryCard;
