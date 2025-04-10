
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Users, BookOpen, ArrowLeft, Twitter, Globe, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import instructors from "@/data/instructors";
import courses from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { Instructor, Course } from "@/data/types";

const InstructorDetailPage = () => {
  const { instructorId } = useParams<{ instructorId: string }>();
  const navigate = useNavigate();
  
  const [instructor, setInstructor] = useState<Instructor | null>(null);
  const [instructorCourses, setInstructorCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Find the instructor and their courses from our mock data
    const instructorData = instructors.find((i) => i.id === instructorId);
    
    if (instructorData) {
      setInstructor(instructorData);
      
      // Find courses by this instructor
      const instructorCoursesData = courses.filter((c) => c.instructorId === instructorId);
      setInstructorCourses(instructorCoursesData);
    }
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [instructorId]);
  
  if (isLoading) {
    return <LoadingSpinner fullPage text="Loading instructor profile..." />;
  }
  
  if (!instructor) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Instructor Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, the instructor you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/instructors">Browse Instructors</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center mb-8">
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
      
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
            />
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{instructor.name}</h1>
              
              <p className="text-gray-600 mb-4">{instructor.expertise.join(", ")}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-medium">{instructor.rating.toFixed(1)}</span>
                  <span className="text-gray-500 ml-1">({instructor.reviewCount.toLocaleString()} reviews)</span>
                </div>
                
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{instructor.studentsCount.toLocaleString()} students</span>
                </div>
                
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{instructor.coursesCount} courses</span>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-4">
                {instructor.social.website && (
                  <a
                    href={`https://${instructor.social.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary"
                    aria-label="Website"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                )}
                
                {instructor.social.twitter && (
                  <a
                    href={`https://twitter.com/${instructor.social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                
                {instructor.social.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${instructor.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                
                {instructor.social.github && (
                  <a
                    href={`https://github.com/${instructor.social.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">About {instructor.name}</h2>
            <div className="text-gray-700 space-y-4">
              <p>{instructor.bio}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Courses by {instructor.name}</h2>
        
        {instructorCourses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses available</h3>
            <p className="text-gray-600">
              This instructor doesn't have any courses yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {instructorCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorDetailPage;
