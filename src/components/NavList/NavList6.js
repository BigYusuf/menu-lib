import React from 'react'

export default function NavList6({ itemWidth, activeBorderColor,text, degree,gradcolor1,gradcolor2,
  IconColor,activeColor, activeIconColor,id,MenuNumber, Font, url, icon, active,setActive}) {
  const list={
   width: itemWidth ? itemWidth: window.innerWidth<=370? (window.innerWidth-10)/MenuNumber : 60,
    //listStyle: 'none',
    //zIndex:1,
    //position: 'relative',
    display: "flex",
    cursor: "pointer",
    padding: `${1}rem ${1}rem`,
    borderRadius: `${30}px`,
    margin: `${0}px ${10}px`,
    alignItems: 'center',
    justifyContent: "space-between",
  }
  const activeList={
  width:'max-content',  
  justifyContent: "center",
    listStyle: 'none',
    display: "flex",
    cursor: "pointer",
    alignItems: 'center',
    //padding: `${1}rem ${1.05}rem`,
    borderRadius: `${30}px`,
    margin: `${0}px ${10}px`,
    background: degree ? `linear-gradient(${degree}, ${gradcolor1}, ${gradcolor2})`: activeColor,
    textDecoration: "none",
    padding: `${5}px ${5}px`,
    border: activeBorderColor? `${2}px solid ${activeBorderColor}`: `${2}px solid`,
  textAlign: 'center',
  }
    const Nav__link = {
      textDecoration: "none",
      display: "flex",
    justifyContent: "center",
    alignItems: "center",
      /*    
    width: `${100}%`,
    textAlign: 'center',
    */
    }
    
    const ActiveNav__link = {
      display: "flex",
      width: `${100}%`,
      //justifyContent: "center",
      alignItems: "center",
    textDecoration: "none", 
  }
    const link__icon={
        fontSize: Font ? Font : `${1.0}em`,
        textAlign: 'center',
        color: IconColor? IconColor: "#4070F4",
        transition: ` ${0.4}s`,
      }
      const Activelink__icon={
        color: activeIconColor? activeIconColor: IconColor,
        fontSize: Font ? Font : `${1.0}em`,
        textAlign: 'center',
        transition: ` ${0.4}s`,
    }
    
    const link__text={
      fontSize: Font? (Font/1.666666666666) : 12,
      fontWeight: 400,    
      marginLeft: `${10}px`,
      display:"none",
      color: IconColor? IconColor: "#4070F4",
      transition: ` ${0.4}s`,
    }
    const Activelink__text={  
    fontSize: Font? (Font/1.666666666666) : 12,
    fontWeight: 400,    
    marginLeft: `${10}px`,
    display:"block",
    color: activeIconColor? activeIconColor: IconColor,
    transition: ` ${0.4}s`,
  }
  return (
    <a href={url}data-testid={id} id={id} style={active? activeList : list} onClick={()=> setActive(url)} className='menu__item'>
      {/*<a href={url} style={active ? ActiveNav__link: Nav__link}>*/}
            <i style={active ? Activelink__icon : link__icon}>
              <span className={icon}></span>
            </i>
            <span style={active ? Activelink__text : link__text}>{text}</span>
            {/*</a>*/}
    </a>
  )
}