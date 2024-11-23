import { getEvents } from "../../api/event-api";
import Post from "../../components/Post";
import DefaultLayout from "../../layouts/DefaultLayout";

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
  const value = getEvents();
  value.then((res) => console.log(res));
  return (
    <DefaultLayout>
      {data.map((item) => (
        <Post
          id={0}
          avatar={item.avatar}
          username={item.username}
          postImage={item.postImage}
          title={item.title}
          saved={false}
        />
      ))}
    </DefaultLayout>
  );
}

export default Home;
