import React from "react";
import { useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <header className="bg-colorHeader h-16">
      <div className="container mx-auto h-full  mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl text-white  no-underline">
          <img src="img/logo.png" alt="" width={200} height={61} />
        </Link>
        <div>
          <a
            href="aga"
            className="no-underline text-black text-sm px-4 transition-all font-medium leading-tight"
          >
            Lịch Chiếu
          </a>
          <a
            className="no-underline text-black text-sm px-4 transition-all font-medium leading-tight"
            href="£"
          >
            Cụm Rạp
          </a>
          <a
            className="no-underline  text-black text-sm px-4 transition-all font-medium leading-tight"
            href="£"
          >
            Tin Tức
          </a>
          <a
            className="no-underline  text-black text-sm px-4 transition-all font-medium leading-tight"
            href="£"
          >
            Ứng Dụng
          </a>
        </div>
        {profile ? (
          <span className="text-white text-xl">Xin Chap ,{profile.hoTen}</span>
        ) : (
          <nav className="flex">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 text-lg no-underline"
                  : "text-login text-lg no-underline font-medium"
              }
            >
              <div className="flex flex-item justify-end">
                {" "}
                <BiUserCircle className="text-2xl mx-1" />
                Đăng Nhập
              </div>
            </NavLink>
            <span className="text-login ml-1"> |</span>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 text-lg no-underline"
                  : "text-login  text-lg no-underline font-medium"
              }
            >
              {" "}
              <div className="flex flex-item justify-end">
                <BiUserCircle className="text-2xl mx-1" />
                Đăng Ký
              </div>
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
