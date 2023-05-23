import React from "react";
import * as Validator from 'validatorjs';

const Input = ({label, type, name, onChange}) => {
  return (
    <div>
      <label> {label}: </label>
      <br />
      <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
      <br />
    </div>
  )
}

const ShowErrors = ({errors}) => {
  return (
    <ul style={{color: 'red', marginLeft: '-20px'}}>
      {
        errors.map((error, i) => <li key={i}>{error}</li>)
      }
    </ul>
  )
}

export default class Validation extends React.Component {
  state = {
    email: '',
    password: '',
    errors: []
  }

  handleSubmit = event => {
    event.preventDefault();
    // Create validation
    const{email, password} = this.state;

    let data = { email, password };

    let rules = {
      email: 'requied|email',
      password: 'min:10|required'
    };

    let validation = new Validator (data, rules);
    validation.passes();
    this.setState({
      errors: [
        ...validation.errors.get('email'),
        ...validation.errors.get('password'),
      ]
    })

    /*
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let message = [];

    if(email.length === 0 && password.length === 0) {
      message = [...message, `Email dan Password tidak boleh kosong`];
      alert(`Email dan Password tidak boleh kosong`);
    } else if (!re.test(String(email).toLowerCase)) {
      message = [...message, 'Email tidak valid'];
      alert(`Email tidak valid`);
    } else if (email.length === 0) {
      message = [...message, `Email tidak boleh kosong`];
      alert(`Email tidak boleh kosong`);
    } else if (password.length === 0) {
      message = [...message, `Password tidak boleh kosong`];
      alert(`Password tidak boleh kosong`);
    } else if (password.length <= 10) {
      message = [...message, `Password minimal 10 karakter`];
      alert(`Password minimal 10 karakter`);
    } else {
      alert(`
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
      this.setState ({
        errors: []
      });
    }

    if(message.length > 0) {
      this.setState({
        errors: message
      })
    }
    */
  }

  render() {
    const style = {
      width: '400px',
      margin: '100px auto 0',
      border: '1px solid black',
      padding: '10px'
    }

    return (
      <div style={style}>
        <h3>Login Page</h3>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="email"
            name="email"
            label="Email"
            onChange={value => this.setState({email: value})} 
          />
          <Input
            type="password"
            name="password"
            label="Password"
            onChange={value => this.setState({username: value})} 
          />
          {
            this.state.errors && <ShowErrors errors = {this.state.errors} />
          }
          <br />
          <button type="submit" style={{cursor: 'pointer'}}>Login</button>
        </form>
      </div>
    )
  }
}