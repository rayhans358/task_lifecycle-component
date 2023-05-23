import React from "react";
import Bar from "./Bar";
import Product from "./Product";
// import Hello from "./Hello";

export default class Reusable extends React.Component {

  state = {
    value: 0
  }

  handleValue = (data) => {
    this.setState({
      value: data
    });
  }

  render() {
    return (
      <div>
        {/* <Hello name="martono"/>
        <Hello name="jauhari"/>
        <Hello name="ronaldo"/> */}
        <Bar value={this.state.value}/>
        <Product sendProps={this.handleValue}/>
      </div>
    )
  }
}