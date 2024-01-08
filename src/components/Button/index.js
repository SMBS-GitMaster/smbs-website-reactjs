import PropTypes from "prop-types";

const Button = (props) => {
  const {
    customClass,
    buttonText = "",
    buttonType = "button",
    children = <></>,
    onClick = () => {},
  } = props;

  return (
    <button className={customClass} type={buttonType} onClick={onClick}>
      {buttonText}
      {children}
    </button>
  );
};

Button.propTypes = {
  customClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(["button", "submit"]),
  buttonText: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
