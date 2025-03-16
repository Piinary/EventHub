import { Calendar, Ellipsis } from "lucide-react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Button from "../../components/Button";
import BriefPost from "../../components/BriefPost";
import { useState } from "react";
import { Link } from "react-router-dom";

const data = {
  username: "Phu Qui Vo",
  attended: "10",
  hosted: "10",
  joined: "June 23, 2024",
  avt: "../../assets/avt.png",
  events: [
    {
      id: "1",
      postImage: "src\\assets\\post_image.png",
      viewCount: "1000",
    },
    {
      id: "2",
      postImage: "src\\assets\\post_image.png",
      viewCount: "1000",
    },
    {
      id: "3",
      postImage: "src\\assets\\post_image.png",
      viewCount: "1000",
    },
    {
      id: "4",
      postImage: "src\\assets\\post_image.png",
      viewCount: "1000",
    },
    {
      id: "5",
      postImage: "src\\assets\\post_image.png",
      viewCount: "1000",
    },
  ],
};
function Profile() {
  const [follow, setFollow] = useState(false);
  const [activeTab, setActiveTab] = useState("events");
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-2 w-full h-fit min-h-[96vh] p-5 my-3 bg-white rounded-[20px]">
        {/* information */}
        <div className="flex justify-between">
          <div className="flex gap-4 ">
            {/* avt */}
            <img
              className="rounded-full w-36 h-36"
              src="src\\assets\\post_avt.png"
              alt=""
            />
            {/* bio*/}
            <div className="flex flex-col justify-around items-start">
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-left">
                  {data.username}
                </div>
                <span className="flex gap-1 text-sm text-gray-500 items-center">
                  <Calendar size={16}></Calendar>
                  {data.joined}
                </span>
              </div>
              <div className="flex gap-3">
                <span>{data.hosted} Hosted</span>
                <span>{data.attended} Attended</span>
              </div>
            </div>
          </div>
          {/* interact part */}
          <div className="flex gap-3 mt-4">
            <Button
              fill_bg
              size="s"
              checked={follow}
              callback={() => setFollow(!follow)}
              text={follow ? "Followed" : "Follow"}
            />
            <Link to="/messages" className="no-underline">
              <Button border size="s" callback={() => {}} text="Message" />
            </Link>
            <Ellipsis className="cursor-pointer" size={32} strokeWidth={1} />
          </div>
        </div>

        <div className="flex border-t border-gray-200 justify-center">
          {["events", "tagged"].map((tab) => (
            <button
              key={tab}
              className={`relative mx-4 py-2 text-lg${
                activeTab === tab
                  ? "font-ybold text-transparent bg-clip-text bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)]"
                  : "font-medium text-gray-500 bg-white hover:text-gray-900"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
              {activeTab === tab && (
                <span className="absolute  mt-[-3px]  left-0 top-0 h-1 w-full bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)] rounded-md"></span>
              )}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {data.events.map((event) => (
            <BriefPost
              key={event.id}
              postImage={event.postImage}
              viewCount={event.viewCount}
            />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
export default Profile;
