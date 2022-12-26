// rafc
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Tabs } from "antd";
import { getScheduleMovieCinema } from "../utils/bookService";
import { useEffect } from "react";
import moment from "moment";
//formik
export const ScheduleMovie = () => {
  const [listSchedule, setListSchedule] = useState([]);
  const cinemas = useSelector((state) => state.booking.cinemas);
  useEffect(() => {
    getScheduleMovieCinema(cinemas[0]?.maHeThongRap).then((res) =>
      setListSchedule(res.data.content)
    );
  }, [cinemas]);

  console.log(listSchedule);
  return (
    <div className="w-4/5 m-auto">
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
              listSchedule[0].lstCumRap.map((itemCumRap, index) => {
                return (
                  <div key={index} className="flex ">
                    <div>
                      {" "}
                      {itemCumRap.tenCumRap}
                      <br />
                      {itemCumRap.diaChi}
                    </div>
                    <div className="snap-proximity snap-y">
                      {" "}
                      {itemCumRap.danhSachPhim.map((item) => {
                        return (
                          item.dangChieu && (
                            <div key={item.maPhim}>
                              <div className="flex">
                                <img
                                  src={item.hinhAnh}
                                  alt=""
                                  className="w-24 h-32"
                                />
                                <div>
                                  <p>
                                    {" "}
                                    <span>C18</span>
                                    {item.tenPhim}
                                  </p>

                                  <div>
                                    {" "}
                                    {item.lstLichChieuTheoPhim.map(
                                      (itemhour, index) => {
                                        return (
                                          <Button
                                            className="mr-3  bg-gray-300"
                                            type="default"
                                            size="default"
                                            key={index}
                                          >
                                            {moment(
                                              itemhour?.ngayChieuGioChieu
                                            ).format("DD/MM/YYYY ~ HH:MM")}
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
