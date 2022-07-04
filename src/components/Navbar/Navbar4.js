import React, {useEffect, useState} from 'react';
import NavList4 from '../NavList/NavList4';
import '../../navbar.css'

export const Navbar4 = ({WebBackground,Position,ShadowColor,ShadowIndex,Gap,itemWidth, Height, borderRadius, IconHeight, IconColor, Center,Width,MenuNumber,backgroundColor, 
  degree,gradcolor1, gradcolor2, activeIconColor, text1,text2,text3,text4,text5, Indicator,
  Font, activeColor,url1, url2, url3, url4, url5, iconA1, iconB1, iconA2, iconB2, iconA3, iconB3, iconA4, iconB4, iconA5, iconB5}) => {
  const [active, setActive] = useState(false)
  
  const nav__menu = {
    position: Position?"fixed":'',
   transition: `${0.4}s`,  
   bottom: (Position === "Bottom" || Position=== "bottom") ? 0 : '',
   top: (Position === "Top" || Position=== "top") ? 0 : '',
   left: 0,
   right: 0,
   margin: Center ? `${Gap ? Gap: 1}rem auto`: 0,
   width: window.innerWidth<=400 ? window.innerWidth : Width ? Width : 400,
    backgroundColor,
    height: Height ? Height: 70,
    borderRadius: borderRadius ? borderRadius : 12,
    padding: `${0}rem ${2.25}rem`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    boxShadow: ShadowColor ? `${0} ${5}px ${ShadowIndex? ShadowIndex: 10 }px ${ShadowColor}`: '', 
  }
  const nav__list = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      listStyle: "none",
      
    height: Height? Height: 70,
    position: "relative",
    width: window.innerWidth<=350 ? (window.innerWidth-20) :350,
  }
  const indicator={
    position: "absolute",
    background: activeColor,
    height: 36,
    width: 25,
    //height: itemWidth ? itemWidth: window.innerWidth<=350? (window.innerWidth-10)/MenuNumber : 70,
    //width: itemWidth ? itemWidth: window.innerWidth<=350? (window.innerWidth-10)/MenuNumber : 70,
    bottom: `${-19}px`,
    borderRadius: `${50}%`,
   // border: `${6}px solid white`,
    transition: `${0.4}s`,
    opacity: active? 1 : 0,
    //left: `${34}px`,
    left: 
    active===url1 ? `${itemWidth ? itemWidth: (window.innerWidth<=350 ? 20 + (((window.innerWidth-10)/MenuNumber) * 0) : 22 +(70 * 0)) * 1}px`: 
    active===url2 ? `${itemWidth ? itemWidth: (window.innerWidth<=350 ? 20 + (((window.innerWidth-10)/MenuNumber) * 1) : 22 +(70 * 1)) * 1}px`:  
    active===url3 ? `${itemWidth ? itemWidth: (window.innerWidth<=350 ? 20 + (((window.innerWidth-10)/MenuNumber) * 2) : 22 +(70 * 2)) * 1}px`: 
    active===url4 ? `${itemWidth ? itemWidth: (window.innerWidth<=350 ? 20 + (((window.innerWidth-10)/MenuNumber) * 3) : 22 +(70 * 3)) * 1}px`: 
    active===url5 ? `${itemWidth ? itemWidth: (window.innerWidth<=350 ? 20 + (((window.innerWidth-10)/MenuNumber) * 4) : 22 +(70 * 4)) * 1}px`: '',
  }
  const indicator1={
  content: "",
  position: 'absolute',
  left: `${-15}px`,
  bottom: `${50}%`,
  height: `${22}px`,
  width: 20,
  background: "transparent",
  borderTopRightRadius: `${20}px`,
  boxShadow: WebBackground? `${0}px ${10}px ${0} ${WebBackground}`:`${0}px ${10}px ${0} white`,
}
const indicator2={
    borderTopLeftRadius: `${20}px`,
    content: '',
    borderTopLeftRadius: `${20}px`,
    boxShadow: WebBackground? `${0}px ${10}px ${0} ${WebBackground}`:`${0}px ${10}px ${0} white`,
    position: "absolute",
    background: "transparent",
    height: 20,width: 20,
    bottom: `${50}%`,
    right: `${-15}px`,
    transition: `${0.4}s`,
  }
  useEffect(() => {
    if(active){
      //console.log((window.innerWidth-10)/MenuNumber)
    }
  }, [active])
  
    return (
      <div className="">
          <div className={""} style={nav__menu}>
            <ul className=""style={nav__list}>
                {<NavList4 url={url1} iconB={iconB1} iconA={iconA1} active={active===url1} 
                setActive={setActive} Font={Font} activeColor={activeColor} text={text1} MenuNumber={MenuNumber} Indicator={Indicator}
                IconColor={IconColor} itemWidth={itemWidth}IconHeight={IconHeight} activeIconColor={activeIconColor} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2} />}
                
                {MenuNumber < 2 ? '': <NavList4 url={url2} iconB={iconB2} iconA={iconA2} active={active===url2} 
                setActive={setActive} Font={Font} activeColor={activeColor} text={text2}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}  MenuNumber={MenuNumber} Indicator={Indicator}
                IconColor={IconColor}itemWidth={itemWidth} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 3 ? '': <NavList4 url={url3} iconB={iconB3} iconA={iconA3} text={text3} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url3} setActive={setActive} Font={Font} MenuNumber={MenuNumber} Indicator={Indicator}
                activeColor={activeColor}itemWidth={itemWidth} IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 4 ? '': <NavList4 url={url4} iconB={iconB4} iconA={iconA4} text={text4}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===url4} setActive={setActive} Font={Font}  MenuNumber={MenuNumber} Indicator={Indicator}
                activeColor={activeColor}itemWidth={itemWidth} IconColor={IconColor} activeIconColor={activeIconColor} />}
                
                {MenuNumber < 5 ? '': <NavList4 url={url5} iconB={iconB5} iconA={iconA5} text={text5}
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
