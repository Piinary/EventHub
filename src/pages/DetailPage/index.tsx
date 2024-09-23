import EventInformation from "../../components/EventInformation";
import EventRegister from "../../components/EventRegister";
import DefaultLayout from "../../layouts/DefaultLayout";
function DetailPage() {
  const data = [
    {
      id: "1",
      image:"src\\assets\\postImage.png",
      name:
        "TP.Hồ Chí Minh | Vòng Bán kết Khu vực | FPT Edu Tích Tịch Tình Tang 2024",
      owner: "FPT Education",
      ownerAvt:"src\\assets\\post_avt.png",
      description: ` ​Trải qua vòng chọn lọc gắt gao, giờ đây, các bạn thí sinh đã sẵn sàng
          để chinh phục những thử thách mới, thể hiện kỹ năng và đam mê mãnh
          liệt với nhạc cụ dân tộc tại Vòng Bán kết Toàn quốc FPT Edu Tích Tịch
          Tình Tang 2024. Liệu ai sẽ bước tiếp và tiến gần hơn tới danh hiệu
          Quán quân? ​Lịch trình Vòng Bán kết Toàn quốc của khu vực: ​📍Khu vực
          Miền Nam ​Thời gian: 14:00 - 18:00 ​Địa điểm: Thứ 6, ngày 02/08/2024 -
          Academic Hall, Đại học FPT TP.HCM ​Hãy cùng chờ đón những màn trình
          diễn ấn tượng và sáng tạo từ các bạn thí sinh tài năng nhé ​Trải qua
          vòng chọn lọc gắt gao, giờ đây, các bạn thí sinh đã sẵn sàng để chinh
          phục những thử thách mới, thể hiện kỹ năng và đam mê mãnh liệt với
          nhạc cụ dân tộc tại Vòng Bán kết Toàn quốc FPT Edu Tích Tịch Tình Tang
          2024. Liệu ai sẽ bước tiếp và tiến gần hơn tới danh hiệu Quán quân?
          ​Lịch trình Vòng Bán kết Toàn quốc của khu vực: ​📍Khu vực Miền Nam
          ​Thời gian: 14:00 - 18:00 ​Địa điểm: Thứ 6, ngày 02/08/2024 - Academic
          Hall, Đại học FPT TP.HCM ​Hãy cùng chờ đón những màn trình diễn ấn
          tượng và sáng tạo từ các bạn thí sinh tài năng nhé
          ​_____________________ ​FPT Edu Tích Tịch Tình Tang là cuộc thi Nhạc
          cụ Dân tộc được tổ chức bởi Ban Công tác Học đường Tổ chức Giáo dục
          FPT. ​Trải qua vòng chọn lọc gắt gao, giờ đây, các bạn thí sinh đã sẵn
          sàng để chinh phục những thử thách mới, thể hiện kỹ năng và đam mê
          mãnh liệt với nhạc cụ dân tộc tại Vòng Bán kết Toàn quốc FPT Edu Tích
          Tịch Tình Tang 2024. Liệu ai sẽ bước tiếp và tiến gần hơn tới danh
          hiệu Quán quân? ​Lịch trình Vòng Bán kết Toàn quốc của khu vực: ​📍Khu
          vực Miền Nam ​Thời gian: 14:00 - 18:00 ​Địa điểm: Thứ 6, ngày
          02/08/2024 - Academic Hall, Đại học FPT TP.HCM ​Hãy cùng chờ đón những
          màn trình diễn ấn tượng và sáng tạo từ các bạn thí sinh tài năng nhé
          ​Trải qua vòng chọn lọc gắt gao, giờ đây, các bạn thí sinh đã sẵn sàng
          để chinh phục những thử thách mới, thể hiện kỹ năng và đam mê mãnh
          liệt với nhạc cụ dân tộc tại Vòng Bán kết Toàn quốc FPT Edu Tích Tịch
          Tình Tang 2024. Liệu ai sẽ bước tiếp và tiến gần hơn tới danh hiệu
          Quán quân? ​Lịch trình Vòng Bán kết Toàn quốc của khu vực: ​📍Khu vực
          Miền Nam ​Thời gian: 14:00 - 18:00 ​Địa điểm: Thứ 6, ngày 02/08/2024 -
          Academic Hall, Đại học FPT TP.HCM ​Hãy cùng chờ đón những màn trình
          diễn ấn tượng và sáng tạo từ các bạn thí sinh tài năng nhé
          ​_____________________ ​FPT Edu Tích Tịch Tình Tang là cuộc thi Nhạc
          cụ Dân tộc được tổ chức bởi Ban Công tác Học đường Tổ chức Giáo dục
          FPT. ​Trải qua vòng chọn lọc gắt gao, giờ đây, các bạn thí sinh đã sẵn
          sàng để chinh phục những thử thách mới, thể hiện kỹ năng và đam mê
          mãnh liệt với nhạc cụ dân tộc tại Vòng Bán kết Toàn quốc FPT Edu Tích
          Tịch Tình Tang 2024. Liệu ai sẽ bước tiếp và tiến gần hơn tới danh
          hiệu Quán quân? ​Lịch trình Vòng Bán kết Toàn quốc của khu vực: ​📍Khu
          vực Miền Nam ​Thời gian: 14:00 - 18:00 ​Địa điểm: Thứ 6, ngày
          02/08/2024 - Academic Hall, Đại học FPT TP.HCM ​Hãy cùng chờ đón những
          màn trình diễn ấn tượng và sáng tạo từ các bạn thí sinh tài năng nhé
          ​Trải qua vòng chọn lọc gắt gao, giờ đây, các bạn thí sinh đã sẵn sàng
          để chinh phục những thử thách mới, thể hiện kỹ năng và đam mê mãnh
          liệt với nhạc cụ dân tộc tại Vòng Bán kết Toàn quốc FPT Edu Tích Tịch
          Tình Tang 2024. Liệu ai sẽ bước tiếp và tiến gần hơn tới danh hiệu
          Quán quân? ​Lịch trình Vòng Bán kết Toàn quốc của khu vực: ​📍Khu vực
          Miền Nam ​Thời gian: 14:00 - 18:00 ​Địa điểm: Thứ 6, ngày 02/08/2024 -
          Academic Hall, Đại học FPT TP.HCM ​Hãy cùng chờ đón những màn trình
          diễn ấn tượng và sáng tạo từ các bạn thí sinh tài năng nhé
          ​_____________________ ​FPT Edu Tích Tịch Tình Tang là cuộc thi Nhạc
          cụ Dân tộc được tổ chức bởi Ban Công tác Học đường Tổ chức Giáo dục
          FPT. ​Trải qua vòng chọn lọc gắt gao, giờ đây, các bạn thí sinh đã sẵn
          sàng để chinh phục những thử thách mới, thể hiện kỹ năng và đam mê
          mãnh liệt với nhạc cụ dân tộc tại Vòng Bán kết Toàn quốc FPT Edu Tích
          Tịch Tình Tang 2024. Liệu ai sẽ bước tiếp và tiến gần hơn tới danh
          hiệu Quán quân? ​Lịch trình Vòng Bán kết Toàn quốc của khu vực: ​📍Khu
          vực Miền Nam ​Thời gian: 14:00 - 18:00 ​Địa điểm: Thứ 6, ngày
          02/08/2024 - Academic Hall, Đại học FPT TP.HCM ​Hãy cùng chờ đón những
          màn trình diễn ấn tượng và sáng tạo từ các bạn thí sinh tài năng nhé
          ​Trải qua vòng chọn lọc gắt gao, giờ đây, các bạn thí sinh đã sẵn sàng
          để chinh phục những thử thách mới, thể hiện kỹ năng và đam mê mãnh
          liệt với nhạc cụ dân tộc tại Vòng Bán kết Toàn quốc FPT Edu Tích Tịch
          Tình Tang 2024. Liệu ai sẽ bước tiếp và tiến gần hơn tới danh hiệu
          Quán quân? ​Lịch trình Vòng Bán kết Toàn quốc của khu vực: ​📍Khu vực
          Miền Nam ​Thời gian: 14:00 - 18:00 ​Địa điểm: Thứ 6, ngày 02/08/2024 -
          Academic Hall, Đại học FPT TP.HCM ​Hãy cùng chờ đón những màn trình
          diễn ấn tượng và sáng tạo từ các bạn thí sinh tài năng nhé
          ​_____________________ ​FPT Edu Tích Tịch Tình Tang là cuộc thi Nhạc
          cụ Dân tộc được tổ chức bởi Ban Công tác Học đường Tổ chức Giáo dục
          FPT.`,
          date: {
            startTime: 6,
            endTime: 9,
            day: "Wednessday",
            date: "7",
            month: "August",
            year: "2024"
          },
          location: {
            name: "FPT University HCMC",
            location: "Thành Phố Thủ Đức, Hồ Chí Minh"
          }
    },
  ];
  return (
    <DefaultLayout>
      <div className="ml-[332px]">
      <div className="flex gap-5 w-full h-fit min-h-[96vh] p-5 my-3 bg-white rounded-[20px]">
        <EventRegister data={data[0]}></EventRegister>
        <EventInformation data={data[0]}></EventInformation>
      </div>
      </div>
    </DefaultLayout>
  );
}

export default DetailPage;

