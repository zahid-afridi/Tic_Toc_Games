import React from 'react'

export default function Saqure(props) {
  return (
    <>
        <div className='squre' onClick={props.onClick}>
            <h3>{props.value}</h3>
        </div>
    </>
  )
}
