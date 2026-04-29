import { AnalyticsCards } from "../components/AnalyticsCards";
import { GrowthChart } from "../components/GrowthChart";
import { EngagementChart } from "../components/EngagementChart";
import { RecentPosts } from "../components/RecentPosts";
import { ScheduledCalendar } from "../components/ScheduledCalendar";
import { PlatformBreakdown } from "../components/PlatformBreakdown";
import { ActivityFeed } from "../components/ActivityFeed";
import { QuickInsights } from "../components/QuickInsights";

export default function Overview() {
  return (
    <>
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your social media accounts.</p>
      </div>

      {/* Analytics Cards */}
      <div className="mb-8">
        <AnalyticsCards />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <GrowthChart />
        <EngagementChart />
      </div>

      {/* Quick Insights and Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        <div>
          <QuickInsights />
        </div>
      </div>

      {/* Platform Breakdown */}
      <div className="mb-8">
        <PlatformBreakdown />
      </div>

      {/* Recent Posts and Scheduled Calendar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentPosts />
        <ScheduledCalendar />
      </div>
    </>
  );
}
