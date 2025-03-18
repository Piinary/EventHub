import { MapPinned, Image } from "lucide-react";
import Button from "../Button";
import CounterInput from "../CounterInput";
import { useState } from "react";
import ToggleSwitch from "../ToggleSwitch";

interface Props {
  data: any;
  editable?: boolean;
  setImage?: (file: File) => void;
  setCapacity?: (capacity: number) => void;
  setPrivateEvent?: (privateEvent: boolean) => void;
  capacity?: number;
  privateEvent?: boolean;
  submitData?: any;
}

function EventRegister(props: Props) {
  const [src, setSrc] = useState<string>("");

  // Gán giá trị mặc định nếu props là undefined
  const capacity = props.capacity ?? 0;
  const privateEvent = props.privateEvent ?? false;

  return (
    <div className="flex flex-col gap-4 ">
      {/* Image */}
      <img
        className="w-[250px] h-[250px] rounded-lg"
        src={src || props.data.image}
        alt=""
      />

      <label
        htmlFor="inImg"
        className={`absolute ml-[210px] mt-[210px] ${props.editable ? "" : "hidden"}`}
      >
        <Image size={32} stroke="url(#gradient)"></Image>
      </label>

      <div>
        <input
          id="inImg"
          onChange={(event) => {
            const file = event.target.files;
            if (file?.length && file[0]) {
              setSrc(URL.createObjectURL(file[0]));
              props.setImage?.(file[0]);
            }
          }}
          type="file"
          className="hidden"
        />
      </div>

      {/* Register part */}
      <div className={props.editable ? "hidden" : ""}>
        <div className="flex gap-2 items-center cursor-pointer mb-4">
          {/* Date icon */}
          <div>
            <div className="bg-primary rounded-t w-10 h-4 text-[10px] text-white ">
              AUG
            </div>
            <div className="rounded-b flex items-center justify-center w-10 h-6 text-base bg-primary px-[1px] pb-[1px]">
              <div className="rounded-b-[3px] bg-white w-full h-full">
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)] ">
                  7
                </span>
              </div>
            </div>
          </div>
          {/* Date */}
          <div className="text-left">
            <div className="text-base font-bold leading-5">
              Wednesday, August 7
            </div>
            <div className="text-sm text-gray-600">6:00 PM - 9:00 PM</div>
          </div>
        </div>

        <div className="flex gap-2 items-center cursor-pointer">
          {/* Location icon */}
          <div className="rounded-[4px] flex items-center justify-center w-10 h-10 bg-primary p-[1px]">
            <div className="rounded-[3px] flex items-center justify-center bg-white w-full h-full">
              <MapPinned size={24} strokeWidth={1.5} stroke="url(#gradient)" />
            </div>
          </div>
          {/* Location */}
          <div className="text-left">
            <div className="text-base font-bold leading-5">
              FPT University HCMC
            </div>
            <div className="text-sm text-gray-600">
              Thành Phố Thủ Đức, Hồ Chí Minh
            </div>
          </div>
        </div>
      </div>

      {/* Create Event part */}
      <div className={props.editable ? "" : "hidden"}>
        <div className="flex w-full justify-between gap-2 items-center cursor-pointer text-xl mb-4">
          {/* Capacity */}
          <span>Capacity</span>
          {/* Capacity input */}
          <CounterInput
            capacity={capacity}
            onChange={(value: number) => {
              props.setCapacity?.(value);
            }}
          />
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <div className="flex w-full justify-between items-center">
            {/* Private */}
            <span className="text-xl">Private</span>
            {/* Private ? */}
            <ToggleSwitch
              privateEvent={privateEvent}
              onChange={(value: boolean) => {
                props.setPrivateEvent?.(value);
              }}
            />
          </div>
          <span className="text-left w-full text-gray-400">
            Only people with the link can register
          </span>
        </div>
      </div>

      {/* Button */}
      <Button
        fill_bg
        size="m"
        callback={() => {
          console.log(props.submitData);
        }}
        text={props.editable ? "Create event" : "Register"}
      />
    </div>
  );
}

export default EventRegister;
