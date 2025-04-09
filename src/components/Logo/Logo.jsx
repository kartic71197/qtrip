import React from "react";
import LogoImage from "../../assets/logo.png";

export default function Logo() {
  return (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img src={LogoImage} alt="logo" width={67} />
    </div>
  );
}
