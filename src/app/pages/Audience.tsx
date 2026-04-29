import { Users, TrendingUp, MapPin, Clock, Filter, Download } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from "recharts";

export default function Audience() {
  const audienceStats = [
    { title: "Total Followers", value: "198.5K", change: "+12.5%", trend: "up" },
    { title: "Active Followers", value: "156.2K", change: "+8.3%", trend: "up" },
    { title: "New This Month", value: "12.8K", change: "+24.1%", trend: "up" },
    { title: "Unfollowers", value: "2.3K", change: "-5.2%", trend: "down" },
  ];

  const demographicsAge = [
    { age: "18-24", count: 45000, percentage: 22.7 },
    { age: "25-34", count: 78000, percentage: 39.3 },
    { age: "35-44", count: 52000, percentage: 26.2 },
    { age: "45-54", count: 18500, percentage: 9.3 },
    { age: "55+", count: 5000, percentage: 2.5 },
  ];

  const genderData = [
    { name: "Male", value: 58, color: "#3b82f6" },
    { name: "Female", value: 40, color: "#8b5cf6" },
    { name: "Other", value: 2, color: "#10b981" },
  ];

  const locationData = [
    { city: "Mumbai", followers: 45200, growth: "+15.2%" },
    { city: "Delhi", followers: 38900, growth: "+12.8%" },
    { city: "Bangalore", followers: 35600, growth: "+18.5%" },
    { city: "Hyderabad", followers: 22400, growth: "+10.3%" },
    { city: "Chennai", followers: 19800, growth: "+14.7%" },
    { city: "Pune", followers: 16300, growth: "+11.9%" },
    { city: "Kolkata", followers: 12400, growth: "+8.4%" },
    { city: "Ahmedabad", followers: 7900, growth: "+9.2%" },
  ];

  const activeHours = [
    { hour: "12 AM", activity: 12 },
    { hour: "3 AM", activity: 8 },
    { hour: "6 AM", activity: 25 },
    { hour: "9 AM", activity: 68 },
    { hour: "12 PM", activity: 85 },
    { hour: "3 PM", activity: 95 },
    { hour: "6 PM", activity: 88 },
    { hour: "9 PM", activity: 72 },
  ];

  const interestData = [
    { interest: "Technology", percentage: 85, count: 168925 },
    { interest: "Fashion", percentage: 72, count: 142920 },
    { interest: "Travel", percentage: 68, count: 134980 },
    { interest: "Food", percentage: 64, count: 127040 },
    { interest: "Fitness", percentage: 58, count: 115130 },
    { interest: "Photography", percentage: 52, count: 103220 },
    { interest: "Business", percentage: 48, count: 95280 },
    { interest: "Music", percentage: 45, count: 89325 },
  ];

  const topFollowers = [
    {
      name: "Aditya Verma",
      avatar: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzQ4NDMzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      username: "@aditya_verma",
      engagement: 95,
      followers: "45.2K",
    },
    {
      name: "Kavya Reddy",
      avatar: "https://images.unsplash.com/photo-1580643735948-c52d25d9c07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0ODcyOTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      username: "@kavya_reddy",
      engagement: 92,
      followers: "38.7K",
    },
    {
      name: "Rohan Malhotra",
      avatar: "https://images.unsplash.com/photo-1652795385697-1e5e522c98d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMGF2YXRhcnxlbnwxfHx8fDE3NzQ4NjQ1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      username: "@rohan_m",
      engagement: 88,
      followers: "32.4K",
    },
    {
      name: "Ananya Iyer",
      avatar: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDgwNzI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      username: "@ananya_iyer",
      engagement: 85,
      followers: "28.9K",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Audience Insights</h1>
          <p className="text-gray-600">Understand your followers and their behavior</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {audienceStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-10 h-10 p-2 bg-blue-100 text-blue-600 rounded-lg" />
              <span className={`text-sm font-semibold ${stat.trend === "up" ? "text-green-600" : "text-red-600"} bg-${stat.trend === "up" ? "green" : "red"}-50 px-2 py-1 rounded`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Demographics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Age Distribution */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Age Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={demographicsAge}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="age" stroke="#9ca3af" style={{ fontSize: "12px" }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => [value.toLocaleString(), "Followers"]}
              />
              <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gender Distribution */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Gender Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Locations */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Top Locations</h2>
            <p className="text-sm text-gray-500">Where your audience is from</p>
          </div>
          <MapPin className="w-6 h-6 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {locationData.map((location, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900">{location.city}</h3>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                  {location.growth}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{location.followers.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">followers</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Hours */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-gray-600" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Most Active Hours</h2>
            <p className="text-sm text-gray-500">When your audience is online</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={activeHours}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="hour" stroke="#9ca3af" style={{ fontSize: "12px" }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} tickFormatter={(value) => `${value}%`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
              formatter={(value: number) => [`${value}%`, "Activity"]}
            />
            <Line type="monotone" dataKey="activity" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: "#8b5cf6", r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Interests and Top Followers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Interests */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Interests</h2>
          <div className="space-y-4">
            {interestData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{item.interest}</span>
                  <span className="text-sm font-semibold text-gray-600">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.count.toLocaleString()} followers</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Followers */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Top Engaged Followers</h2>
              <p className="text-sm text-gray-500">Your most active audience members</p>
            </div>
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-4">
            {topFollowers.map((follower, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer"
              >
                <img
                  src={follower.avatar}
                  alt={follower.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">{follower.name}</h3>
                  <p className="text-xs text-gray-500">{follower.username}</p>
                  <p className="text-xs text-gray-600 mt-1">{follower.followers} followers</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-blue-600">{follower.engagement}%</div>
                  <p className="text-xs text-gray-500">engagement</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
