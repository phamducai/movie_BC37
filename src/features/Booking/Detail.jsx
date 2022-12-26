import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetailScheduleAction,
  fetchMovieDetailAction,
} from "./redux/action";
import { Col, Row, Rate, Tag, Button, Modal, Tabs } from "antd";
import moment from "moment";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieDetailAction(id));
  }, [id, dispatch]);

  const dispatchSchedule = useDispatch();
  useEffect(() => {
    dispatchSchedule(fetchMovieDetailScheduleAction(id));
  }, [id, dispatchSchedule]);

  const movieDetail = useSelector((state) => {
    return state.booking.movieDetail;
  });
  const movieDetailSchedule = useSelector((state) => {
    return state.booking.movieDetailSchedule;
  });
  console.log(movieDetailSchedule);
  const [openmodal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  let trailer = "";
  const [tabPosition, setTabPosition] = useState("left");
  // eslint-disable-next-line
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  trailer = movieDetail && movieDetail.trailer.replace("watch?v=", "embed/");
  return (
    <div>
      <h1 className="text-center text-5xl font-normal">Chi tiet phim</h1>
      <Row>
        <Col span={8}>
          <img src={movieDetail?.hinhAnh} className="w-full" alt="" />
        </Col>
        <Col span={16}>
          <h1> {movieDetail?.tenPhim}</h1>
          <p>{movieDetail?.moTa}</p>
          <table className="table-auto">
            <tbody>
              <tr>
                <th>Đánh gia:</th>
                <td>
                  <Rate value={movieDetail?.danhGia} count={10} />
                </td>
              </tr>
              <tr>
                <th>
                  {movieDetail?.dangChieu && (
                    <Tag color="magenta">Dang Chieu</Tag>
                  )}
                  {movieDetail?.sapChieu && <Tag color="blue">Dang Chieu</Tag>}
                </th>
              </tr>
              <tr>
                <th>Ngay Chieu</th>
                <td>
                  {moment(movieDetail?.ngayKhoiChieu).format("DD/MM/YYYY")}
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    className="mr-3"
                    type="primary"
                    size="large"
                    onClick={showModal}
                  >
                    Xem Trailer
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
          <Tabs
            tabPosition={tabPosition}
            items={movieDetailSchedule?.heThongRapChieu.map((item, index) => {
              return {
                label: (
                  <>
                    <img src={item.logo} className="w-24" alt="haha" /> <br />{" "}
                    {item.maHeThongRap}
                  </>
                ),
                key: index,
                children: item.cumRapChieu.map((itemCum, index) => {
                  return (
                    <>
                      {" "}
                      <p className="text-lg text-green-700" key={index}>
                        {itemCum.tenCumRap} {itemCum.diaChi}
                      </p>
                      <p>
                        {itemCum.lichChieuPhim.map((itemLich) => {
                          console.log(itemLich);
                          return (
                            <Tag>
                              {moment(itemLich.ngayChieuGioChieu).format(
                                "DD/MM/YYYY ~ HH:MM"
                              )}
                            </Tag>
                          );
                        })}
                      </p>
                    </>
                  );
                }),
              };
            })}
          />
        </Col>
      </Row>
      <Modal title="Trailer" open={openmodal} onCancel={closeModal}>
        <iframe
          src={trailer}
          width="100% "
          height={700}
          title="trailer"
        ></iframe>
      </Modal>
    </div>
  );
};

export default Detail;
