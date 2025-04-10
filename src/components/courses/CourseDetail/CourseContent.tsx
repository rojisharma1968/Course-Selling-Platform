
import { useState } from "react";
import { Course } from "@/data/types";
import { ChevronDown, ChevronUp, Play, Lock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CourseContentProps {
  course: Course;
}

const CourseContent = ({ course }: CourseContentProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  const totalLessons = course.curriculum.reduce(
    (total, section) => total + section.lessons.length,
    0
  );
  
  const totalDuration = course.curriculum
    .flatMap(section => section.lessons)
    .reduce((total, lesson) => {
      const [minutes, seconds] = lesson.duration.split(':').map(Number);
      return total + minutes + seconds / 60;
    }, 0);
  
  const formatTotalDuration = () => {
    const hours = Math.floor(totalDuration / 60);
    const minutes = Math.floor(totalDuration % 60);
    return `${hours}h ${minutes}m`;
  };
  
  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle)
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };
  
  const isSectionExpanded = (sectionTitle: string) => {
    return expandedSections.includes(sectionTitle);
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Course Content</h3>
        <div className="flex flex-wrap text-sm text-gray-600">
          <span className="mr-4">{course.curriculum.length} sections</span>
          <span className="mr-4">{totalLessons} lessons</span>
          <span>{formatTotalDuration()} total length</span>
        </div>
      </div>
      
      <Accordion type="multiple" className="space-y-4">
        {course.curriculum.map((section, sectionIndex) => (
          <AccordionItem 
            key={`section-${sectionIndex}`}
            value={`section-${sectionIndex}`}
            className="border rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
              <div className="flex items-center justify-between w-full text-left">
                <div>
                  <h4 className="font-semibold text-gray-900">{section.title}</h4>
                  <p className="text-sm text-gray-600">{section.lessons.length} lessons</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-0 pt-0">
              <ul className="divide-y border-t">
                {section.lessons.map((lesson, lessonIndex) => (
                  <li 
                    key={`lesson-${sectionIndex}-${lessonIndex}`}
                    className="px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-400">
                        {lesson.isPreview ? (
                          <Play className="h-4 w-4" />
                        ) : (
                          <Lock className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-gray-900">{lesson.title}</p>
                        {lesson.isPreview && (
                          <span className="text-xs text-primary font-medium">Preview available</span>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{lesson.duration}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseContent;
