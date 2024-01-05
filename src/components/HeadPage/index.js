import PropTypes from "prop-types";
import Head from "next/head";

const HeadPage = (props) => {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.webp" />
    </Head>
  );
};

HeadPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

HeadPage.defaultProps = {
  description: "SMBS website",
};

export default HeadPage;
