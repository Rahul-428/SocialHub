import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export function EngagementChart() {
  const data = [
    { day: "Mon", likes: 4200, comments: 890, shares: 320 },
    { day: "Tue", likes: 3800, comments: 750, shares: 280 },
    { day: "Wed", likes: 5100, comments: 1100, shares: 420 },
    { day: "Thu", likes: 4600, comments: 920, shares: 360 },
    { day: "Fri", likes: 6200, comments: 1350, shares: 540 },
    { day: "Sat", likes: 5800, comments: 1200, shares: 480 },
    { day: "Sun", likes: 4900, comments: 980, shares: 390 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Weekly Engagement</h2>
        <p className="text-sm text-gray-500">Likes, comments, and shares breakdown</p>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="day" 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
            formatter={(value: number) => value.toLocaleString()}
          />
          <Legend 
            wrapperStyle={{ fontSize: '12px' }}
          />
          <Bar dataKey="likes" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
          <Bar dataKey="comments" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          <Bar dataKey="shares" fill="#10b981" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
