import React, { useState} from 'react';
import NavList2 from '../NavList/NavList2';
import '../../navbar.css'

export const Navbar2 = ({Position,ShadowColor,ShadowIndex,Gap,itemWidth, Height, borderRadius, IconHeight, IconColor, Center,Width,MenuNumber,backgroundColor, 
  degree,gradcolor1, gradcolor2,WebBackground, activeIconColor, text1,text2,text3,text4,text5,
  Font, activeColor,url1, url2, url3, url4, url5, icon1, icon2, icon3, icon4, icon5}) => {
  const [active, setActive] = useState(false)
  
  const nav__menu = {
    position: Position?"fixed":'',
   transition: `${0.4}s`,  
   bottom: (Position === "Bottom" || Position=== "bottom") ? 0 : '',
   top: (Position === "Top" || Position=== "top") ? 0 : '',
   left: 0,
   right: 0,
   margin: Center ? `${Gap ? Gap: 1}rem auto`: 0, 
   width: Width ? Width : window.innerWidth<=500 ? window.innerWidth-10 : MenuNumber<5 ? (itemWidth ? itemWidth * MenuNumber: 130 * MenuNumber): 'max-content',
    backgroundColor,
    borderRadius: borderRadius ? borderRadius : 12,
    padding: `${0}rem ${2.25}rem`,
   textAlign: 'center',   
   boxShadow: ShadowColor ? `${0} ${5}px ${ShadowIndex? ShadowIndex: 10 }px ${ShadowColor}`: '', 
  }
  const nav__list = {
    display: "flex",
    height: Height? Height: '',
    justifyContent: window.innerWidth<=400 ? "space-between": "center",
    position: "relative",
  }
  return (
      <div className="">
          <div className={""} style={nav__menu}>
            <ul className=""style={nav__list}>
                {<NavList2 url={url1} icon={icon1} active={active===url1} id={icon1}
                setActive={setActive} Font={Font} activeColor={activeColor} text={text1} MenuNumber={MenuNumber} 
                IconColor={IconColor} itemWidth={itemWidth}IconHeight={IconHeight} activeIconColor={activeIconColor} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2} />}
                
                {MenuNumber < 2 ? '': <NavList2 url={url2} icon={icon2} active={active===url2} 
                setActive={setActive} Font={Font} activeColor={activeColor} text={text2} id={icon2}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}  MenuNumber={MenuNumber} 
                IconColor={IconColor}itemWidth={itemWidth} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 3 ? '': <NavList2 url={url3} icon={icon3} text={text3} id={icon3}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url3} setActive={setActive} Font={Font} MenuNumber={MenuNumber} 
                activeColor={activeColor}itemWidth={itemWidth} IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 4 ? '': <NavList2 url={url4} icon={icon4} text={text4} id={icon4}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url4} setActive={setActive} Font={Font}  MenuNumber={MenuNumber} 
                activeColor={activeColor}itemWidth={itemWidth} IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 5 ? '': <NavList2 url={url5} icon={icon5} text={text5} id={icon5}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url5} setActive={setActive} Font={Font} MenuNumber={MenuNumber} 
                activeColor={activeColor}itemWidth={itemWidth} IconColor={IconColor} activeIconColor={activeIconColor} />}
               
               
              </ul>
          </div>

      </div>
    )
}
