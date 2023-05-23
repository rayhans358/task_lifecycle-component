import React from "react";

export default class List extends React.Component {
  state = {
    users: ['Jonas', 'Roger', 'Panda', 'Kadita', 'Oda']
  }

  render() {
    return (
      <div>
        <ul>
        {
          this.state.users.map((user, i) => <li key={i}>{user}</li>)
        }

        {/* Cara sederhana nya */}
        {
          this.state.users.map((user, i) => {
            return <li key={i}>{user}</li>
          })
        }
        
        {/* memakai function biasa */}
        {
          this.state.users.map(function (user, i) {
            return <li key={i}>{user}</li>
          })
        }
        </ul>
      </div>
    )
  }
}