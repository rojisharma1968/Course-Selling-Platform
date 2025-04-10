
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getEnrolledCourses } from "@/utils/localStorage";
import courses from "@/data/courses";
import CourseProgressCard from "@/components/dashboard/CourseProgressCard";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { Course, EnrolledCourse } from "@/data/types";

const DashboardPage = () => {
  const [enrolledCourseData, setEnrolledCourseData] = useState<
    Array<{ course: Course; enrollment: EnrolledCourse }>
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Get enrolled courses from localStorage
    const enrolledCourses = getEnrolledCourses();
    
    // Match enrolled courses with course data
    const coursesWithProgress = enrolledCourses
      .map((enrollment) => {
        const courseData = courses.find((c) => c.id === enrollment.courseId);
        if (courseData) {
          return { course: courseData, enrollment };
        }
        return null;
      })
      .filter(Boolean) as Array<{ course: Course; enrollment: EnrolledCourse }>;
    
    setEnrolledCourseData(coursesWithProgress);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <LoadingSpinner fullPage text="Loading your courses..." />;
  }
  
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">My Learning</h1>
        <p className="text-gray-600 mt-2">
          Track your progress and continue learning
        </p>
      </div>
      
      {enrolledCourseData.length === 0 ? (
        <div className="bg-white rounded-lg border shadow-md p-8 text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">No courses yet</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            You haven't enrolled in any courses yet. Browse our catalog to find courses that interest you.
          </p>
          <Button asChild>
            <Link to="/courses">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse Courses
            </Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourseData.map(({ course, enrollment }) => (
            <CourseProgressCard
              key={course.id}
              course={course}
              enrollment={enrollment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
