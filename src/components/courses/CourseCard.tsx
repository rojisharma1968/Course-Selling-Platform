
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Users, Clock } from "lucide-react";
import { Course } from "@/data/types";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

const CourseCard = ({ course, featured = false }: CourseCardProps) => {
  const [imageError, setImageError] = useState(false);
  
  // Fallback image if the course image fails to load
  const fallbackImage = "/placeholder.svg";
  
  const handleImageError = () => {
    console.log(`Image failed to load for course: ${course.id}`);
    setImageError(true);
  };

  return (
    <Link to={`/courses/${course.id}`}>
      <div className={`course-card group ${featured ? 'lg:grid lg:grid-cols-2 lg:gap-4' : ''} h-full bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200`}>
        <div className={`relative overflow-hidden ${featured ? 'lg:h-full' : 'h-48'} bg-gray-100 rounded-t-lg`}>
          <img
            src={imageError ? fallbackImage : course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
            loading="lazy"
          />
          {course.price === 0 && (
            <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold py-1 px-2 rounded">Free</span>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center mb-2">
            <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
              {course.category}
            </Badge>
            <Badge variant="outline" className="ml-2 text-xs bg-secondary/10 text-secondary border-secondary/20 capitalize">
              {course.level}
            </Badge>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-gray-500 text-sm mb-3">by {course.instructor}</p>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {course.shortDescription}
          </p>
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-y-2">
            <div className="flex items-center mr-4">
              <Star className="h-4 w-4 text-yellow-400 mr-1 inline" />
              <span>{course.rating.toFixed(1)}</span>
              <span className="text-gray-400 ml-1">({course.reviewCount.toLocaleString()})</span>
            </div>
            <div className="flex items-center mr-4">
              <Users className="h-4 w-4 text-gray-400 mr-1 inline" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-gray-400 mr-1 inline" />
              <span>{course.duration}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-lg font-bold text-gray-900">
              {course.price === 0 ? (
                "Free"
              ) : (
                `$${course.price.toFixed(2)}`
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
