import React from 'react'

const NavLink = ({text, to})=>{
  return <a href={to?to:'#'} className=" border rounded-sm border-light px-4">{text}</a>
}

export default NavLink