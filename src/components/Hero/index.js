import Image from "next/image";
import PropTypes from "prop-types";
import Button from "../Button";

const Hero = (props) => {
  const {
    children,
    title,
    subtitle,
    text,
    buttonText,
    isShowLogo = false,
    logo = "",
  } = props;
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__description">
            <h2 className="title hero__title">{title}</h2>
            <h3 className="title title--primary hero__title">{subtitle}</h3>
            <p className="text hero__text">{text}</p>
            <div className="hero__content__bottom">
              <Button
                customClass="button hero__content__button"
                buttonText={buttonText}
              />
              {isShowLogo && <Image src={logo} width={150} height={162} />}
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isShowLogo: PropTypes.bool,
  logo: PropTypes.string,
};

export default Hero;
