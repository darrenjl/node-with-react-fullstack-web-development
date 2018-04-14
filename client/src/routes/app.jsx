import DashboardPage from "views/Survey/Dashboard.jsx";
import SurveyNewPage from "views/Survey/SurveyNew";
// import UserProfile from "mdviews/UserProfile/UserProfile.jsx";
// import TableList from "mdviews/TableList/TableList.jsx";
// import Typography from "mdviews/Typography/Typography.jsx";
// import Icons from "mdviews/Icons/Icons.jsx";
// import Maps from "mdviews/Maps/Maps.jsx";
// import NotificationsPage from "mdviews/Notifications/Notifications.jsx";

import {
  Dashboard,
  Add
  // Person,
  // ContentPaste,
  // LibraryBooks,
  // BubbleChart,
  // LocationOn,
  // Notifications
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/surveys/new",
    sidebarName: "Create survey",
    navbarName: "Create survey",
    icon: Add,
    component: SurveyNewPage
  },
  // {
  //   path: "/table",
  //   sidebarName: "Table List",
  //   navbarName: "Table List",
  //   icon: ContentPaste,
  //   component: TableList
  // },
  // {
  //   path: "/typography",
  //   sidebarName: "Typography",
  //   navbarName: "Typography",
  //   icon: LibraryBooks,
  //   component: Typography
  // },
  // {
  //   path: "/icons",
  //   sidebarName: "Icons",
  //   navbarName: "Icons",
  //   icon: BubbleChart,
  //   component: Icons
  // },
  // {
  //   path: "/maps",
  //   sidebarName: "Maps",
  //   navbarName: "Map",
  //   icon: LocationOn,
  //   component: Maps
  // },
  // {
  //   path: "/notifications",
  //   sidebarName: "Notifications",
  //   navbarName: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage
  // },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
