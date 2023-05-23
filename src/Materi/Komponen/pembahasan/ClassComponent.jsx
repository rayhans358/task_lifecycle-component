import React from "react";

class ClassComponent extends React.Component {
  /* Method 1
  // Create State
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }

    // Binding method 1
    this.calPlus = this.calPlus.bind(this);
    this.calMinus = this.calMinus.bind(this);
  }

  // Create simple calculator
  calPlus() {
    this.setState({value: this.state.value + 1});
  }

  calMinus() {
    this.setState({ value: (this.state.value > 0) ? this.state.value - 1 : this.state.value });
  }
  */
  
  // Method 2
  state = {
    value: 0
  }

  // Create simple calculator
  calPlus = () => {
    this.setState({value: this.state.value + 1});
  }

  calMinus = () => {
    this.setState({ value: (this.state.value > 0) ? this.state.value - 1 : this.state.value });
  }

  render() {
    return (
      <div>
        <h1>Membuat komponen dengan class component</h1>
        <h2>Hallo {this.props.name}</h2>
        <br />
        <button onClick={this.calMinus}  style={{ cursor: "pointer" }}>-</button>
        <span>{'  '} {this.state.value} {'  '}</span>
        <button onClick={this.calPlus}  style={{ cursor: "pointer" }}>+</button>
      </div>
    )
  }
}

// NB : ada 1 method yang wajib di panggil yaitu method render. Method ini wajib mengembalikan data/element.
// Element dari suatu komponen wajib di bungkus.
// Untuk catch props itu menggunakan this

export default ClassComponent;