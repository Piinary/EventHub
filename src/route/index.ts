import Home from "../pages/Home";
import config from "../config";
import Profile from "../pages/Profile";
import Explore from "../pages/Explore";
import Notifications from "../pages/Notifications";
import Messages from "../pages/Messages";
import Create from "../pages/Create";
import Saved from "../pages/Saved";
import More from "../pages/More";
import DetailPage from "../pages/DetailPage";
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.explore, component: Explore},
  { path: config.routes.notifications, component: Notifications},
  { path: config.routes.messages, component: Messages},
  { path: config.routes.create, component: Create},
  { path: config.routes.saved, component: Saved},
  { path: config.routes.profile, component: Profile },
  { path: config.routes.more, component: More},
  { path: config.routes.detailpage, component: DetailPage}
];

export { publicRoutes };
