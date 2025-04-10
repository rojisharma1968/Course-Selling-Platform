
import { Link } from "react-router-dom";
import { Course, EnrolledCourse } from "@/data/types";
import { updateCourseProgress } from "@/utils/localStorage";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface CourseProgressCardProps {
  course: Course;
  enrollment: EnrolledCourse;
}

const CourseProgressCard = ({ course, enrollment }: CourseProgressCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const handleContinueLearning = () => {
    // In a real application, this would navigate to the last accessed lesson
    // For the mock app, we'll just update the progress
    const newProgress = Math.min(enrollment.progress + 10, 100);
    updateCourseProgress(course.id, newProgress);
    window.location.reload(); // Force a refresh to show updated progress
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover-card-effect h-full">
      <div className="relative h-40">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <Button
            onClick={handleContinueLearning}
            className="bg-white text-primary hover:bg-white/90"
          >
            Continue Learning
          </Button>
        </div>
      </div>
      <div className="p-5">
        <Link to={`/courses/${course.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-primary transition-colors">
            {course.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-3">by {course.instructor}</p>
        
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Your progress</span>
            <span className="font-medium">{enrollment.progress}%</span>
          </div>
          <Progress value={enrollment.progress} className="h-2" />
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 mt-4">
          <span>Enrolled: {formatDate(enrollment.enrolledAt)}</span>
          <span>Last accessed: {formatDate(enrollment.lastAccessedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseProgressCard;
