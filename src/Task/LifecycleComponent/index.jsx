import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from "./components/NavbarSection";
import NewsComponent from "./components/NewsComponent";
// import ContentContainer from "./components/ContentContainer";


export default class LifecycleComponent extends React.Component {
  render() {
    return (
      <>
      <NavbarSection/>
      {/* <ContentContainer/> */}
      <NewsComponent/>
      </>
    )
  }
}