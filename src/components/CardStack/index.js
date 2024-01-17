import Image from "next/image";
import Button from "../Button";
import PropTypes from "prop-types";

const CardStack = (props) => {
  const { image, width, height, alt, name, charge, text, skills } = props;

  return (
    <article className="card card--stack">
      <div className="card--stack__content">
        <Image src={image} width={width} height={height} alt={alt} />
        <div className="d-flex flex-column align-items-center">
          <span className="text card--stack__title">{name}</span>
          <span className="text text--secondary card--stack__subtitle">
            {charge}
          </span>
        </div>
        <p className="text card--stack__text">{text}</p>
        <Button customClass="button button--light" buttonText="Engage" />
        <div className="w-100 d-flex flex-column align-items-start gap-3">
          <span className="text text--secondary card--stack__skills">
            SKILLS:
          </span>
          <span className="text text--secondary card--stack__skills">
            {skills}
          </span>
        </div>
      </div>
    </article>
  );
};

CardStack.propTypes = {
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
