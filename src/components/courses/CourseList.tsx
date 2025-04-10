
import { useState, useEffect } from "react";
import { Course } from "@/data/types";
import CourseCard from "./CourseCard";
import CourseFilters, { CourseFilters as FilterTypes } from "./CourseFilters";
import CoursePagination from "./CoursePagination";

interface CourseListProps {
  courses: Course[];
  initialFilters?: FilterTypes;
}

const CourseList = ({ courses, initialFilters }: CourseListProps) => {
  const [filters, setFilters] = useState<FilterTypes>(
    initialFilters || {
      category: "all",
      price: "all",
      level: "all",
    }
  );
  
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;
  
  useEffect(() => {
    // Apply filters
    let result = [...courses];
    
    if (filters.category !== "all") {
      const categoryName = filters.category;
      result = result.filter(course => course.category.toLowerCase().includes(categoryName.toLowerCase()));
    }
    
    if (filters.price !== "all") {
      if (filters.price === "free") {
        result = result.filter(course => course.price === 0);
      } else if (filters.price === "paid") {
        result = result.filter(course => course.price > 0);
      }
    }
    
    if (filters.level !== "all") {
      result = result.filter(course => course.level === filters.level);
    }
    
    setFilteredCourses(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [courses, filters]);
  
  // Calculate pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  
  const handleFilterChange = (newFilters: FilterTypes) => {
    setFilters(newFilters);
  };
  
  const handlePageChange = (pageNumber: number) => {
    console.log(`Changing to page ${pageNumber}`);
    setCurrentPage(pageNumber);
    
    // Scroll to top of the course list
    window.scrollTo({
      top: document.getElementById("course-list-top")?.offsetTop || 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div id="course-list-top">
      <CourseFilters onFilterChange={handleFilterChange} activeFilters={filters} />
      
      {filteredCourses.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">
            Try adjusting your filters to find more courses.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-gray-600">
              Showing {Math.min(currentCourses.length, coursesPerPage)} of {filteredCourses.length} courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {totalPages > 1 && (
            <CoursePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CourseList;
