import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = (props) => {
  const { children, description = "SMBS website" } = props;

  const router = useRouter();

  const getPageTitle = () =>
    router.pathname === "/" ? `Home` : `${router.pathname.slice(1)}`;

  return (
    <>
      <Head>
        <title>{`SMBS | ${getPageTitle()}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <>{children}</>
    </>
  );
};

Layout.propTypes = {
  description: PropTypes.string,
};

export default Layout;
