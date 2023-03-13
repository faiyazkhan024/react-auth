import React from "react";
import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="my-8 flex items-center justify-center gap-2">
      <img src={Logo} alt="Logo" />
      <h1 className="font-nunito text-lg">StrategyConnect</h1>
    </header>
  );
};

export default Header;
