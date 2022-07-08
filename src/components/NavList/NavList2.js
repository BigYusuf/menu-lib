import React from 'react'

export default function NavList2({ itemWidth, MyFunction,text, degree,gradcolor1,gradcolor2,Gap, id,
  IconColor,activeColor,textColor,activeTextColor, activeIconColor,MenuNumber, Font, url, icon, active,setActive}) {
  const list={
   // width: itemWidth ? itemWidth: window.innerWidth<=350? (window.innerWidth-10)/MenuNumber : 70,
    //height:70,
    listStyle: 'none',
    zIndex:1,
    justifyContent: "space-between",
    position: 'relative',
  }
    const Nav__link = {
    position: 'relative',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    width: `${100}%`,
    textDecoration: "none",
    fontWeight: 400,
    listStyle: 'none',
    zIndex:1,
    color: IconColor ? IconColor : '',
    height: `${100}%`,
    fontSize: Font? Font :`${14}px`,
  lineHeight: `${40}px`,
  borderRadius: `${5}px`,
  margin: `${0} ${5}px`,
    }
    
    const ActiveNav__link = {
      
      justifyContent: "center",
      alignItems: "center",
      textAlign: 'center',
      position: 'relative',
    display:"flex",
    width: `${100}%`,
    textDecoration: "none",
    fontWeight: 400,
    listStyle: 'none',
    zIndex:1,
    background: degree ? `linear-gradient(${degree}, ${gradcolor1}, ${gradcolor2})`: activeColor,
   
    
    height: `${100}%`,
    fontSize: Font? Font :`${14}px`,
  lineHeight: `${40}px`,
  borderRadius: `${5}px`,
  margin: Gap ? `${0} ${Gap}px`: `${0} ${5}px`,
  
    }
    const link__icon={
      marginRight: 4,
      
    }
    const Activelink__icon={
      marginRight: 4,
      color: activeIconColor ? activeIconColor : IconColor,

    }
    
    const link__text={
      color: textColor ? textColor : IconColor,
      display: window.innerWidth <= 400 ? "none": "block",
      transition: ` ${0.4}s`,
    }
    const Activelink__text={
      display: window.innerWidth <= 400 ? "none": "block",
      color: textColor ? textColor : activeIconColor,
    transition: ` ${0.4}s`,
  }
  
  return (
    <li data-testid={id} className="menu__item" onClick={()=> setActive(url)} style={list} >
        <a href={url} data-testid={url} onClick={MyFunction} style={active ? ActiveNav__link: Nav__link}>
            <i style={active ? Activelink__icon : link__icon}>
              <span className={icon}></span>
            </i>   
            <span style={active ? Activelink__text : link__text}>{text}</span>
        </a>
    </li>
  )
}