
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import UserNavigation from "./UserNavigation";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Courses", href: "/courses" },
    { title: "Instructors", href: "/instructors" },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-2xl text-primary">
            SkillSphere
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 hover:text-primary hover:bg-primary/5"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        
        {/* User Navigation (Desktop) */}
        <div className="hidden md:block">
          <UserNavigation />
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-1 px-4 py-3 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-md transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <UserNavigation />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
