import React from "react";
import testIcon from "../assets/testIcon.png";
import "../styles/header.css";
import { MyInput } from "./UI/input/MyInput";

export function Header() {
  return (
    <div className="header">
      <a href="/">
        <img className="header__img" src={testIcon} alt="PhotoStock" />
      </a>
      <MyInput placeholder="Enter nickname or name of photo" />
      <a className="header__profile" href="/profile/:id">
        <span className="header__nick">Your nickname</span>
        <img className="header__img" src={testIcon} alt="profile" />
      </a>
    </div>
  );
}
