
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Course } from "@/data/types";
import courses from "@/data/courses";

const ContinueLearning = () => {
  const { toast } = useToast();
  const [continueCourse, setContinueCourse] = useState<Course | null>(null);
  
  useEffect(() => {
    // Get enrolled courses from localStorage
    const enrolledCourses = localStorage.getItem("enrolledCourses");
    
    if (enrolledCourses) {
      try {
        const parsedCourses = JSON.parse(enrolledCourses) as string[];
        
        if (parsedCourses.length > 0) {
          // Get the most recently enrolled course or one with the highest progress
          const lastEnrolledCourseId = parsedCourses[parsedCourses.length - 1];
          const lastCourse = courses.find(c => c.id === lastEnrolledCourseId);
          
          if (lastCourse) {
            setContinueCourse(lastCourse);
          }
        }
      } catch (error) {
        console.error("Error parsing enrolled courses:", error);
      }
    }
  }, []);
  
  const handleContinueLearning = () => {
    if (!continueCourse) {
      // If no course is enrolled, show toast and redirect to courses page
      toast({
        title: "No courses enrolled",
        description: "Browse our courses and enroll to start learning",
        variant: "default",
      });
    }
  };
  
  if (!continueCourse) {
    return (
      <Button 
        onClick={handleContinueLearning} 
        asChild
        className="bg-primary hover:bg-primary/90 flex items-center gap-2"
      >
        <Link to="/courses">
          <BookOpenText className="h-5 w-5" />
          Start Learning
        </Link>
      </Button>
    );
  }
  
  return (
    <Button 
      asChild
      className="bg-primary hover:bg-primary/90 flex items-center gap-2"
    >
      <Link to={`/courses/${continueCourse.id}`}>
        <BookOpenText className="h-5 w-5" />
        Continue Learning
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </Button>
  );
};

export default ContinueLearning;
