
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import courses from "@/data/courses";
import CourseList from "@/components/courses/CourseList";
import { CourseFilters } from "@/components/courses/CourseFilters";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const CoursesPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  // Get initial category from URL if present
  const getInitialCategory = () => {
    const params = new URLSearchParams(location.search);
    return params.get("category") || "all";
  };
  
  const initialFilters: CourseFilters = {
    category: getInitialCategory(),
    price: "all",
    level: "all",
  };
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Courses</h1>
        <p className="text-gray-600 mt-2">
          Discover our wide range of courses and start learning today
        </p>
      </div>
      
      {isLoading ? (
        <LoadingSpinner fullPage text="Loading courses..." />
      ) : (
        <CourseList courses={courses} initialFilters={initialFilters} />
      )}
    </div>
  );
};

export default CoursesPage;
