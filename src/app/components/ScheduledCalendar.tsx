import { Calendar as CalendarIcon, Clock, Plus } from "lucide-react";

export function ScheduledCalendar() {
  const scheduledPosts = [
    {
      id: 1,
      title: "Product Launch Announcement",
      platform: "Instagram",
      date: "Mar 31",
      time: "10:00 AM",
      status: "scheduled",
    },
    {
      id: 2,
      title: "Behind the Scenes",
      platform: "Facebook",
      date: "Apr 01",
      time: "2:30 PM",
      status: "scheduled",
    },
    {
      id: 3,
      title: "Weekly Industry News",
      platform: "LinkedIn",
      date: "Apr 02",
      time: "9:00 AM",
      status: "scheduled",
    },
    {
      id: 4,
      title: "Customer Success Story",
      platform: "Twitter",
      date: "Apr 02",
      time: "4:00 PM",
      status: "scheduled",
    },
    {
      id: 5,
      title: "Tips & Tricks Tuesday",
      platform: "Instagram",
      date: "Apr 03",
      time: "11:00 AM",
      status: "scheduled",
    },
  ];

  const platformColors = {
    Instagram: "bg-purple-500",
    LinkedIn: "bg-blue-600",
    Facebook: "bg-blue-500",
    Twitter: "bg-cyan-500",
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Scheduled Posts</h2>
          <p className="text-sm text-gray-500">Upcoming content calendar</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          <Plus className="w-4 h-4" />
          Schedule Post
        </button>
      </div>

      <div className="space-y-3">
        {scheduledPosts.map((post) => (
          <div
            key={post.id}
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/50 transition-all cursor-pointer"
          >
            <div className={`w-1 h-12 rounded-full ${platformColors[post.platform as keyof typeof platformColors]}`}></div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 truncate mb-1">
                {post.title}
              </h4>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.time}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                {post.platform}
              </span>
              <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full font-medium">
                Scheduled
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
        View Full Calendar
      </button>
    </div>
  );
}
