import { useState } from "react";
import { Filter, Calendar, Download } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";

export default function Analytics() {
  const [dateRange, setDateRange] = useState("30");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const growthData = [
    { month: "Jan", instagram: 45000, facebook: 32000, twitter: 18000, linkedin: 12000 },
    { month: "Feb", instagram: 52000, facebook: 35000, twitter: 21000, linkedin: 14000 },
    { month: "Mar", instagram: 61000, facebook: 38000, twitter: 24000, linkedin: 16000 },
    { month: "Apr", instagram: 68000, facebook: 41000, twitter: 27000, linkedin: 18000 },
    { month: "May", instagram: 78000, facebook: 45000, twitter: 31000, linkedin: 21000 },
    { month: "Jun", instagram: 89000, facebook: 49000, twitter: 35000, linkedin: 24000 },
  ];

  const engagementData = [
    { day: "Mon", rate: 7.2 },
    { day: "Tue", rate: 6.8 },
    { day: "Wed", rate: 8.5 },
    { day: "Thu", rate: 7.9 },
    { day: "Fri", rate: 9.2 },
    { day: "Sat", rate: 8.7 },
    { day: "Sun", rate: 7.4 },
  ];

  const platformData = [
    { name: "Instagram", value: 35, color: "#8b5cf6" },
    { name: "Facebook", value: 28, color: "#3b82f6" },
    { name: "Twitter", value: 22, color: "#06b6d4" },
    { name: "LinkedIn", value: 15, color: "#10b981" },
  ];

  const contentTypeData = [
    { type: "Images", posts: 142, engagement: 8.4 },
    { type: "Videos", posts: 67, engagement: 12.3 },
    { type: "Carousels", posts: 89, engagement: 10.1 },
    { type: "Stories", posts: 234, engagement: 6.8 },
    { type: "Reels", posts: 56, engagement: 15.7 },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
          <p className="text-gray-600">Detailed performance insights and metrics</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Filters */}
      <div className="mb-8 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="365">Last year</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Platforms</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
            </select>
          </div>
        </div>
      </div>

      {/* Growth Trend Chart */}
      <div className="mb-8 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Follower Growth Trend</h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
              formatter={(value: number) => value.toLocaleString()}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="instagram" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 4 }} />
            <Line type="monotone" dataKey="facebook" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 4 }} />
            <Line type="monotone" dataKey="twitter" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 4 }} />
            <Line type="monotone" dataKey="linkedin" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Engagement Rate and Platform Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Engagement Rate Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} tickFormatter={(value) => `${value}%`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
                formatter={(value: number) => `${value}%`}
              />
              <Bar dataKey="rate" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Platform Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Content Type Performance */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Content Type Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Content Type</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Total Posts</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Avg. Engagement Rate</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Performance</th>
              </tr>
            </thead>
            <tbody>
              {contentTypeData.map((content, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{content.type}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{content.posts}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{content.engagement}%</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-[120px]">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          style={{ width: `${(content.engagement / 20) * 100}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs font-medium ${content.engagement > 10 ? 'text-green-600' : 'text-gray-600'}`}>
                        {content.engagement > 10 ? 'High' : content.engagement > 7 ? 'Good' : 'Average'}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
