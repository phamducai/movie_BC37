// rafc
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Tabs } from "antd";
import { getScheduleMovieCinema } from "../utils/bookService";
import { useEffect } from "react";
import moment from "moment";
export const ScheduleMovie = () => {
  const [listSchedule, setListSchedule] = useState([]);
  const cinemas = useSelector((state) => state.booking.cinemas);
  const cinemaschedule = useSelector((state) => state.booking.cinemaschedule);
  console.log(cinemaschedule);
  useEffect(() => {
    getScheduleMovieCinema(cinemas[0]?.maHeThongRap).then((res) =>
      setListSchedule(res.data.content)
    );
  }, [cinemas]);

  console.log(listSchedule);
  return (
    <div
      className="w-4/5 m-auto"
      style={{ overflowY: "scroll", height: "720px" }}
    >
      <Tabs
        onChange={(key) => {
          getScheduleMovieCinema(key).then((res) =>
            setListSchedule(res.data.content)
          );
        }}
        tabPosition="left"
        items={cinemas.map((itemRap) => {
          return {
            label: <img className="w-24" src={itemRap.logo} alt="huhu" />,
            key: itemRap.maHeThongRap,
            children:
              listSchedule.length > 0 &&
              listSchedule[0].lstCumRap.map((itemCumRap) => {
                return (
                  <div key={itemCumRap.diaChi} className="flex ">
                    <div>
                      {" "}
                      {itemCumRap.tenCumRap}
                      <br />
                      {itemCumRap.diaChi}
                    </div>
                    <div>
                      {" "}
                      {itemCumRap?.danhSachPhim.map((item) => {
                        return (
                          item.dangChieu && (
                            <div key={item.maPhim}>
                              <div className="flex p-5 items-start">
                                <img
                                  src={item.hinhAnh}
                                  alt=""
                                  className="w-24 h-32 mr-5"
                                />
                                <div>
                                  <p>
                                    {" "}
                                    <span>C18</span>
                                    {item.tenPhim}
                                  </p>

                                  <div className=" grid grid-cols-3 gap-4 ">
                                    {" "}
                                    {item?.lstLichChieuTheoPhim.map(
                                      (itemhour) => {
                                        return (
                                          <Button
                                            className="bg-btn"
                                            type="default"
                                            size="default"
                                            key={itemhour.maLichChieu}
                                          >
                                            {moment(
                                              itemhour?.ngayChieuGioChieu
                                            ).format("DD/MM/YYYY ~HH:MM")}
                                          </Button>
                                        );
                                      }
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                );
              }),
          };
        })}
      />
    </div>
  );
};
