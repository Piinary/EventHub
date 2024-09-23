import { Ellipsis } from "lucide-react";
interface Props {
  children: React.ReactNode;
  position: 'left'|'right';
}
function SideBar(props: Props) {
  return (
    <div className={`h-screen w-72 float  ${ props.position=='right'? 'right-0' : 'left-0'}` } >
      <nav className="h-full flex flex-col bg-[var(--neutral)]">
        {/* <div className="flex justify-between items-center pl-5">
            <img src="src\assets\logo.png" alt="logo" className="w-50" />
          </div> */}
        <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)] text-left m-4   ">
          EventHub
        </h1>
        <div className="flex-1 px-2 ">{props.children}</div>
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
    </div>
  );
}

export default SideBar;
