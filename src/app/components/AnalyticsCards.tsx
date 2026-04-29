import { Users, TrendingUp, Eye, MousePointerClick } from "lucide-react";

export function AnalyticsCards() {
  const metrics = [
    {
      title: "Total Followers",
      value: "124.5K",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "blue",
    },
    {
      title: "Engagement Rate",
      value: "8.24%",
      change: "+2.4%",
      trend: "up",
      icon: TrendingUp,
      color: "purple",
    },
    {
      title: "Total Reach",
      value: "1.2M",
      change: "+18.2%",
      trend: "up",
      icon: Eye,
      color: "green",
    },
    {
      title: "Impressions",
      value: "3.4M",
      change: "+24.1%",
      trend: "up",
      icon: MousePointerClick,
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.title}
          className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg ${colorClasses[metric.color as keyof typeof colorClasses]}`}>
              <metric.icon className="w-6 h-6" />
            </div>
            <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
              {metric.change}
            </span>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">{metric.title}</h3>
          <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
        </div>
      ))}
    </div>
  );
}
