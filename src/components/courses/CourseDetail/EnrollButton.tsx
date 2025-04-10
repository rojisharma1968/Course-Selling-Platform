
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { enrollInCourse, isEnrolled } from "@/utils/localStorage";
import { useToast } from "@/components/ui/use-toast";
import { Course } from "@/data/types";

interface EnrollButtonProps {
  course: Course;
}

const EnrollButton = ({ course }: EnrollButtonProps) => {
  const [enrolled, setEnrolled] = useState<boolean>(isEnrolled(course.id));
  const { toast } = useToast();

  const handleEnroll = () => {
    if (!enrolled) {
      enrollInCourse(course.id);
      setEnrolled(true);
      
      toast({
        title: "Successfully enrolled!",
        description: `You have been enrolled in "${course.title}". You can now access it from your dashboard.`,
        duration: 5000,
      });
    }
  };

  return (
    <div className="sticky top-28 mt-8 bg-white rounded-lg border p-6 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          {course.price === 0 ? "Free" : `$${course.price.toFixed(2)}`}
        </div>
      </div>
      
      {enrolled ? (
        <Button 
          variant="outline" 
          className="w-full py-6"
          disabled
        >
          Already Enrolled
        </Button>
      ) : (
        <Button 
          onClick={handleEnroll} 
          className="w-full py-6"
        >
          {course.price === 0 ? "Enroll for Free" : "Enroll Now"}
        </Button>
      )}
      
      <div className="text-center text-sm text-gray-500 mt-4">
        <p>Full lifetime access</p>
        <p>Access on mobile and desktop</p>
        <p>Certificate of completion</p>
      </div>
    </div>
  );
};

export default EnrollButton;
