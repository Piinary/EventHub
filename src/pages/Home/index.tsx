import { Sidebar } from "lucide-react";
import Post from "../../components/Post";
import DefaultLayout from "../../layouts/DefaultLayout";
import SideBar from "../../layouts/components/SideBar";
import SuggestTag from "../../components/SuggestTag";

const data = [
  {
    id: "1",
    username: "Kim Tien Nguyen",
    title: `Hồ Chí Minh | Vòng Bán kết Khu vực | FPT Edu Tích Tịch Tình
              Tang 2024 TP.Hồ Chí Minh`,
    avatar: "src\\assets\\post_avt.png",
    postImage: "src\\assets\\post_image.png",
  },
  {
    id: "2",
    username: "Kim Tien Nguyen",
    title: `Hồ Chí Minh | Vòng Bán kết Khu vực | FPT Edu Tích Tịch Tình
              Tang 2024 TP.Hồ Chí Minh`,
    avatar: "src\\assets\\post_avt.png",
    postImage: "src\\assets\\post_image.png",
  },
  {
    id: "3",
    username: "Kim Tien Nguyen",
    title: `Hồ Chí Minh | Vòng Bán kết Khu vực | FPT Edu Tích Tịch Tình
              Tang 2024 TP.Hồ Chí Minh`,
    avatar: "src\\assets\\post_avt.png",
    postImage: "src\\assets\\post_image.png",
  },
  {
    id: "4",
    username: "Kim Tien Nguyen",
    title: `Hồ Chí Minh | Vòng Bán kết Khu vực | FPT Edu Tích Tịch Tình
              Tang 2024 TP.Hồ Chí Minh`,
    avatar: "src\\assets\\post_avt.png",
    postImage: "src\\assets\\post_image.png",
  },
];
function Home() {

  return (
    <DefaultLayout>
      
      <div className="flex justify-center">
        <div className="mr-[332px]">{data.map((item) => (
          <Post
          id={0}
          avatar={item.avatar}
          username={item.username}
          postImage={item.postImage}
          title={item.title}
          saved={false}
          />
        ))}</div>
          <SideBar position="right" fixed >
            <SuggestTag data={{
              img: '',
              title: ''
            }} />
          </SideBar></div>
      
    </DefaultLayout>
  );
}

export default Home;
