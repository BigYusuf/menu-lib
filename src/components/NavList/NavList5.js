import React from 'react'

export default function NavList5({ itemWidth, activeBorderColor,text, degree,gradcolor1,gradcolor2,
  IconColor,activeColor, activeIconColor,MenuNumber, Font, url, icon, active,setActive}) {
  const list={
   width: itemWidth ? itemWidth: window.innerWidth<=350? (window.innerWidth-10)/MenuNumber : 70,
    //height:70,
    listStyle: 'none',
    zIndex:1,
    position: 'relative',
  }
    const Nav__link = {
    //position: 'relative',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
    width: `${100}%`,
    //width: `${80}px`,
    textDecoration: "none",
    padding: `${15}px ${25}px`,
    // margin: `${0}px ${10}px`,
    borderRadius: `${30}px`,
    
    textAlign: 'center',
    //fontWeight: 500,
    }

  const ActiveNav__link = {
    position: 'relative',
    display: "flex",
    width: `${100}%`,
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
    textDecoration: "none",
    color: activeIconColor? activeIconColor: IconColor,
    
    borderRadius: 10,
   // height: 26,
    border: activeBorderColor? `${2}px solid ${activeBorderColor}`: `${2}px solid`,
    width: 'max-content',
    padding: `${2}px ${5}px`,
    background: degree ? `linear-gradient(${degree}, ${gradcolor1}, ${gradcolor2})`: activeColor? activeColor: 'gray',
    }
    const link__icon={
        fontSize: Font ? Font : `${1.0}em`,
      //  position: 'absolute',
      //  display: 'block',
      //  opacity: 1,
      //  lineHeight: `${75}px`,
        //textAlign: 'center',
        color: IconColor? IconColor: "#4070F4",
        //   transition: ` ${0.4}s`,
      }
      const Activelink__icon={
        color: activeIconColor? activeIconColor: IconColor,
        fontSize: Font ? Font : `${1.0}em`,
        position: 'relative',
        //display: 'none',
        //opacity: 0,
        //lineHeight: `${75}px`,
        textAlign: 'center',
        transition: ` ${0.4}s`,
    }
    
    const link__text={
     // position: "absolute",
      fontSize: Font? (Font/1.666666666666) : 12,
      fontWeight: 400,    
      marginLeft: `${10}px`,
      display:"none",
      color: IconColor? IconColor: "#4070F4",
     // opacity: 0,
     // transform: `translateY(${20}px)`,
     // opacity: 0,
     // letterSpacing:`${0.05}em`,
     // transition: ` ${0.4}s`,
  }
  const Activelink__text={  
    // position: "absolute",
    fontSize: Font? (Font/1.666666666666) : 12,
    fontWeight: 400,    
    marginLeft: `${10}px`,
    display:"block",
    color: activeIconColor? activeIconColor: IconColor,
   // opacity: 0,
   // transform: `translateY(${20}px)`,
   // opacity: 0,
   // letterSpacing:`${0.05}em`,
   // transition: ` ${0.4}s`,
  }
  return (
    <li style={list} className=''>
        <a href={url} onClick={()=> setActive(url)} style={active ? ActiveNav__link: Nav__link}>
            <i style={active ? Activelink__icon : link__icon}>
              <span className={icon}></span>
            </i>
            <span style={active ? Activelink__text : link__text}>{text}</span>
        </a>
    </li>
  )
}