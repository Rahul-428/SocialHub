import { useState } from "react";
import { Search, Filter, Grid3x3, List, Plus, Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";

export default function Posts() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filterStatus, setFilterStatus] = useState("all");

  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1633675254386-dc5bb4279d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBvc3QlMjBtb2Rlcm4lMjBtaW5pbWFsfGVufDF8fHx8MTc3NDg3MjY2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Social Media Strategy Tips",
      caption: "10 proven strategies to grow your social media presence in 2026...",
      platform: "Instagram",
      status: "published",
      publishedAt: "Mar 28, 2026",
      likes: 2847,
      comments: 183,
      shares: 94,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1612192666336-561178b9cbfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzc0ODE1MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Delicious Food Photography",
      caption: "Capturing the perfect food shot for your restaurant menu...",
      platform: "Facebook",
      status: "published",
      publishedAt: "Mar 27, 2026",
      likes: 1534,
      comments: 92,
      shares: 67,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516763449302-78450e5a507d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbGlmZXN0eWxlJTIwYmxvZ3xlbnwxfHx8fDE3NzQ4NzI5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Spring Fashion Trends",
      caption: "Check out the latest fashion trends for spring season...",
      platform: "Instagram",
      status: "scheduled",
      publishedAt: "Mar 31, 2026 at 10:00 AM",
      likes: 0,
      comments: 0,
      shares: 0,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzc0ODUyODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Productivity Workspace Setup",
      caption: "Transform your workspace into a productivity powerhouse...",
      platform: "LinkedIn",
      status: "published",
      publishedAt: "Mar 26, 2026",
      likes: 1921,
      comments: 67,
      shares: 145,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1534443274343-c6200874852c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHNjZW5pY3xlbnwxfHx8fDE3NzQ4NTE4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Travel Destination Guide",
      caption: "Discover the most beautiful places to visit this summer...",
      platform: "Twitter",
      status: "draft",
      publishedAt: "Draft",
      likes: 0,
      comments: 0,
      shares: 0,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1760084081757-6f918c08403b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMG1vdGl2YXRpb258ZW58MXx8fHwxNzc0ODI1NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Fitness Motivation Monday",
      caption: "Start your week strong with these workout tips...",
      platform: "Instagram",
      status: "published",
      publishedAt: "Mar 25, 2026",
      likes: 3142,
      comments: 238,
      shares: 421,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1611930021698-a55ec4d5fe6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBtaW5pbWFsfGVufDF8fHx8MTc3NDg2OTE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Product Launch Teaser",
      caption: "Something exciting is coming soon... Stay tuned!",
      platform: "Facebook",
      status: "scheduled",
      publishedAt: "Apr 01, 2026 at 2:00 PM",
      likes: 0,
      comments: 0,
      shares: 0,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1762953007649-8ea70115059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGV2aWNlJTIwbW9kZXJufGVufDF8fHx8MTc3NDg1MjM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Tech Innovation Trends 2026",
      caption: "The future of technology is here. Explore the latest innovations...",
      platform: "LinkedIn",
      status: "published",
      publishedAt: "Mar 24, 2026",
      likes: 2567,
      comments: 189,
      shares: 312,
    },
  ];

  const statusColors: Record<string, string> = {
    published: "bg-green-100 text-green-700",
    scheduled: "bg-blue-100 text-blue-700",
    draft: "bg-gray-100 text-gray-700",
  };

  const platformColors: Record<string, string> = {
    Instagram: "bg-purple-100 text-purple-700",
    LinkedIn: "bg-blue-100 text-blue-700",
    Facebook: "bg-blue-50 text-blue-600",
    Twitter: "bg-cyan-100 text-cyan-700",
  };

  const filteredPosts = filterStatus === "all" ? posts : posts.filter(p => p.status === filterStatus);

  return (
    <>
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Posts Management</h1>
          <p className="text-gray-600">View and manage all your social media posts</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Create Post
        </button>
      </div>

      {/* Filters and View Toggle */}
      <div className="mb-6 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="scheduled">Scheduled</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Posts Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${statusColors[post.status]}`}>
                    {post.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${platformColors[post.platform]}`}>
                    {post.platform}
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">{post.title}</h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{post.caption}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{post.publishedAt}</span>
                </div>
                {post.status === "published" && (
                  <div className="flex items-center gap-4 text-xs text-gray-600 pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" />
                      {post.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="w-3.5 h-3.5" />
                      {post.shares}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Post</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Platform</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Engagement</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.title}</p>
                        <p className="text-xs text-gray-500 truncate max-w-xs">{post.caption}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${platformColors[post.platform]}`}>
                      {post.platform}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${statusColors[post.status]}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{post.publishedAt}</td>
                  <td className="py-4 px-4">
                    {post.status === "published" ? (
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span>{post.likes.toLocaleString()}</span>
                        <span>{post.comments}</span>
                        <span>{post.shares}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
