import React from "react";

export default class Variable extends React.Component {
  state = {
    a: null,
    b: true,
    c: ' ',
    d: 0
  }

  render() {
    return (
      <div>
        <div>a: {this.state.a}</div>
        <div>b: {this.state.b}</div>
        <div>c: {this.state.c}</div>
        <div>d: {this.state.d}</div>
        <div>e: {this.props.e}</div>
      </div>
    )
  }
}

// Nilai a null maka tidak di render, b nilai boolean maka tidak di render, c string kosong maka tidak di render, d angka maka tetap di render dan e itu undefined tidak di render