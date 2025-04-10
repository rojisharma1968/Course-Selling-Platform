
import { Course } from "@/data/types";
import { Check } from "lucide-react";

interface LearningOutcomesProps {
  course: Course;
}

const LearningOutcomes = ({ course }: LearningOutcomesProps) => {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">What you'll learn</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {course.learningOutcomes.map((outcome, index) => (
          <div key={index} className="flex">
            <div className="mr-2 mt-1 text-primary">
              <Check className="h-5 w-5" />
            </div>
            <p className="text-gray-700">{outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningOutcomes;
