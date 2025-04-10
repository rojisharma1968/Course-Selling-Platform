
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ContinueLearning from "@/components/dashboard/ContinueLearning";

const UserNavigation = () => {
  return (
    <div className="flex items-center gap-4">
      <ContinueLearning />
      
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar className="h-9 w-9 border border-gray-200">
            <AvatarFallback className="bg-primary/10 text-primary">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/dashboard" className="cursor-pointer">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard" className="cursor-pointer">My Courses</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard" className="cursor-pointer">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserNavigation;
