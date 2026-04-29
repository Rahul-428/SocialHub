import { TrendingUp, TrendingDown } from "lucide-react";

export function PlatformBreakdown() {
  const platforms = [
    {
      name: "Instagram",
      followers: "89.2K",
      engagement: "9.2%",
      posts: 142,
      trend: "up",
      change: "+14.3%",
      color: "purple",
      icon: "📸",
    },
    {
      name: "Facebook",
      followers: "49.8K",
      engagement: "6.8%",
      posts: 98,
      trend: "up",
      change: "+8.7%",
      color: "blue",
      icon: "👍",
    },
    {
      name: "Twitter",
      followers: "35.4K",
      engagement: "7.5%",
      posts: 234,
      trend: "up",
      change: "+12.1%",
      color: "cyan",
      icon: "🐦",
    },
    {
      name: "LinkedIn",
      followers: "24.6K",
      engagement: "11.3%",
      posts: 67,
      trend: "up",
      change: "+19.5%",
      color: "indigo",
      icon: "💼",
    },
  ];

  const colorClasses = {
    purple: "border-purple-200 bg-purple-50/50 hover:border-purple-300",
    blue: "border-blue-200 bg-blue-50/50 hover:border-blue-300",
    cyan: "border-cyan-200 bg-cyan-50/50 hover:border-cyan-300",
    indigo: "border-indigo-200 bg-indigo-50/50 hover:border-indigo-300",
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Platform Breakdown</h2>
        <p className="text-sm text-gray-500">Performance across all channels</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className={`border-2 rounded-xl p-5 transition-all cursor-pointer ${
              colorClasses[platform.color as keyof typeof colorClasses]
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{platform.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{platform.name}</h3>
                  <p className="text-sm text-gray-500">{platform.posts} posts</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                <TrendingUp className="w-4 h-4" />
                {platform.change}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Followers</span>
                <span className="text-lg font-bold text-gray-900">{platform.followers}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Engagement</span>
                <span className="text-lg font-bold text-gray-900">{platform.engagement}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>Monthly Goal</span>
                <span>82% reached</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
