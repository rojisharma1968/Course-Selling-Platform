
import { Link } from "react-router-dom";
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would handle newsletter submission in a real app
    alert("Thanks for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-gray-50 pt-12 pb-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-bold text-gray-900">SkillSphere</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Empowering learners worldwide with high-quality online courses.
              Master new skills and advance your career with expert instructors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-primary">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-gray-600 hover:text-primary">
                  Instructors
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Categories
                </a>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-primary">
                  My Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to get updates on new courses and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="border-gray-300"
                />
                <Button type="submit" className="whitespace-nowrap">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} SkillSphere. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-primary text-sm">
                Help Center
              </a>
              <a href="mailto:support@skillsphere.example.com" className="text-gray-600 hover:text-primary text-sm flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
