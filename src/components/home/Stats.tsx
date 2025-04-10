
import { BookOpen, Users, Award, Globe } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      value: "500+",
      label: "Online Courses",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "100K+",
      label: "Active Students",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "150+",
      label: "Expert Instructors",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: "12+",
      label: "Languages",
    },
  ];

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
