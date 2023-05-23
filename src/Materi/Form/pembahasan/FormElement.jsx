import React from "react";

export default class FormElement extends React.Component {
  state = {
    name: '',
    major: '',
    gender: '',
    address: '',
    member: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    Name: ${this.state.name}
    Major: ${this.state.major}
    Gender: ${this.state.gender}
    Address: ${this.state.address}
    member: ${this.state.member ? 'Yes' : 'No'}
    `);
    this.setState({
      name: '',
      major: '',
      gender: '',
      address: '',
      member: false
    })
  }

  // Maka apabila sudah di handleSubmit, maka akan di panggil di dalam form

  render() {
    return (
      <div style={{margin: '100px auto', border: '1px solid grey', padding: '20px'}}>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name <input
            type="text"
            name="name"
            onChange={e => this.setState({name: e.target.value})}
            value={this.state.name}
          />
        </label>
        <br />
        <br />
        <label>
          Major: <select
            name="major"
            style={{cursor: 'pointer'}}
            onChange={e => this.setState({major: e.target.value})}
            >
            <option value="">Choose a major</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
          </select>
          </label>
          <br />
          <br />
          <label>
            Gender :
            <input
              type="radio"
              value="Male"
              name="gender"
              style={{cursor: 'pointer'}}
              onChange={e => this.setState({gender: e.target.value})}
            /> Male
            <input
              type="radio"
              value="Female"
              name="gender"
              style={{cursor: 'pointer'}}
              onChange={e => this.setState({gender: e.target.value})}
            /> Female
          </label>
          <br />
          <br />
          <label>
            Address: <textarea
              cols="30"
              rows="10"
              name="address"
              onChange={e => this.setState({address: e.target.value})}
              value={this.state.address}
            />
          </label>
          <br />
          <br />
          <label>
            Member: <input
              type="checkbox"
              checked={this.state.member}
              name="member"
              style={{cursor: 'pointer'}}
              onChange={e => this.setState({member: e.target.checked})}
            />
          </label>
          <br />
          <br />
          <button
            type="submit"
            style={{cursor: 'pointer'}}
          >Submit</button>
        </form>
      </div>
    )
  }
}

// NB
// 1. Untuk menghandle dan mengetahui apakah sudah di masuk ke console, maka menggunakan onChange.
// 2. Setelah mendapatkan semua value, maka akan di submit.
// 3. Ada kelemahan ketika kita memakai value, ketika kita mengirimkan sebuah nilai default. Maka kita tidak bisa edit. Solusinya kita bisa memakai defaultValue.