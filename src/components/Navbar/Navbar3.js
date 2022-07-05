import React, { useState} from 'react';
import NavList3 from '../NavList/NavList3';
import '../../navbar.css'

export const Navbar3 = ({WebBackground, Position,ShadowColor,ShadowIndex,Gap,itemWidth, Height, borderRadius, IconHeight, IconColor, Center,Width,MenuNumber,backgroundColor, 
  degree,gradcolor1, gradcolor2, activeIconColor, text1,text2,text3,text4,text5, Indicator,activeBorderColor,
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
   width: window.innerWidth<=400 ? window.innerWidth-10 : Width ? Width : MenuNumber<5 ? (itemWidth ? itemWidth * MenuNumber: 80 * MenuNumber): 400,
    backgroundColor,
    height: Height ? Height : 70,
    borderRadius: borderRadius ? borderRadius : 12,
    padding: `${0}rem ${2.25}rem`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",   
    boxShadow: ShadowColor ? `${0} ${5}px ${ShadowIndex? ShadowIndex: 10 }px ${ShadowColor}`: '', 
  }
  const nav__list = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      listStyle: "none",
      
    height: Height? Height: 70,
    position: "relative",
    width: window.innerWidth<=350 ? (window.innerWidth-20) :350,
  }
  const indicator={
    position: "absolute",
    background: activeColor,
    height: itemWidth ? itemWidth: window.innerWidth<=350? (window.innerWidth-10)/MenuNumber : 70,
    width: itemWidth ? itemWidth: window.innerWidth<=350? (window.innerWidth-20)/MenuNumber : 70,
    top: `${-50}%`,
    borderRadius: `${50}%`,
    border: activeBorderColor? `${6}px solid ${activeBorderColor}`:'',
    transition: `${0.4}s`,
    opacity: active? 1 : 0,
    left: 
        active===url1 ? `${itemWidth ? itemWidth: (window.innerWidth<=350 ?(window.innerWidth-10)/MenuNumber : 70) * 0}px`: 
        active===url2 ? `${itemWidth ? itemWidth: (window.innerWidth<=350 ?(window.innerWidth-10)/MenuNumber : 70) * 1}px`:  
        active===url3 ? `${itemWidth ? itemWidth: (window.innerWidth<=350 ?(window.innerWidth-10)/MenuNumber : 70) * 2}px`: 
        active===url4 ? `${itemWidth ? itemWidth: (window.innerWidth<=350 ?(window.innerWidth-10)/MenuNumber : 70) * 3}px`: 
        active===url5 ? `${itemWidth ? itemWidth: (window.innerWidth<=350 ?(window.innerWidth-10)/MenuNumber : 70) * 4}px`: '',
  }
  const indicator1={
    content: '',
    borderTopRightRadius: `${20}px`,
    boxShadow: WebBackground? `${0}px ${-10}px ${0} ${0} ${WebBackground}`:`${0}px ${-10}px ${0} ${0} white`,
    position: "absolute",
    background: "transparent",
    height: 20,width: 20,
    top: `${50}%`,
    left: `${-22}px`,
    transition: `${0.4}s`,
  }
  const indicator2={
    content: '',
    borderTopLeftRadius: `${20}px`,    
    boxShadow: WebBackground? `${0}px ${-10}px ${0} ${0} ${WebBackground}`:`${0}px ${-10}px ${0} ${0} white`,
    position: "absolute",
    background: "transparent",
    height: 20,width: 20,
    top: `${50}%`,
    right: `${-22}px`,
    transition: `${0.4}s`,
  }
    return (
      <div className="">
          <div className={""} style={nav__menu}>
            <ul className=""style={nav__list}>
                {<NavList3 url={url1} icon={icon1} active={active===url1} 
                setActive={setActive} Font={Font} activeColor={activeColor} text={text1} MenuNumber={MenuNumber} Indicator={Indicator}
                IconColor={IconColor} itemWidth={itemWidth}IconHeight={IconHeight} activeIconColor={activeIconColor} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2} />}
                
                {MenuNumber < 2 ? '': <NavList3 url={url2} icon={icon2} active={active===url2} 
                setActive={setActive} Font={Font} activeColor={activeColor} text={text2}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}  MenuNumber={MenuNumber} Indicator={Indicator}
                IconColor={IconColor}itemWidth={itemWidth} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 3 ? '': <NavList3 url={url3} icon={icon3} text={text3} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url3} setActive={setActive} Font={Font} MenuNumber={MenuNumber} Indicator={Indicator}
                activeColor={activeColor}itemWidth={itemWidth} IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 4 ? '': <NavList3 url={url4} icon={icon4} text={text4}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url4} setActive={setActive} Font={Font}  MenuNumber={MenuNumber} Indicator={Indicator}
                activeColor={activeColor}itemWidth={itemWidth} IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 5 ? '': <NavList3 url={url5} icon={icon5} text={text5}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url5} setActive={setActive} Font={Font} MenuNumber={MenuNumber} Indicator={Indicator}
                activeColor={activeColor}itemWidth={itemWidth} IconColor={IconColor} activeIconColor={activeIconColor} />}
               
               {Indicator ?
                <span style={indicator}>
                      <span style={indicator1} className=''></span>
                      <span style={indicator2} className=''></span>
                </span>: ''}
              </ul>
          </div>

      </div>
    )
}
