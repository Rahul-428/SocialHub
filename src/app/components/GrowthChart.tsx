import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export function GrowthChart() {
  const data = [
    { month: "Jan", instagram: 45000, facebook: 32000, twitter: 18000, linkedin: 12000 },
    { month: "Feb", instagram: 52000, facebook: 35000, twitter: 21000, linkedin: 14000 },
    { month: "Mar", instagram: 61000, facebook: 38000, twitter: 24000, linkedin: 16000 },
    { month: "Apr", instagram: 68000, facebook: 41000, twitter: 27000, linkedin: 18000 },
    { month: "May", instagram: 78000, facebook: 45000, twitter: 31000, linkedin: 21000 },
    { month: "Jun", instagram: 89000, facebook: 49000, twitter: 35000, linkedin: 24000 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Follower Growth</h2>
        <p className="text-sm text-gray-500">Track your audience growth across platforms</p>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
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
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="instagram" 
            stroke="#8b5cf6" 
            strokeWidth={3}
            dot={{ fill: '#8b5cf6', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="facebook" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="twitter" 
            stroke="#06b6d4" 
            strokeWidth={3}
            dot={{ fill: '#06b6d4', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="linkedin" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
