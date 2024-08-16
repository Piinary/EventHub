import SideBar, { SideBarButton } from "../components/SideBar";
import React from "react";
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

const sideBarItems = [
  {
    icon: House,
    text: "Home",
    active: true,
    alert: 0,
    onClick: () => console.log("Home clicked"),
  },
  {
    icon: Search,
    text: "Explore",
    active: false,
    alert: 0,
    onClick: () => console.log("Explore clicked"),
  },
  {
    icon: Heart,
    text: "Notifications",
    active: false,
    alert: 1, 
    onClick: () => console.log("Notifications clicked"),
  },
  {
    icon: MessageCircle,
    text: "Message",
    active: false,
    alert: 102,
    onClick: () => console.log("Message clicked"),
  },
  {
    icon: PlusCircle,
    text: "Create",
    active: false,
    alert: 0,
    onClick: () => console.log("Create clicked"),
  },
  {
    icon: Bookmark,
    text: "Saved",
    active: false,
    alert: 0,
    onClick: () => console.log("Saved clicked"),
  },
  {
    icon: User,
    text: "Profile",
    active: false,
    alert: 0,
    onClick: () => console.log("Profile clicked"),
  },
  {
    icon: Menu,
    text: "More",
    active: false,
    alert: 0,
    onClick: () => console.log("More clicked"),
  },
];

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-title">
      <SideBar>
        {sideBarItems.map((item, index) => (
          <SideBarButton
            key={index}
            icon={
              <item.icon size={32} strokeWidth={item.active ? "2.5" : "1.5"} />
            }
            text={item.text}
            active={item.active}
            alert={item.alert}
            onClick={item.onClick}
          />
        ))}
      </SideBar>
      <main>{children}</main>
    </div>
  );
}

export default DefaultLayout;
