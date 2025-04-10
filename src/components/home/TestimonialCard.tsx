
import { Star } from "lucide-react";
import { Review } from "@/data/types";

interface TestimonialCardProps {
  testimonial: Review;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 hover-card-effect h-full">
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill={i < testimonial.rating ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        <span className="text-gray-500 text-sm ml-2">
          {formatDate(testimonial.date)}
        </span>
      </div>
      
      <p className="text-gray-700 mb-4">{testimonial.comment}</p>
      
      <div className="flex items-center">
        <img
          src={testimonial.userAvatar}
          alt={testimonial.userName}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <p className="font-medium text-gray-900">{testimonial.userName}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
