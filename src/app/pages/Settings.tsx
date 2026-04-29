import { useState } from "react";
import { User, Bell, Lock, CreditCard, Instagram, Facebook, Twitter, Linkedin, Globe, Save } from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "accounts", label: "Social Accounts", icon: Globe },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "billing", label: "Billing", icon: CreditCard },
  ];

  const connectedAccounts = [
    {
      platform: "Instagram",
      username: "@socialhub",
      connected: true,
      followers: "89.2K",
      icon: Instagram,
      color: "purple",
    },
    {
      platform: "Facebook",
      username: "SocialHub Page",
      connected: true,
      followers: "49.8K",
      icon: Facebook,
      color: "blue",
    },
    {
      platform: "Twitter",
      username: "@social_hub",
      connected: true,
      followers: "35.4K",
      icon: Twitter,
      color: "cyan",
    },
    {
      platform: "LinkedIn",
      username: "SocialHub Company",
      connected: true,
      followers: "24.6K",
      icon: Linkedin,
      color: "indigo",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and integrations</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar Tabs */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="col-span-9">
          {/* Profile Settings */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>
              
              <div className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-6">
                  <img
                    src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDgwNzI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium mb-2">
                      Upload new photo
                    </button>
                    <p className="text-xs text-gray-500">JPG, PNG or GIF. Max size 2MB</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="Rahul"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Mathur"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="rahul@company.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    rows={4}
                    defaultValue="Social media marketing specialist passionate about creating engaging content and building meaningful connections."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                  <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Social Accounts */}
          {activeTab === "accounts" && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Connected Social Accounts</h2>
              <p className="text-sm text-gray-600 mb-6">Manage your social media platform integrations</p>

              <div className="space-y-4">
                {connectedAccounts.map((account) => (
                  <div
                    key={account.platform}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-${account.color}-100 rounded-lg flex items-center justify-center`}>
                        <account.icon className={`w-6 h-6 text-${account.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">{account.platform}</h3>
                        <p className="text-sm text-gray-600">{account.username}</p>
                        <p className="text-xs text-gray-500">{account.followers} followers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {account.connected && (
                        <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                          Connected
                        </span>
                      )}
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                        {account.connected ? "Disconnect" : "Connect"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Notification Preferences</h2>
              <p className="text-sm text-gray-600 mb-6">Choose what updates you want to receive</p>

              <div className="space-y-4">
                {[
                  { title: "New Comments", description: "Get notified when someone comments on your posts" },
                  { title: "New Followers", description: "Get notified when you gain new followers" },
                  { title: "Post Performance", description: "Receive alerts when posts are performing well" },
                  { title: "Scheduled Posts", description: "Reminders before scheduled posts go live" },
                  { title: "Weekly Report", description: "Receive weekly analytics summary via email" },
                  { title: "Marketing Tips", description: "Get tips and best practices from our team" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <label className="relative inline-block w-12 h-6">
                      <input type="checkbox" defaultChecked={index < 4} className="sr-only peer" />
                      <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-6 border-t border-gray-200 mt-6">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Security */}
          {activeTab === "security" && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Enable 2FA</p>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Enable
                    </button>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Billing */}
          {activeTab === "billing" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Plan</h2>
                
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Professional Plan</h3>
                      <p className="text-blue-100">Perfect for growing businesses</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold">$49</p>
                      <p className="text-blue-100">per month</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Next billing date</p>
                      <p className="font-semibold">April 30, 2026</p>
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Payment method</p>
                      <p className="font-semibold">•••• 4242</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    Change Plan
                  </button>
                  <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    Update Payment Method
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Billing History</h2>
                
                <div className="space-y-3">
                  {[
                    { date: "Mar 30, 2026", amount: "₹3,999", status: "Paid", invoice: "#INV-2603" },
                    { date: "Feb 28, 2026", amount: "₹3,999", status: "Paid", invoice: "#INV-2602" },
                    { date: "Jan 30, 2026", amount: "₹3,999", status: "Paid", invoice: "#INV-2601" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{item.invoice}</p>
                          <p className="text-sm text-gray-600">{item.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-gray-900">{item.amount}</span>
                        <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                          {item.status}
                        </span>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}