import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

export default class komponen extends React.Component {

  render () {
    return (
      <div>
        {/* <ClassComponent /> */}
        {/* Create props */}
        <ClassComponent name="Rayhans Najib" />
        <FunctionalComponent name="Bondan prakoso" />
      </div>
    )
  }
}