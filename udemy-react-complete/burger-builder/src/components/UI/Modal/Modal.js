import React from 'react'
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = props => (
  <>
    <Backdrop show={props.show} onClick={props.cancelOrder} />
    <div
      className="Modal"
      style={{
        transform: props.show ? 'translateY(0)' : 'tranlateY(-100vh)',
        opacity: props.show ? '1' : '0',
        display: props.show ? 'block' : 'none'
      }}
    >
      {props.children}
    </div>
  </>
)

export default modal
