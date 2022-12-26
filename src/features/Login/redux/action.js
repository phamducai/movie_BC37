import requester from "app/api";
import actions from "./type";

export const loginAction = (userLogin) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "POST",
        url: "/api/QuanLyNguoiDung/DangNhap",
        data: userLogin,
      });
      next({
        type: actions.SET_PROFILE,
        payload: res.data.content,
      });
      // set localStorage =>  refresh token || fingerprint
      // set cookies
      localStorage.setItem("token", res.data.content.accessToken);
    } catch (err) {
      throw err;
    }
  };
};

export const fetchProfileAction = async (next) => {
  try {
    const res = await requester({
      method: "POST",
      url: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
    });

    next({
      type: actions.SET_PROFILE,
      payload: res.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};
