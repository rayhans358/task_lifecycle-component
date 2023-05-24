import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarsection from "./components/Navbarsection";
import ContentContainer from "./components/ContentContainer";
import FooterSection from "./components/Footersection";

export default class StylingComponents extends React.Component {
  render() {
    return(
      <>
      <Navbarsection/>
      <br />
      <ContentContainer />
      <FooterSection />
      </>
    )
  }
}