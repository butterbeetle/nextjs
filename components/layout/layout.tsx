import { Fragment } from "react";
import MainHeader from "./main-header";

const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
