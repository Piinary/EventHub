import { Ellipsis } from "lucide-react";
function SideBar({ children }: { children: React.ReactNode }) {
  return (
      <aside className="h-screen w-72">
        <nav className="h-full flex flex-col bg-[var(--neutral)]">
          {/* <div className="flex justify-between items-center pl-5">
            <img src="src\assets\logo.png" alt="logo" className="w-50" />
          </div> */}
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)] text-left m-4   ">EventHub</h1>
          <div className="flex-1 px-2 ">{children}</div>
          <div className="flex p-3">
            <img
              src="src\assets\avt.png"
              alt="avt"
              className="w-14 h-14 rounded-full"
            />
            <div className={`flex justify-between items-center w-52 ml-3`}>
              <div>
                <div className="font-bold text-lg">Phu Qui Vo</div>
                <span className="text-xs text-gray-500">
                  phuquivo03.cb@gmail.com
                </span>
              </div>
              <Ellipsis size={24} />
            </div>
          </div>
        </nav>
      </aside>
  );
}

export default SideBar;


export function SideBarButton({
  icon,
  text,
  active,
  alert,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert: number;
  onClick?: () => void;
}) {
  return (
    <div
      className={`relative flex items-center rounded-lg px-3 py-2 my-1 cursor-pointer transition-colors text-xl hover:bg-primary-hover
      ${active ? "font-bold" : ""}`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-5">{text}</span>
      {alert > 0 && (
        <div
          className={`absolute top-1 left-4 w-5 h-5 rounded-full bg-primary flex items-center justify-center
          ${alert > 99 ? "text-[9px] px-1" : "text-xs"}`}
        >
          {alert > 99 ? "99+" : alert}
        </div>
      )}

    </div>
  );
}

