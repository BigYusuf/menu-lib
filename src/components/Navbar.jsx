import React, {useState} from 'react';
import NavList from './NavList';
import PropTypes from 'prop-types'
  
const Navbar1 = ({Position, borderRadius, IconColor, Center,Width,MenuNumber,backgroundColor, 
  degree,gradcolor1, gradcolor2, activeIconColor,
  Font, activeColor,url1, url2, url3, url4, url5, icon1, icon2, icon3, icon4, icon5}) => {
  const [active, setActive] = useState(false)
  const nav__menu = {
      position: "fixed",
      bottom: (Position === "Bottom" || Position=== "bottom") ? 0 : '',
      top: (Position === "Top" || Position=== "top") ? 0 : '',
      backgroundColor,
      /*color,*/
      width: MenuNumber ? `${65.6*MenuNumber}px` : Width,
      borderRadius: borderRadius ? borderRadius : 64,
      padding: `${1}rem ${2.25}rem`,
      backdropFilter: `blur(${10})`,
      transition: `${0.4}s`,  
      left: 0,
      right: 0,
      margin: Center ? `${0} auto`: 0,
      
  }
  const nav__list = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
  }
  
    return (
      <div className="">
        <header className="" id="">
          <div className={""} style={nav__menu}>
            <ul className=""style={nav__list}>
                {<NavList url={url1} icon={icon1} active={active===url1} 
                setActive={setActive} Font={Font} activeColor={activeColor} 
                IconColor={IconColor} activeIconColor={activeIconColor} degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2} />}
                
                {MenuNumber < 2 ? '': <NavList url={url2} icon={icon2} active={active===url2} 
                setActive={setActive} Font={Font} activeColor={activeColor} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2} 
                IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 3 ? '': <NavList url={url3} icon={icon3} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url3} setActive={setActive} Font={Font} 
                activeColor={activeColor} IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 4 ? '': <NavList url={url4} icon={icon4} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url4} setActive={setActive} Font={Font} 
                activeColor={activeColor} IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 5 ? '': <NavList url={url5} icon={icon5} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url5} setActive={setActive} Font={Font} 
                activeColor={activeColor} IconColor={IconColor} activeIconColor={activeIconColor} />}
               
            </ul>
          </div>
        </header>

      </div>
    )
}
export const Navbar =() => {
  return(
    <div> Hello</div>
  )
}
export default Navbar1

Navbar1.propTypes = {
  icon1: PropTypes.string, url1: PropTypes.string,
  icon2: PropTypes.string, url2: PropTypes.string,
  icon3: PropTypes.string, url3: PropTypes.string,
  icon4: PropTypes.string, url4: PropTypes.string,
  icon5: PropTypes.string, url5: PropTypes.string,
}