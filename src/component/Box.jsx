import React from 'react'

const Box = (props) => {
  console.log(props)
  return (
    <div>
     
      <div className='box' >
        <h1 className='box-tittle'>{props.tittle}</h1>
        <img  className="item-img" src={props.item && props.item.img}/>
        <h2>Win</h2>
      </div>
    </div>
  )
}

export default Box

