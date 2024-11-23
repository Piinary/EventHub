import { Bookmark, Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
  pinataJwt: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0YTUzZmU3MC03ZWFhLTQ0ZDUtOTc4Mi00Y2I3OGIzNjU5MzgiLCJlbWFpbCI6InBodXF1aXZvMDMuY2JAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjkxNjdjYmUzYjU2YzA1MDk4YjU2Iiwic2NvcGVkS2V5U2VjcmV0IjoiODZlNzc5ZmRjZGQ5MGU0NzdlNTJmZTliNTVhZTcwZGM4MjhkMGIxMGY4YjY2YjQwZTgxYzAyYTcwMzlmMmE3YyIsImV4cCI6MTc2MzQzMTU3Nn0.Yzm2zz33PKgWO1hmT1DZfYofdlP74svoiFIfSeb7n4k
`,
  pinataGateway: `crimson-eldest-pike-581.mypinata.cloud`,
});
interface PostData {
  id: number;
  username: string;
  avatar: string;
  title: string;
  postImage: string;
  saved: boolean;
}
function Post(postData: PostData) {
 


  const [marked, setMarked] = useState(false);
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
            src={`https://crimson-eldest-pike-581.mypinata.cloud/ipfs/${postData.postImage}`}
            alt=""
          />
        </div>
        <div className="flex justify-between">
          <div className="w-[90%]">
            <div className=" text-black font-bold text-left text-lg line-clamp-2">
              {postData.title}
            </div>
            <div className="w-max cursor-pointer group">
              <Link
                to={"/detailpage"}
                className="no-underline w-max text-base leading-tight text-transparent bg-clip-text bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)] text-left hover:text-transparent"
              >
                See details
              </Link>
              <div className="bg-primary w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </div>
          </div>
          <div onClick={() => setMarked(!marked)}>
            <Bookmark
              className="cursor-pointer hover:scale-110"
              size={24}
              stroke={"url(#gradient)"}
              fill={marked ? "url(#gradient)" : "none"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
