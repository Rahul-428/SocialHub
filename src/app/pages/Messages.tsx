import { useState } from "react";
import { Search, Filter, Send, Smile, Paperclip, MoreVertical, Star } from "lucide-react";

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [messageText, setMessageText] = useState("");

  const conversations = [
    {
      id: 0,
      name: "Arjun Sharma",
      avatar: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzQ4NDMzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      platform: "Instagram",
      lastMessage: "That's exactly what I was looking for!",
      time: "2m ago",
      unread: 2,
      starred: true,
    },
    {
      id: 1,
      name: "Priya Kapoor",
      avatar: "https://images.unsplash.com/photo-1580643735948-c52d25d9c07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0ODcyOTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      platform: "Facebook",
      lastMessage: "When will the new product be available?",
      time: "15m ago",
      unread: 0,
      starred: false,
    },
    {
      id: 2,
      name: "Vikram Singh",
      avatar: "https://images.unsplash.com/photo-1652795385697-1e5e522c98d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMGF2YXRhcnxlbnwxfHx8fDE3NzQ4NjQ1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      platform: "LinkedIn",
      lastMessage: "Thanks for the detailed response!",
      time: "1h ago",
      unread: 0,
      starred: true,
    },
    {
      id: 3,
      name: "Neha Patel",
      avatar: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDgwNzI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      platform: "Twitter",
      lastMessage: "Love your recent post about social media trends!",
      time: "3h ago",
      unread: 1,
      starred: false,
    },
    {
      id: 4,
      name: "Amit Desai",
      avatar: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzQ4NDMzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      platform: "Instagram",
      lastMessage: "Can you share more details about pricing?",
      time: "5h ago",
      unread: 0,
      starred: false,
    },
  ];

  const messageThreads = [
    {
      id: 0,
      messages: [
        {
          id: 1,
          sender: "them",
          text: "Hi! I saw your recent post about the summer collection. Do you have more details?",
          time: "10:23 AM",
        },
        {
          id: 2,
          sender: "me",
          text: "Hi Arjun! Thanks for reaching out. Yes, we're launching our new summer collection next week. What specifically would you like to know?",
          time: "10:25 AM",
        },
        {
          id: 3,
          sender: "them",
          text: "I'm interested in the pricing and when it will be available for purchase.",
          time: "10:27 AM",
        },
        {
          id: 4,
          sender: "me",
          text: "The collection will be available starting April 5th. Prices range from ₹3,999 to ₹15,999. We'll also have a 20% early bird discount for the first week!",
          time: "10:28 AM",
        },
        {
          id: 5,
          sender: "them",
          text: "That's exactly what I was looking for!",
          time: "10:30 AM",
        },
      ],
    },
  ];

  const currentMessages = messageThreads[selectedConversation]?.messages || [];
  const currentContact = conversations[selectedConversation];

  const platformColors: Record<string, string> = {
    Instagram: "bg-purple-100 text-purple-700",
    LinkedIn: "bg-blue-100 text-blue-700",
    Facebook: "bg-blue-50 text-blue-600",
    Twitter: "bg-cyan-100 text-cyan-700",
  };

  return (
    <>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages & Inbox</h1>
        <p className="text-gray-600">Manage conversations from all your social platforms</p>
      </div>

      {/* Messages Container */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden" style={{ height: "calc(100vh - 280px)" }}>
        <div className="grid grid-cols-12 h-full">
          {/* Conversations List */}
          <div className="col-span-4 border-r border-gray-200 flex flex-col">
            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                    selectedConversation === conversation.id ? "bg-blue-50" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <img
                        src={conversation.avatar}
                        alt={conversation.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {conversation.unread > 0 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">{conversation.name}</h3>
                        <div className="flex items-center gap-1">
                          {conversation.starred && <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />}
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 truncate mb-1">{conversation.lastMessage}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${platformColors[conversation.platform]}`}>
                        {conversation.platform}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-8 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={currentContact.avatar}
                  alt={currentContact.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{currentContact.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${platformColors[currentContact.platform]}`}>
                    {currentContact.platform}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Star className={`w-5 h-5 ${currentContact.starred ? "text-yellow-500 fill-yellow-500" : "text-gray-400"}`} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {currentMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[70%] ${message.sender === "me" ? "order-2" : "order-1"}`}>
                    <div
                      className={`rounded-2xl p-3 ${
                        message.sender === "me"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-white text-gray-900 border border-gray-200 rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <span className={`text-xs text-gray-500 mt-1 block ${message.sender === "me" ? "text-right" : "text-left"}`}>
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Paperclip className="w-5 h-5" />
                    </button>
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent text-sm focus:outline-none"
                    />
                    <button className="text-gray-400 hover:text-gray-600">
                      <Smile className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}