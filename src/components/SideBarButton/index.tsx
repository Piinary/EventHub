import { Link } from "react-router-dom";

function SideBarButton({
  icon,
  text,
  active,
  alert,
  path,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert: number;
  path: string;
  onClick?: () => void;
}) {
  return (
    <Link
    to={path}
      className={`no-underline text-black relative flex items-center rounded-lg px-3 py-2 my-1 cursor-pointer transition-colors text-xl hover:bg-primary-hover
        ${active ? "font-bold" : ""}`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-5">{text}</span>
      {alert > 0 && (
        <div
          className={`absolute top-1 left-3 w-4 h-4 rounded-full bg-primary flex items-center justify-center
            ${alert > 99 ? "text-[9px] px-1" : "text-xs"}`}
        >
          {alert > 99 ? "99+" : alert}
        </div>
      )}
    </Link>
  );
}

export default SideBarButton;
