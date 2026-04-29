import { TrendingUp, MessageCircle, Share2, Heart } from "lucide-react";

export function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: "post",
      platform: "Instagram",
      action: "New post published",
      title: "Summer Collection Launch",
      time: "2 hours ago",
      engagement: { likes: 1247, comments: 89 },
      avatar: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDgwNzI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const platformColors: Record<string, string> = {
    Instagram: "bg-purple-100 text-purple-700",
    LinkedIn: "bg-blue-100 text-blue-700",
    Twitter: "bg-cyan-100 text-cyan-700",
    Facebook: "bg-blue-50 text-blue-600",
  };

  const typeIcons: Record<string, any> = {
    post: MessageCircle,
    milestone: TrendingUp,
    engagement: Heart,
    scheduled: Share2,
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Recent Activity</h2>
        <p className="text-sm text-gray-500">Latest updates across all platforms</p>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = typeIcons[activity.type];
          return (
            <div
              key={activity.id}
              className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer"
            >
              <div className="flex-shrink-0">
                {activity.avatar ? (
                  <img
                    src={activity.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${platformColors[activity.platform]}`}>
                    {activity.platform}
                  </span>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{activity.action}</p>
                <p className="text-sm font-semibold text-gray-900 mb-2">{activity.title}</p>
                {activity.engagement && (
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" />
                      {activity.engagement.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {activity.engagement.comments}
                    </span>
                    {activity.engagement.shares && (
                      <span className="flex items-center gap-1">
                        <Share2 className="w-3.5 h-3.5" />
                        {activity.engagement.shares}
                      </span>
                    )}
                  </div>
                )}
                {activity.trend && (
                  <p className="text-xs text-green-600 font-medium">{activity.trend}</p>
                )}
                {activity.scheduledFor && (
                  <p className="text-xs text-blue-600 font-medium">📅 {activity.scheduledFor}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}