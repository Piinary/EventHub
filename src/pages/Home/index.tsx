import { useState } from "react";
import { getEvents } from "../../api/Event";
import Post from "../../components/Post";
import DefaultLayout from "../../layouts/DefaultLayout";
import type { Event } from "../../api/Event";
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
  const [events, setEvents] = useState<Event[]>([]);

  getEvents().then((data) => {
    setEvents(data);
  });
  return (
    <DefaultLayout>
      {events.map((item) => (
        <Post
          id={0}
          avatar= "src\\assets\\post_avt.png"
          username= "Kim Tien Nguyen"
          postImage={item.image}
          title={item.title}
          saved={false}
        />
      ))}
    </DefaultLayout>
  );
}

export default Home;
