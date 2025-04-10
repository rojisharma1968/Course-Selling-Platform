
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import CourseCard from "@/components/courses/CourseCard";
import CategoryCard from "@/components/courses/CategoryCard";
import TestimonialCard from "@/components/home/TestimonialCard";
import courses from "@/data/courses";
import { categories } from "@/data/categories";
import testimonials from "@/data/testimonials";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredCourses = courses.filter(course => course.isFeatured);
  const popularCourses = courses.filter(course => course.isPopular).slice(0, 8);
  
  const featuredSlidesCount = Math.ceil(featuredCourses.length / 2);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredSlidesCount);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredSlidesCount) % featuredSlidesCount);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Featured Courses Section */}
      <section className="section-container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Courses</h2>
            <p className="text-gray-600 mt-1">Handpicked courses recommended for you</p>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              aria-label="Previous slide"
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              aria-label="Next slide"
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: featuredSlidesCount }).map((_, index) => (
              <div key={index} className="min-w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {featuredCourses
                    .slice(index * 2, index * 2 + 2)
                    .map(course => (
                      <CourseCard key={course.id} course={course} featured />
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 flex justify-center">
            {Array.from({ length: featuredSlidesCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full mx-1 ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Popular Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most popular course categories to find the right fit for your learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Courses Section */}
      <section className="section-container">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Most Popular Courses</h2>
          <p className="text-gray-600 mt-1">Learn from the most popular courses chosen by our students</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCourses.slice(0, 8).map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thousands of students have transformed their careers with SkillSphere courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-container bg-primary/5 py-16 rounded-lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Join thousands of students already learning on SkillSphere. Start exploring our courses today and take the first step towards your next achievement.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 py-6 px-8 text-lg">
            <Link to="/courses">
              Browse All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
