import React, {useState} from 'react';
import NavList from '../NavList/NavList';
import '../../navbar.css'

export const Navbar = ({Position,ShadowIndex, ShadowColor, Gap, borderRadius, IconColor, Center,Width,MenuNumber,backgroundColor, 
  degree,gradcolor1, gradcolor2, activeIconColor, MyFunction, ReactRouterDom,
  Font, activeColor,url1, url2, url3, url4, url5, icon1, icon2, icon3, icon4, icon5}) => {
  const [active, setActive] = useState(false)
  const nav__menu = {
    position: Position ? "fixed":'',
    bottom: (Position === "Bottom" || Position=== "bottom") ? 0 : '',
    top: (Position === "Top" || Position=== "top") ? 0 : '',
    backgroundColor,
    width: MenuNumber && MenuNumber<=5 ? `${65.6*MenuNumber}px` : Width ? Width : window.innerWidth<=350 ? (window.innerWidth) : 320,
    borderRadius: borderRadius ? borderRadius : 64,
    padding: `${1}rem ${2.25}rem`,
    backdropFilter: `blur(${10})`,
    transition: `${0.4}s`,  
    left: Center ? 0 : '',
    right: Center ? 0 : '',
    margin: Center ? `${Gap ? Gap: 1}rem auto`: 0,  
    boxShadow: ShadowColor ? `${0} ${5}px ${ShadowIndex? ShadowIndex: 10 }px ${ShadowColor}`: '', 
  }
  const nav__list = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      listStyle: "none",
  }
  
    return (
      <div className="">
          <div className="" style={nav__menu}>
            <ul className=""style={nav__list}>
                <NavList url={url1} icon={icon1} active={active===url1} 
                setActive={setActive} Font={Font} activeColor={activeColor} MyFunction={MyFunction} ReactRouterDom={ReactRouterDom}
                IconColor={IconColor} activeIconColor={activeIconColor} degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2} />
                
                {MenuNumber < 2 ? '': <NavList url={url2} icon={icon2} active={active===url2} 
                setActive={setActive} Font={Font} activeColor={activeColor} MyFunction={MyFunction} ReactRouterDom={ReactRouterDom}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2} 
                IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 3 ? '': <NavList url={url3} icon={icon3} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url3} setActive={setActive} Font={Font} MyFunction={MyFunction} ReactRouterDom={ReactRouterDom}
                activeColor={activeColor} IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 4 ? '': <NavList url={url4} icon={icon4} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url4} setActive={setActive} Font={Font} MyFunction={MyFunction} ReactRouterDom={ReactRouterDom}
                activeColor={activeColor} IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 5 ? '': <NavList url={url5} icon={icon5} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url5} setActive={setActive} Font={Font} MyFunction={MyFunction} ReactRouterDom={ReactRouterDom}
                activeColor={activeColor} IconColor={IconColor} activeIconColor={activeIconColor} />}
            </ul>
          </div>
      </div>
    )
}
