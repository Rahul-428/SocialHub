import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import Posts from "./pages/Posts";
import Calendar from "./pages/Calendar";
import Messages from "./pages/Messages";
import Audience from "./pages/Audience";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Overview },
      { path: "analytics", Component: Analytics },
      { path: "posts", Component: Posts },
      { path: "calendar", Component: Calendar },
      { path: "messages", Component: Messages },
      { path: "audience", Component: Audience },
      { path: "reports", Component: Reports },
      { path: "settings", Component: Settings },
    ],
  },
]);