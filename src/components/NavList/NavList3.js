import React from 'react'

export default function NavList3({ itemWidth, Indicator,text, degree,gradcolor1,gradcolor2, id,
  IconColor,activeColor, activeIconColor,MenuNumber, Font, url, icon, active,setActive}) {
  const list={
    width: itemWidth ? itemWidth: window.innerWidth<=350? (window.innerWidth-10)/MenuNumber : 70,
    height:70,
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
    transform:` translateY(${0}px)`,
    }
    const link__icon={
        fontSize: Font ? Font : `${1.5}em`,
        position: 'relative',
        display: 'block',
        lineHeight: `${75}px`,
        textAlign: 'center',
        color: IconColor? IconColor: "#4070F4",
        transition: ` ${0.4}s`,
    }
    const Activelink__icon={
      transform: Indicator ? `translateY(${-32}px)`: `translateY(${-19}px)`,
        color: activeIconColor? activeIconColor: IconColor,
        fontSize: Font ? Font : `${1.5}em`,
        position: 'relative',
        display: 'block',
        lineHeight: `${75}px`,
        textAlign: 'center',
        transition: ` ${0.4}s`,
    }
    const link__text={
        position: "absolute",
        fontSize: Font? (Font/1.666666666666) : 12,
        fontWeight: 400,
        color: IconColor? IconColor: "#4070F4",
        opacity: 0,
        transform: `translateY(${20}px)`,
        opacity: 0,
        letterSpacing:`${0.05}em`,
        transition: ` ${0.4}s`,
    }
    const Activelink__text={  
      position: "absolute",
     /* fontSize: Font? (Font/1.666666666666) : 12,*/
        fontSize: Font ? Font : `${0.75}em`,
      fontWeight: 400,
      color: IconColor? IconColor: "#4070F4",
      opacity: 0,
      transform: `translateY(${10}px)`,
      opacity: 1,
      letterSpacing:`${0.05}em`,
      transition: ` ${0.4}s`,
    }
    
  return (
    <li data-testid={id} className="menu__item"onClick={()=> setActive(url)} style={list}>
        <a href={url} data-testid={url}  style={active ? ActiveNav__link: Nav__link}>
            <i style={active ? Activelink__icon : link__icon}>
              <span className={icon}></span>
            </i>
            <span style={active ? Activelink__text : link__text}>{text}</span>
        </a>
        
    </li>
  )
}