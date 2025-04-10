
import { useState, useEffect } from "react";
import instructors from "@/data/instructors";
import InstructorCard from "@/components/instructors/InstructorCard";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const InstructorsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Instructors</h1>
        <p className="text-gray-600 mt-2">
          Learn from industry experts with real-world experience
        </p>
      </div>
      
      {isLoading ? (
        <LoadingSpinner fullPage text="Loading instructors..." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default InstructorsPage;
