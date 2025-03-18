import { Users } from "lucide-react";
interface Props {
  postImage: string;
  viewCount: string;
}
function BriefPost(props: Props) {
  return (
    <div className="w-full h-64 relative group">
      {/* Post Image */}
      <img
        className="rounded-lg w-full h-full object-cover"
        src={props.postImage}
        alt="Post"
      />

      {/*Overlay */}
      <div className="absolute inset-0 opacity-0 bg-black group-hover:!opacity-50 transition-opacity duration-300 rounded-lg"></div>

      {/* Participants */}
      <div className="absolute opacity-0 group-hover:!opacity-100 inset-0 flex items-center justify-center text-white">
        <Users className="w-8 h-8" />
        <span className="ml-2 text-lg font-semibold">{props.viewCount}</span>
      </div>
    </div>
  );
}

export default BriefPost;
