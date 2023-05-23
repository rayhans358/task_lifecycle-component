import React from "react";

export default class Conditional extends React.Component {
  /*
  // Method if-else
  // Method 1
  render () {
    const isLogin = true;
    if(isLogin) {
      return (
        <div>
          <h1>Anda sudah login</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Silahkan login terlebih dahulu</h1>
        </div>
      )
    }

    // Method 2
    let message = '';
    if(isLogin) {
      return (
        message = 'Selamat anda sudah login'
      )
    } else {
      message = 'Silahkan login terlebih dahulu'
    }

    return (
      <div>
        <h1>{message}</h1>
      </div>
    )

    // Method 3 (ternary operator)
    return (
      <div>
        {isLogin ? <h1>Selamat anda sudah login</h1> : <h1>Silahkan login terlebih dahulu</h1>}
      </div>
    )

    // Method short circuit evaluation (&& / ||)
    return (
      <div>
        {isLogin && <h1>Selamat anda sudah login</h1>}
      </div>
    )
    
  }
  */

  // Create page loading
  state = {
    isLoading: true
  }

  render() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 3000)

    return (
      <div>
        { this.state.isLoading 
          ? <h1>Loading...</h1> 
          : <h1>Selamat datang di Materi Rendering Variable</h1>
        }
      </div>
    )
  }

}