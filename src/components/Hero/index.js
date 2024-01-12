import PropTypes from "prop-types";

const Hero = (props) => {

  const { children } = props
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          {children}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Hero;
