import { Fragment, ReactNode } from "react";
import MainHeader from "@/components/layout/main-header";

function Layout(props: { children: ReactNode }) {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
