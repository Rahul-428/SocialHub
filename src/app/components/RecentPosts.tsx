import { Heart, MessageCircle, Share2, TrendingUp } from "lucide-react";

export function RecentPosts() {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1633675254386-dc5bb4279d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBvc3QlMjBtb2Rlcm4lMjBtaW5pbWFsfGVufDF8fHx8MTc3NDg3MjY2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Social Media Strategy Tips",
      platform: "Instagram",
      likes: 2847,
      comments: 183,
      shares: 94,
      performance: "high",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzc0ODUyODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Productivity Workspace Setup",
      platform: "LinkedIn",
      likes: 1921,
      comments: 67,
      shares: 145,
      performance: "high",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsaWZlc3R5bGUlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzc0ODcwNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Morning Routine Essentials",
      platform: "Facebook",
      likes: 1534,
      comments: 92,
      shares: 67,
      performance: "medium",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1762953007649-8ea70115059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGV2aWNlJTIwbW9kZXJufGVufDF8fHx8MTc3NDg1MjM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Tech Innovation Trends 2026",
      platform: "Twitter",
      likes: 3142,
      comments: 238,
      shares: 421,
      performance: "high",
    },
  ];

  const platformColors = {
    Instagram: "bg-purple-100 text-purple-700",
    LinkedIn: "bg-blue-100 text-blue-700",
    Facebook: "bg-blue-50 text-blue-600",
    Twitter: "bg-cyan-100 text-cyan-700",
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Recent Posts</h2>
          <p className="text-sm text-gray-500">Your latest published content</p>
        </div>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {post.performance === "high" && (
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  High
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 text-sm truncate flex-1">
                  {post.title}
                </h3>
                <span
                  className={`ml-2 text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                    platformColors[post.platform as keyof typeof platformColors]
                  }`}
                >
                  {post.platform}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  <span>{post.shares}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
