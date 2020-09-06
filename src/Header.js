import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/800px-YouTube_Logo.svg.png'
          alt='logo'
        />
      </div>

      <div className='header__middle'>
        <input placeholder='Search' type='text' />
        <SearchIcon className='header__inputButton' />
      </div>

      <div className='header__right'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar
          className='header__icon'
          alt='Nithin'
          src='/static/images/avatar/1.jpg'
        />
      </div>
    </div>
  );
}

export default Header;
