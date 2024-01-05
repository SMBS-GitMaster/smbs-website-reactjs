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

  return (
    <header className="navbar">
      <div className="container">
        <Link href={routes.home}>
          <Image
            className="navbar__logo"
            src="/smbs-logo.png"
            width={208}
            height={51}
            alt="smbs logo"
          />
        </Link>
        <Button
          customClass="button button--toggle"
          onClick={() => setIsShowNav(() => !isShowNav)}
        >
          <FaBars />
        </Button>
        <div className="navbar__container">
          <nav className={`navbar__menu ${isShowNav && "navbar__menu--open"}`}>
            <ul className="navbar__links">{renderMenu()}</ul>
          </nav>
          <Button customClass="button button--navbar" buttonText="Texto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
