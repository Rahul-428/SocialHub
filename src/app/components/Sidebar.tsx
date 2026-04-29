import { 
  LayoutDashboard, 
  TrendingUp, 
  Calendar, 
  FileText, 
  BarChart3, 
  Settings, 
  Users, 
  MessageSquare 
} from "lucide-react";
import { Link, useLocation } from "react-router";
import profileImg from "../img/profile.png";

export function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: TrendingUp, label: "Analytics", path: "/analytics" },
    { icon: FileText, label: "Posts", path: "/posts" },
    { icon: Calendar, label: "Schedule", path: "/calendar" },
    { icon: MessageSquare, label: "Messages", path: "/messages" },
    { icon: Users, label: "Audience", path: "/audience" },
    { icon: BarChart3, label: "Reports", path: "/reports" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">SocialHub</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
          <img
            src={profileImg}
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Rahul Mathur</p>
            <p className="text-xs text-gray-500 truncate">rahul@company.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}