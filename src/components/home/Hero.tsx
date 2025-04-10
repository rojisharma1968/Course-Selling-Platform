
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient">
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master New Skills <br className="hidden md:block" />
              <span className="text-primary">Advance Your Career</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-xl">
              Learn from industry experts and join millions of students worldwide gaining the skills they need to succeed in today's digital economy.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="bg-primary hover:bg-primary/90 py-6 px-8 text-lg">
                <Link to="/courses">
                  Browse Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="py-6 px-8 text-lg border-gray-300">
                <Link to="/instructors">
                  Meet Instructors
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Students learning online"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-5 -left-5 bg-white shadow-lg rounded-lg p-4 max-w-xs hidden md:block">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <p className="font-semibold text-gray-900">Start learning today</p>
              </div>
              <p className="text-gray-600 text-sm">
                Join over 100,000 learners gaining in-demand skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
