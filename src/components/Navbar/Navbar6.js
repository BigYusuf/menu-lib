import React, {useState} from 'react';
import NavList6 from '../NavList/NavList6';
import '../../navbar.css'


export const Navbar6 = ({WebBackground, Position, activeBorderColor, ShadowColor, ShadowIndex, Gap, itemWidth, Height, borderRadius, IconHeight, IconColor, Center, Width, MenuNumber,backgroundColor, 
  degree, gradcolor1, gradcolor2, activeIconColor, text1, text2, text3, text4, text5,
  Font, activeColor,url1, url2, url3, url4, url5, icon1, icon2, icon3, icon4, icon5}) => {
  const [active, setActive] = useState(false)
  
  const nav__menu = {
    display: "flex",
    backgroundColor,
    position: Position? "fixed":'',
    bottom: (Position === "Bottom" || Position=== "bottom") ? 0 : '',
    top: (Position === "Top" || Position=== "top") ? 0 : '', 
    margin: Center ? `${Gap ? Gap: 1}rem auto`: 0,   
    alignItems: "center",
    width: window.innerWidth<=400 ? window.innerWidth-10 : Width ? Width : MenuNumber<5 ? (itemWidth ? itemWidth * MenuNumber: 80 * MenuNumber): 400,
    borderRadius: borderRadius ? borderRadius : 12,
    justifyContent: "center",
    //padding: `${0}rem ${0.75}rem`,
    overflow: 'hidden',  
    boxShadow: ShadowColor ? `${0} ${5}px ${ShadowIndex? ShadowIndex: 10 }px ${ShadowColor}`: '', 
    left: Center ? 0 : '',
    right: Center ? 0 : '',
    height: Height ? Height: '',
    transition: `${0.4}s`,  
   }
  
   return (
      <div className="">
          <div className={""} style={nav__menu}>
            {<NavList6 url={url1} icon={icon1} active={active===url1} 
            setActive={setActive} Font={Font} activeColor={activeColor} id={text1} text={text1} MenuNumber={MenuNumber} 
            IconColor={IconColor}activeBorderColor={activeBorderColor} itemWidth={itemWidth}IconHeight={IconHeight} activeIconColor={activeIconColor} 
            degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2} />}
            
            {MenuNumber < 2 ? '': <NavList6 url={url2}icon={icon2} active={active===url2} 
            setActive={setActive} Font={Font} activeColor={activeColor} id={text2} text={text2}
            degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}  MenuNumber={MenuNumber} 
            IconColor={IconColor}activeBorderColor={activeBorderColor} itemWidth={itemWidth} activeIconColor={activeIconColor} />}
            
            {MenuNumber < 3 ? '': <NavList6 url={url3} icon={icon3} id={text3} text={text3} 
            degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
            active={active===url3} setActive={setActive} Font={Font} MenuNumber={MenuNumber} 
            activeColor={activeColor} activeBorderColor={activeBorderColor} itemWidth={itemWidth} IconColor={IconColor} activeIconColor={activeIconColor} />}
            
            {MenuNumber < 4 ? '': <NavList6 url={url4} icon={icon4} id={text4} text={text4}
            degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
            active={active===url4} setActive={setActive} Font={Font}  MenuNumber={MenuNumber} 
            activeColor={activeColor} activeBorderColor={activeBorderColor} itemWidth={itemWidth} IconColor={IconColor} activeIconColor={activeIconColor} />}
            
            {MenuNumber < 5 ? '': <NavList6 url={url5} icon={icon5} id={text5} text={text5}
            degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
            active={active===url5} setActive={setActive} Font={Font} MenuNumber={MenuNumber} 
            activeColor={activeColor}activeBorderColor={activeBorderColor} itemWidth={itemWidth} IconColor={IconColor} activeIconColor={activeIconColor} />}            
          </div>
      </div>
    )
}
