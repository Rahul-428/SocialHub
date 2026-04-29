import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Clock, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 30)); // March 30, 2026
  const [viewMode, setViewMode] = useState<"month" | "week">("month");

  const scheduledPosts = [
    {
      id: 1,
      title: "Product Launch Announcement",
      platform: "Instagram",
      date: new Date(2026, 2, 31, 10, 0),
      image: "https://images.unsplash.com/photo-1611930021698-a55ec4d5fe6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBtaW5pbWFsfGVufDF8fHx8MTc3NDg2OTE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "purple",
    },
    {
      id: 2,
      title: "Behind the Scenes",
      platform: "Facebook",
      date: new Date(2026, 3, 1, 14, 30),
      image: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzc0ODUyODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "blue",
    },
    {
      id: 3,
      title: "Weekly Industry News",
      platform: "LinkedIn",
      date: new Date(2026, 3, 2, 9, 0),
      image: "https://images.unsplash.com/photo-1762953007649-8ea70115059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGV2aWNlJTIwbW9kZXJufGVufDF8fHx8MTc3NDg1MjM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "indigo",
    },
    {
      id: 4,
      title: "Customer Success Story",
      platform: "Twitter",
      date: new Date(2026, 3, 2, 16, 0),
      image: "https://images.unsplash.com/photo-1633675254386-dc5bb4279d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBvc3QlMjBtb2Rlcm4lMjBtaW5pbWFsfGVufDF8fHx8MTc3NDg3MjY2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "cyan",
    },
    {
      id: 5,
      title: "Tips & Tricks Tuesday",
      platform: "Instagram",
      date: new Date(2026, 3, 3, 11, 0),
      image: "https://images.unsplash.com/photo-1516763449302-78450e5a507d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbGlmZXN0eWxlJTIwYmxvZ3xlbnwxfHx8fDE3NzQ4NzI5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "purple",
    },
    {
      id: 6,
      title: "Weekend Special Offer",
      platform: "Facebook",
      date: new Date(2026, 3, 5, 10, 0),
      image: "https://images.unsplash.com/photo-1612192666336-561178b9cbfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzc0ODE1MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "blue",
    },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const getPostsForDate = (day: number) => {
    return scheduledPosts.filter(
      (post) =>
        post.date.getMonth() === currentDate.getMonth() &&
        post.date.getDate() === day &&
        post.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const platformIcons: Record<string, any> = {
    Instagram: Instagram,
    Facebook: Facebook,
    Twitter: Twitter,
    LinkedIn: Linkedin,
  };

  return (
    <>
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Calendar</h1>
          <p className="text-gray-600">Schedule and manage your posts across all platforms</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Schedule Post
        </button>
      </div>

      {/* Calendar Controls */}
      <div className="mb-6 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h2 className="text-xl font-semibold text-gray-900">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("month")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === "month" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setViewMode("week")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === "week" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Week
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {/* Empty cells for days before month starts */}
          {Array.from({ length: startingDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} className="aspect-square border border-gray-100 rounded-lg bg-gray-50"></div>
          ))}

          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const posts = getPostsForDate(day);
            const isToday = day === 30 && currentDate.getMonth() === 2; // March 30, 2026

            return (
              <div
                key={day}
                className={`aspect-square border rounded-lg p-2 hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer ${
                  isToday ? "border-blue-500 bg-blue-50" : "border-gray-200"
                }`}
              >
                <div className={`text-sm font-semibold mb-1 ${isToday ? "text-blue-600" : "text-gray-900"}`}>
                  {day}
                </div>
                <div className="space-y-1">
                  {posts.slice(0, 2).map((post) => {
                    const Icon = platformIcons[post.platform];
                    return (
                      <div
                        key={post.id}
                        className={`text-xs p-1 rounded bg-${post.color}-100 text-${post.color}-700 truncate flex items-center gap-1`}
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{post.date.getHours()}:00</span>
                      </div>
                    );
                  })}
                  {posts.length > 2 && (
                    <div className="text-xs text-gray-500 pl-1">+{posts.length - 2} more</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Posts */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scheduledPosts.slice(0, 6).map((post) => {
            const Icon = platformIcons[post.platform];
            return (
              <div
                key={post.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="relative aspect-video bg-gray-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 text-${post.color}-600`} />
                    <span className="text-xs font-medium text-gray-600">{post.platform}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {post.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })} at{" "}
                      {post.date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
