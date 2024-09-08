import { MapPinned } from "lucide-react";
import Button from "../Button";
function  EventRegister({data}:{data: any}) {
  return (
    <div className="flex flex-col gap-3">
      <img
        className="w-[250px] h-[250px] rounded-lg"
        src={data.image}
        alt=""
      />
      <div className="flex gap-2 items-center cursor-pointer">
        <div>
          <div className="bg-primary rounded-t w-10 h-4 text-[10px] text-white ">
            AUG
          </div>
          <div className="rounded-b flex items-center justify-center w-10 h-6 text-base bg-primary px-[1px] pb-[1px]">
            <div className="rounded-b-[3px] text-[var(--primary-gradient-2)] bg-white w-full h-full">
              7
            </div>
          </div>
        </div>
        <div className="text-left">
          <div className="text-base font-bold leading-5">
            Wednesday, August 7
          </div>
          <div className="text-sm text-gray-600">6:00 PM - 9:00 PM</div>
        </div>
      </div>
      <div className="flex gap-2 items-center cursor-pointer">
        <div className="rounded-[4px] flex items-center justify-center w-10 h-10 bg-primary p-[1px]">
          <div className="rounded-[3px] flex items-center justify-center bg-white w-full h-full">
            <MapPinned size={24} strokeWidth={1.5} stroke="url(#gradient)" />
          </div>
        </div>
        <div className="text-left">
          <div className="text-base font-bold leading-5">
            FPT University HCMC
          </div>
          <div className="text-sm text-gray-600">
            Thành Phố Thủ Đức, Hồ Chí Minh
          </div>
        </div>
      </div>
        <Button callback={() => {}} text="Register" />
    </div>
  );
}

export default EventRegister;
