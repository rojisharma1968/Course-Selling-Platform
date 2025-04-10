
import { Link } from "react-router-dom";
import { Star, Users } from "lucide-react";
import { Instructor } from "@/data/types";

interface InstructorPreviewProps {
  instructor: Instructor;
}

const InstructorPreview = ({ instructor }: InstructorPreviewProps) => {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Instructor</h3>
      <Link to={`/instructors/${instructor.id}`} className="flex items-start space-x-4">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold text-primary hover:underline">{instructor.name}</h4>
          <p className="text-gray-600 text-sm">{instructor.expertise.join(", ")}</p>
          <div className="flex items-center mt-2 text-sm">
            <div className="flex items-center mr-4">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span>{instructor.rating.toFixed(1)}</span>
              <span className="text-gray-400 ml-1">({instructor.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gray-400 mr-1" />
              <span>{instructor.studentsCount.toLocaleString()} students</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-gray-700 line-clamp-3">{instructor.bio}</p>
        <Link 
          to={`/instructors/${instructor.id}`}
          className="text-primary hover:underline inline-block mt-2 text-sm font-medium"
        >
          View full profile
        </Link>
      </div>
    </div>
  );
};

export default InstructorPreview;
