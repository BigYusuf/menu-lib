import React from 'react'

export default function NavList4({ itemWidth, Indicator,text, degree,gradcolor1,gradcolor2, id,
  IconColor,activeColor, activeIconColor,MenuNumber, Font, url, iconA, iconB, active,setActive}) {
  const list={
    width: itemWidth ? itemWidth: window.innerWidth<=350? (window.innerWidth-10)/MenuNumber : 70,
    //height:70,
    listStyle: 'none',
    zIndex:1,
    position: 'relative',
  }
    const Nav__link = {
    position: 'relative',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: `${100}%`,
    textDecoration: "none",
    textAlign: 'center',
    fontWeight: 500,
    }

  const ActiveNav__link = {
    position: 'relative',
    display: "flex",
    width: `${100}%`,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textDecoration: "none",
    color: activeIconColor? activeIconColor: IconColor,
    }
    const link__icon1={
        fontSize: Font ? Font : `${1.5}em`,
        position: 'absolute',
        display: 'none',
        lineHeight: `${75}px`,
        textAlign: 'center',
        opacity: 0,
        color: IconColor? IconColor: "#4070F4",
        transition: ` ${0.4}s`,
    }
    const link__icon={
        fontSize: Font ? Font : `${1.5}em`,
        position: 'absolute',
        display: 'block',
        opacity: 1,
        lineHeight: `${75}px`,
        textAlign: 'center',
        color: IconColor? IconColor: "#4070F4",
        transition: ` ${0.4}s`,
    }
    const Activelink__icon1={
        color: activeIconColor? activeIconColor: IconColor,
        fontSize: Font ? Font : `${1.5}em`,
        position: 'relative',
        display: 'block',
        //lineHeight: `${75}px`,
        opacity: 1,
        textAlign: 'center',
        transition: ` ${0.4}s`,
    }
    const Activelink__icon={
        color: activeIconColor? activeIconColor: IconColor,
        fontSize: Font ? Font : `${1.5}em`,
        position: 'relative',
        display: 'none',
        opacity: 0,
        //lineHeight: `${75}px`,
        textAlign: 'center',
        transition: ` ${0.4}s`,
    }
  return (
    <li style={list} data-testid={id} className='menu__item'>
        <a href={url}data-testid={url} onClick={()=> setActive(url)} style={active ? ActiveNav__link: Nav__link}>
            <i style={active ? Activelink__icon : link__icon}>
              <span className={iconA}></span>
            </i>
            <i style={active ? Activelink__icon1 : link__icon1}>
              <span className={iconB}></span>
            </i>
        </a>
    </li>
  )
}