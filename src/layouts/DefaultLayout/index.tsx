import React, { useState } from "react";
import SideBar from "../components/SideBar";
import {
  House,
  Heart,
  Search,
  MessageCircle,
  PlusCircle,
  Bookmark,
  User,
  Menu,
} from "lucide-react";
import SideBarButton from "../../components/SideBarButton";

const sideBarItemsConfig = [
  { icon: House, text: "Home", alert: 0, path: "/" },
  { icon: Search, text: "Explore", alert: 0, path: "/explore" },
  { icon: Heart, text: "Notifications", alert: 1, path: "/notifications" },
  { icon: MessageCircle, text: "Messages", alert: 102, path: "/messages" },
  { icon: PlusCircle, text: "Create", alert: 0, path: "/create" },
  { icon: Bookmark, text: "Saved", alert: 0, path: "/saved" },
  { icon: User, text: "Profile", alert: 0, path: "/profile" },
  { icon: Menu, text: "More", alert: 0, path: "/more" },
];

function DefaultLayout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  return (
    <div className="font-title flex">
      <SideBar position="left" >
        {sideBarItemsConfig.map((item, index) => (
          <SideBarButton
            key={index}
            icon={
              <item.icon
                size={32}
                strokeWidth={active === index ? "2.5" : "1.5"}
              />
            }
            text={item.text}
            active={active === index}
            alert={item.alert}
            onClick={() => setActive(index)}
            path={item.path}
          />
        ))}
      </SideBar>
      <div>
      <div className="w-screen flex flex-col items-center">{children}</div>
      </div>
      <SideBar position="right">
        {sideBarItemsConfig.map((item, index) => (
          <SideBarButton
            key={index}
            icon={
              <item.icon
                size={32}
                strokeWidth={active === index ? "2.5" : "1.5"}
              />
            }
            text={item.text}
            active={active === index}
            alert={item.alert}
            onClick={() => setActive(index)}
            path={item.path}
          />
        ))}
      </SideBar>
    </div>
  );
}

export default DefaultLayout;
