import Image from "next/image";
import Button from "../Button";
import PropTypes from "prop-types";

const CardStack = (props) => {
  const { customClass, image, width, height, alt, name, charge, text, skills } =
    props;

  return (
    <article className={`card ${customClass}`}>
      <div className={`${customClass}__content`}>
        <Image src={image} width={width} height={height} alt={alt} />
        <div className="d-flex flex-column align-items-center">
          <span className={`text ${customClass}__title`}>{name}</span>
          <span className={`text text--secondary ${customClass}__subtitle`}>
            {charge}
          </span>
        </div>
        <p className={`text ${customClass}__text`}>{text}</p>
        <Button customClass="button button--light" buttonText="Engage" />
        <div className="w-100 d-flex flex-column align-items-start gap-3">
          <span className={`text text--secondary ${customClass}__skills`}>
            SKILLS:
          </span>
          <span className={`text text--secondary ${customClass}__skills`}>
            {skills}
          </span>
        </div>
      </div>
    </article>
  );
};

CardStack.propTypes = {
  customClass: PropTypes.string,
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  charge: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
};

export default CardStack;
