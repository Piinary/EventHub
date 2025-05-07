import { Bookmark, Ellipsis } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PostData {
  id: number;
  username: string;
  avatar: string;
  title: string;
  postImage: string;
  saved: boolean;
}
function Post(postData: PostData) {
    const [marked, setMarked] =useState(false)
  return (
    <div className="mt-2">
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#FFB9D2" offset="0%" />
          <stop stopColor="#BB9BFF" offset="100%" />
        </linearGradient>
      </svg>
      <div className="bg-white rounded-lg w-[550px] h-[660px] flex flex-col justify-between px-6 pt-3 pb-2">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <img
              className="w-9 h-9 rounded-full"
              src={postData.avatar}
              alt=""
            />
            <div className="font-semibold">{postData.username}</div>
          </div>
          <Ellipsis className="cursor-pointer" size={32} strokeWidth={1} />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[500px] h-[500px] items-center"
            src={postData.postImage}
            alt=""
          />
        </div>
        <div className="flex justify-between">
          <div className="w-[90%]">
            <div className=" text-black font-bold text-left text-lg line-clamp-2">
              {postData.title}
            </div>
            <div className="w-max cursor-pointer group">
              <Link to={'/detailpage'} className="no-underline w-max text-base leading-tight text-transparent bg-clip-text bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)] text-left hover:text-transparent">
                See details
              </Link>
              <div className="bg-primary w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </div>
          </div>
          <div  onClick={()=>setMarked(!marked)}>
            <Bookmark
              className="cursor-pointer hover:scale-110"
              size={24}
              stroke={"url(#gradient)"}
              fill={marked?"url(#gradient)": "none"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
