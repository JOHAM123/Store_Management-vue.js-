import React from "react";

export default function NavUser() {
  return (
    <li className="nav-item dropdown nav-user">
      <a
        className="nav-link nav-user-img"
        href="#"
        id="navbarDropdownMenuLink2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img
          src="/assets/images/avatar-1.jpg"
          alt=""
          className="user-avatar-md rounded-circle"
        />
      </a>
      <div
        className="dropdown-menu dropdown-menu-right nav-user-dropdown"
        aria-labelledby="navbarDropdownMenuLink2"
      >
        <div className="nav-user-info">
          <h5 className="mb-0 text-white nav-user-name">John Abraham </h5>
          <span className="status"></span>
          <span className="ml-2">Available</span>
        </div>
        <a className="dropdown-item" href="#">
          <i className="fas fa-user mr-2"></i>Account
        </a>
        <a className="dropdown-item" href="#">
          <i className="fas fa-cog mr-2"></i>Setting
        </a>
        <a className="dropdown-item" href="#">
          <i className="fas fa-power-off mr-2"></i>Logout
        </a>
      </div>
    </li>
  );
}
