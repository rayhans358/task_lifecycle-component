import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSec from "./components/NavSec";
import NewsContent from "./components/NewsContent";

export default class LifecycleComponent extends React.Component {
  render() {
    return (
      <>
      <NavSec/>
      <NewsContent/>
      </>
    )
  }
}
