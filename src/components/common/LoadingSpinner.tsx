
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullPage?: boolean;
}

const LoadingSpinner = ({ 
  size = "md", 
  text = "Loading...",
  fullPage = false
}: LoadingSpinnerProps) => {
  const getSize = () => {
    switch (size) {
      case "sm":
        return "h-4 w-4";
      case "lg":
        return "h-8 w-8";
      case "md":
      default:
        return "h-6 w-6";
    }
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <Loader2 className={`${getSize()} animate-spin text-primary`} />
      {text && <p className="mt-2 text-gray-600">{text}</p>}
    </div>
  );

  if (fullPage) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
