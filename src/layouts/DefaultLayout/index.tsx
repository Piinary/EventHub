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
import { useAppContext } from "../../context";

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
  const {activePage, setActivePage} = useAppContext();
  return (
    <div className="font-title flex">
      <SideBar position="left" fixed >
        {sideBarItemsConfig.map((item, index) => (
          <SideBarButton
          
            key={index}
            icon={
              <item.icon
                size={32}
                strokeWidth={activePage === index ? "2.5" : "1.5"}
              />
            }
            text={item.text}
            active={activePage === index}
            alert={item.alert}
            onClick={() => setActivePage(index)}
            path={item.path}
          />
        ))}
      </SideBar>
      <div className="w-screen ml-[332px]">{children}



      </div>

     

    </div>
  );
}

export default DefaultLayout;
