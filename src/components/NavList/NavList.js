import React from 'react'

export default function NavList({degree,gradcolor1,gradcolor2, id,
  IconColor,activeColor, activeIconColor, Font, url, icon, active,setActive, MyFunction}) {
  const Nav__link = {
    color: IconColor,
    fontSize: Font ? Font: `${1.25}rem`,
    padding: `${0.4}rem`,
    display: "flex",
    borderRadius: `${5}rem`,
    textDecoration: "none",
    }
  const ActiveNav__link = {
    background: degree ? `linear-gradient(${degree}, ${gradcolor1}, ${gradcolor2})`: activeColor,
    fontSize: Font ? Font: `${1.25}rem`,
    padding: `${0.4}rem`,
    display: "flex",
    borderRadius: `${5}rem`,
    color: activeIconColor? activeIconColor: '',
    textDecoration: "none",
    }
  return (
    <li data-testid={id} className="menu__item" onClick={MyFunction}>
        <a href={url} data-testid={url} onClick={()=> setActive(url)} style={active ? ActiveNav__link: Nav__link}>
            <i className={icon}></i>
        </a>
    </li>
  )
}
