import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
class Layout extends React.Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}
export default Layout;
