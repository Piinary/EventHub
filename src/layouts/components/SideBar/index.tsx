import { Ellipsis } from "lucide-react";
interface Props {
  children: React.ReactNode;
  position: 'left'|'right';
  fixed?: boolean;
}
function SideBar(props: Props) {
  return (
    <div className={`h-screen  float  ${ props.position=='right'? 'right-0 mr-4 w-[28vw]' : 'left-0 w-72'} ${props.fixed && 'fixed'}` } >
      <nav className="h-full flex flex-col bg-[var(--neutral)] pt-4">
        {/* <div className="flex justify-between items-center pl-5">
            <img src="src\assets\logo.png" alt="logo" className="w-50" />
          </div> */}
       {
        props.position == 'left' &&
         <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)] text-left m-4 mt-0  ">
         EventHub
       </h1>
       }
        <div className="flex-1 px-2 ">{props.children}</div>
        {props.position == 'left' && <div className="flex p-3">
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
        </div>}
      </nav>
    </div>
  );
}

export default SideBar;
