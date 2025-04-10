
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Clock, Users, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import courses from "@/data/courses";
import instructors from "@/data/instructors";
import reviews from "@/data/reviews";
import LearningOutcomes from "@/components/courses/CourseDetail/LearningOutcomes";
import CourseContent from "@/components/courses/CourseDetail/CourseContent";
import EnrollButton from "@/components/courses/CourseDetail/EnrollButton";
import InstructorPreview from "@/components/courses/CourseDetail/InstructorPreview";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { Course, Instructor } from "@/data/types";

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [instructor, setInstructor] = useState<Instructor | null>(null);
  const [courseReviews, setCourseReviews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Find the course and instructor from our mock data
    const courseData = courses.find((c) => c.id === courseId);
    
    if (courseData) {
      setCourse(courseData);
      
      // Find the instructor
      const instructorData = instructors.find((i) => i.id === courseData.instructorId);
      if (instructorData) {
        setInstructor(instructorData);
      }
      
      // Find reviews for this course
      const courseReviewsData = reviews.filter((r) => r.courseId === courseId);
      setCourseReviews(courseReviewsData);
    }
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [courseId]);
  
  if (isLoading) {
    return <LoadingSpinner fullPage text="Loading course details..." />;
  }
  
  if (!course || !instructor) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, the course you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/courses">Browse Courses</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div>
      {/* Course Header */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="text-gray-600"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              
              <p className="text-xl text-gray-700 mb-6">
                {course.shortDescription}
              </p>
              
              <div className="flex flex-wrap items-center text-sm text-gray-700 gap-y-2 mb-4">
                <div className="flex items-center mr-6">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-medium">{course.rating.toFixed(1)}</span>
                  <span className="text-gray-500 ml-1">({course.reviewCount.toLocaleString()} reviews)</span>
                </div>
                
                <div className="flex items-center mr-6">
                  <Users className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{course.duration} total</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700">
                  Taught by{" "}
                  <Link
                    to={`/instructors/${instructor.id}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {instructor.name}
                  </Link>
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {course.level}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  Last updated {new Date(course.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-1 relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-lg shadow-md mb-6 lg:mb-0"
              />
              <div className="lg:hidden">
                <EnrollButton course={course} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <LearningOutcomes course={course} />
            <CourseContent course={course} />
            
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
              <div className="text-gray-700 space-y-4">
                <p>{course.description}</p>
              </div>
            </div>
            
            <InstructorPreview instructor={instructor} />
            
            {courseReviews.length > 0 && (
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Student Reviews</h3>
                <div className="space-y-6">
                  {courseReviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex items-start mb-2">
                        <img
                          src={review.userAvatar}
                          alt={review.userName}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">{review.userName}</h4>
                          <div className="flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                  fill={i < review.rating ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                            <span className="text-gray-500 text-sm ml-2">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="hidden lg:block">
            <EnrollButton course={course} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
