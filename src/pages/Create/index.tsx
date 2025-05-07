import DefaultLayout from "../../layouts/DefaultLayout";
import EventRegister from "../../components/EventRegister";
import TimePicker from "../../components/TimePicker";
import { useEffect, useRef, useState } from "react";
const data = {
  image: "src\\assets\\postImage.png",
};

function Create() {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [contributors, setContributors] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File>();
  const [capacity, setCapacity] = useState(0);
  const [privateEvent, setPrivateEvent] = useState(false);

  console.log(startTime);
  console.log(endTime);

  const ref = useRef<HTMLTextAreaElement>(null);
  const setFunction = () => {
    if (ref.current)
      ref.current.addEventListener("input", function () {
        this.style.height = "auto"; // Reset height to calculate
        this.style.height = this.scrollHeight + "px"; // Adjust to fit content
      });
  };
  useEffect(() => {
    setFunction();
    return () => {
      if (ref.current)
        ref.current.removeEventListener("input", function () {
          this.style.height = "auto"; // Reset height to calculate
          this.style.height = this.scrollHeight + "px"; // Adjust to fit content
        });
    };
  }, []);

  return (
    <DefaultLayout>
      <div className="flex gap-5 w-full h-fit min-h-[96vh] p-5 my-3 bg-white rounded-[20px]">
        <EventRegister
          submitData={{
            title,
            startTime,
            endTime,
            location,
            contributors,
            description,
            image,
            capacity,
            privateEvent,
          }}
          editable
          data={data}
          setImage={setImage}
          setCapacity={setCapacity}
          setPrivateEvent={setPrivateEvent}
          capacity={capacity}
          privateEvent={privateEvent}
        ></EventRegister>

        <div className="flex flex-1 flex-col gap-4">
          {/* Title */}
          <textarea
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            rows={1}
            ref={ref}
            placeholder="Event name"
            className="resize-none font-bold p-1 text-3xl bg-clip-text text-transparent placeholder-[var(--primary-gradient)] bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)] focus:text-primary focus:outline-none rounded-lg focus:placeholder-gray-300 focus:scale-95 focus:transition-all focus:border-none caret-black overflow-y-hidden"
          />

          {/* Date time picker */}
          <div className="flex flex-col gap-3 p-3 border-[2px] border-[var(--neutral)] rounded-lg">
            <div className="flex gap-3">
              <div className="flex w-1/2 gap-2">
                <span className="flex items-center">Start:</span>
                <TimePicker
                  setTime={setStartTime}
                ></TimePicker>
              </div>

              <div className="flex w-1/2 gap-2">
                <span className="flex items-center">End:</span>
                <TimePicker
                 setTime={setEndTime}></TimePicker>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-2">
              <span className="flex items-center">Location link: </span>
              <textarea
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
                rows={1}
                className="flex-1 overflow-y-hidden resize-none p-1 bg-[var(--neutral)] text-base text-[var(--primary-gradient-2)] rounded-lg focus:scale-95 focus:transition-all focus:border-none focus:outline-none caret-black active:outline-none active:border-none"
              />
            </div>
          </div>
          <textarea
            onChange={(event) => {
              setContributors(event.target.value);
            }}
            rows={1}
            placeholder="Contributor(s)"
            className="bg-white border-[2px] border-[var(--neutral)] rounded-lg p-1 overflow-y-hidden resize-none"
          ></textarea>
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            rows={1}
            placeholder="Description"
            className="bg-white border-[2px] border-[var(--neutral)] rounded-lg p-1 flex-1 overflow-y-hidden resize-none"
          ></textarea>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Create;
