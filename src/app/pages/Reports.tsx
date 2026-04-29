import { useState } from "react";
import { Download, FileText, TrendingUp, Calendar, Filter, Eye } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from "recharts";

export default function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const overviewMetrics = [
    {
      title: "Total Reach",
      value: "2.4M",
      change: "+18.2%",
      trend: "up",
      description: "Users who saw your content",
    },
    {
      title: "Engagement Rate",
      value: "8.24%",
      change: "+2.4%",
      trend: "up",
      description: "Average across all platforms",
    },
    {
      title: "Content Published",
      value: "142",
      change: "+12.0%",
      trend: "up",
      description: "Posts this month",
    },
    {
      title: "ROI",
      value: "₹2.8L",
      change: "+34.5%",
      trend: "up",
      description: "Return on investment",
    },
  ];

  const monthlyPerformance = [
    { month: "Jan", reach: 1800000, engagement: 145000, followers: 12500, posts: 45 },
    { month: "Feb", reach: 1950000, engagement: 158000, followers: 14200, posts: 48 },
    { month: "Mar", reach: 2100000, engagement: 172000, followers: 15800, posts: 52 },
    { month: "Apr", reach: 2250000, engagement: 185000, followers: 17500, posts: 55 },
    { month: "May", reach: 2350000, engagement: 195000, followers: 19200, posts: 58 },
    { month: "Jun", reach: 2400000, engagement: 198000, followers: 20800, posts: 62 },
  ];

  const platformComparison = [
    { platform: "Instagram", posts: 89, reach: 950000, engagement: 87500, rate: 9.2 },
    { platform: "Facebook", posts: 62, reach: 720000, engagement: 48960, rate: 6.8 },
    { platform: "Twitter", posts: 145, reach: 480000, engagement: 36000, rate: 7.5 },
    { platform: "LinkedIn", posts: 34, reach: 250000, engagement: 28250, rate: 11.3 },
  ];

  const contentPerformance = [
    { type: "Videos", posts: 45, avgReach: 52000, avgEngagement: 6400, roi: "₹1.2L" },
    { type: "Images", posts: 78, avgReach: 38000, avgEngagement: 4200, roi: "₹95K" },
    { type: "Carousels", posts: 56, avgReach: 45000, avgEngagement: 5800, roi: "₹1.1L" },
    { type: "Stories", posts: 124, avgReach: 28000, avgEngagement: 3200, roi: "₹68K" },
    { type: "Reels", posts: 32, avgReach: 68000, avgEngagement: 8900, roi: "₹1.5L" },
  ];

  const weeklyReport = [
    { week: "Week 1", impressions: 580000, clicks: 23200, conversions: 1856 },
    { week: "Week 2", impressions: 620000, clicks: 24800, conversions: 1984 },
    { week: "Week 3", impressions: 595000, clicks: 23800, conversions: 1904 },
    { week: "Week 4", impressions: 645000, clicks: 25800, conversions: 2064 },
  ];

  const savedReports = [
    {
      name: "Q1 2026 Performance Report",
      date: "Mar 30, 2026",
      type: "Quarterly",
      status: "Ready",
    },
    {
      name: "February Monthly Summary",
      date: "Mar 01, 2026",
      type: "Monthly",
      status: "Ready",
    },
    {
      name: "Instagram Campaign Analysis",
      date: "Feb 15, 2026",
      type: "Custom",
      status: "Ready",
    },
    {
      name: "Annual Report 2025",
      date: "Jan 05, 2026",
      type: "Annual",
      status: "Ready",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
          <p className="text-gray-600">Comprehensive insights and performance reports</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <FileText className="w-4 h-4" />
          Generate Report
        </button>
      </div>

      {/* Period Selector */}
      <div className="mb-6 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5 text-gray-600" />
            <div className="flex items-center gap-2">
              {["weekly", "monthly", "quarterly", "annual"].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                    selectedPeriod === period
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            <Filter className="w-4 h-4" />
            Custom Range
          </button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overviewMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                {metric.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{metric.title}</h3>
            <p className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</p>
            <p className="text-xs text-gray-500">{metric.description}</p>
          </div>
        ))}
      </div>

      {/* Monthly Performance Trend */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Trend</h2>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={monthlyPerformance}>
            <defs>
              <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: "12px" }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
              formatter={(value: number) => value.toLocaleString()}
            />
            <Legend />
            <Area type="monotone" dataKey="reach" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorReach)" strokeWidth={2} />
            <Area type="monotone" dataKey="engagement" stroke="#3b82f6" fillOpacity={1} fill="url(#colorEngagement)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Platform Comparison */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Platform Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Platform</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Posts</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Total Reach</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Engagement</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Avg. Rate</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Performance</th>
              </tr>
            </thead>
            <tbody>
              {platformComparison.map((platform, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{platform.platform}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{platform.posts}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{platform.reach.toLocaleString()}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{platform.engagement.toLocaleString()}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-900">{platform.rate}%</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-[120px]">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          style={{ width: `${(platform.rate / 12) * 100}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs font-medium ${platform.rate > 9 ? "text-green-600" : "text-gray-600"}`}>
                        {platform.rate > 9 ? "Excellent" : platform.rate > 7 ? "Good" : "Average"}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Content Performance and Weekly Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Content Performance */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Content Type Performance</h2>
          <div className="space-y-4">
            {contentPerformance.map((content, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-900">{content.type}</h3>
                  <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                    {content.posts} posts
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <p className="text-gray-500 mb-1">Avg. Reach</p>
                    <p className="font-semibold text-gray-900">{content.avgReach.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Avg. Engagement</p>
                    <p className="font-semibold text-gray-900">{content.avgEngagement.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">ROI</p>
                    <p className="font-semibold text-green-600">{content.roi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Breakdown */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Weekly Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyReport}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="week" stroke="#9ca3af" style={{ fontSize: "12px" }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => value.toLocaleString()}
              />
              <Legend />
              <Bar dataKey="impressions" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="clicks" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="conversions" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Saved Reports */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Saved Reports</h2>
            <p className="text-sm text-gray-500">Download previously generated reports</p>
          </div>
          <Eye className="w-5 h-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {savedReports.map((report, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{report.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{report.date}</span>
                    <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">
                      {report.type}
                    </span>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
