import { TrendingUp, AlertCircle, Zap, Target } from "lucide-react";

export function QuickInsights() {
  const insights = [
    {
      icon: TrendingUp,
      color: "green",
      title: "Best performing post",
      description: "Instagram post got 3.2x avg engagement",
      action: "View details",
    },
    {
      icon: Zap,
      color: "purple",
      title: "Peak engagement time",
      description: "Your audience is most active at 2-4 PM",
      action: "Schedule posts",
    },
    {
      icon: Target,
      color: "blue",
      title: "Goal progress",
      description: "85% to monthly follower target",
      action: "Track progress",
    },
    {
      icon: AlertCircle,
      color: "orange",
      title: "Action needed",
      description: "3 comments awaiting response",
      action: "View messages",
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; icon: string }> = {
    green: { bg: "bg-green-50", text: "text-green-700", icon: "bg-green-100" },
    purple: { bg: "bg-purple-50", text: "text-purple-700", icon: "bg-purple-100" },
    blue: { bg: "bg-blue-50", text: "text-blue-700", icon: "bg-blue-100" },
    orange: { bg: "bg-orange-50", text: "text-orange-700", icon: "bg-orange-100" },
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Quick Insights</h2>
        <p className="text-sm text-gray-500">AI-powered recommendations</p>
      </div>

      <div className="space-y-3">
        {insights.map((insight, index) => {
          const colors = colorClasses[insight.color];
          return (
            <div
              key={index}
              className={`p-4 rounded-lg border border-gray-200 ${colors.bg} hover:shadow-md transition-all cursor-pointer`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${colors.icon}`}>
                  <insight.icon className={`w-4 h-4 ${colors.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-semibold mb-1 ${colors.text}`}>
                    {insight.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">{insight.description}</p>
                  <button className={`text-xs font-medium ${colors.text} hover:underline`}>
                    {insight.action} →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
