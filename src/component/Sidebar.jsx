import React from "react";

function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        <div className="logo d-flex justify-content-between">
          <a href="index-2.html">
            <img src="img/logo.png" alt="" />
          </a>
          <div className="sidebar_close_icon d-lg-none">
            <i className="ti-close" />
          </div>
        </div>
        <ul id="sidebar_menu">
          <li className="mm-active">
            <a className="has-arrow" href="#" aria-expanded="false">
              <img src="img/menu-icon/dashboard.svg" alt="" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <img src="img/menu-icon/2.svg" alt="" />
              <span>Pages</span>
            </a>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <img src="img/menu-icon/3.svg" alt="" />
              <span>Applications</span>
            </a>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <img src="img/menu-icon/4.svg" alt="" />
              <span>Components</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
