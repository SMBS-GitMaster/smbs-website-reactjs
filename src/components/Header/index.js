import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { options, routes } from "@/constants/routes";

const Header = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  const renderMenu = () =>
    options.map((option) => (
      <li key={option.id}>
        <Link className="navbar__link" href={option.url}>
          {option.text}
        </Link>
      </li>
    ));

  const handleShowMenu = () => setIsShowNav(() => !isShowNav);

  return (
    <header className="header">
      <div className="container d-flex justify-content-between flex-wrap">
        <Link href={routes.home}>
          <Image
            className="header__logo"
            src="/smbs-logo.png"
            width={208}
            height={51}
            alt="smbs logo"
          />
        </Link>
        <Button customClass="button button--toggle" onClick={handleShowMenu}>
          <FaBars />
        </Button>
        <div className="header__nav">
          <nav className={`navbar ${isShowNav && "navbar--open"}`}>
            <ul className="navbar__menu">{renderMenu()}</ul>
          </nav>
          <Button
            customClass="button button--navbar"
            buttonText="SCHEDULE A CALL"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
