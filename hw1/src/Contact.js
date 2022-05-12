import React, { Component } from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
export default class Contact extends Component {
  render() {
    return (
      <div>
        <h2>You can reach me at</h2>
        <p>Number: xxx006900xxx</p>
        <p>Email: trunghia199x@gmail.com</p>
        <p><a href="https://www.facebook.com/nt.nghhia"><FaFacebookSquare className='icons' />Facebook</a></p>
      </div>
    )
  }
}
