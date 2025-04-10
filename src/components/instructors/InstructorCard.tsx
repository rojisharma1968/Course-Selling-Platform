
import { Link } from "react-router-dom";
import { Star, Users, BookOpen } from "lucide-react";
import { Instructor } from "@/data/types";

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard = ({ instructor }: InstructorCardProps) => {
  return (
    <Link to={`/instructors/${instructor.id}`}>
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover-card-effect h-full">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <img 
              src={instructor.avatar} 
              alt={instructor.name} 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                {instructor.name}
              </h3>
              <p className="text-gray-600 text-sm">{instructor.expertise.slice(0, 2).join(", ")}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-gray-700 line-clamp-3">{instructor.bio}</p>
          </div>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 mt-4 gap-y-2">
            <div className="flex items-center mr-4">
              <Star className="h-4 w-4 text-yellow-400 mr-1 inline" />
              <span>{instructor.rating.toFixed(1)}</span>
              <span className="text-gray-400 ml-1">({instructor.reviewCount.toLocaleString()})</span>
            </div>
            <div className="flex items-center mr-4">
              <Users className="h-4 w-4 text-gray-400 mr-1 inline" />
              <span>{instructor.studentsCount.toLocaleString()} students</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 text-gray-400 mr-1 inline" />
              <span>{instructor.coursesCount} courses</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InstructorCard;
