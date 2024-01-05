import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import { options, routes } from "@/constants/routes";

const Header = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  const renderMenu = () =>
    options.map((option) => (
      <Link key={option.id} className="navbar__links" href={option.url}>
        {option.text}
      </Link>
    ));

  return (
    <header className="navbar">
      <div className="container">
        <Link href={routes.home}>
          <Image src="/page_logo.png" width={208} height={51} alt="smbs logo" />
        </Link>
        <Button
          customClass="button button--toggle"
          onClick={() => setIsShowNav(() => !isShowNav)}
        >
          {isShowNav ? <FaWindowClose /> : <FaBars />}
        </Button>
        <nav
          className={`navbar__wrapper ${isShowNav && "navbar__wrapper--open"}`}
        >
          {renderMenu()}
          <Button customClass="button" buttonText="Texto" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
