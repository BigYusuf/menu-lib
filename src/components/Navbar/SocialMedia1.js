import React, { useState} from 'react';
import SocialList1 from '../NavList/SocialList1';
import '../../navbar.css'


export const SocialMedia1 = ({WebBackground,Position,ShadowColor,ShadowIndex,Gap,itemWidth, Height, borderRadius, IconHeight, IconColor, Center,Width,MenuNumber,backgroundColor, 
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
    height: Height ? Height: 70,
    borderRadius: borderRadius ? borderRadius : 12,
    padding: `${0}rem ${0.25}rem`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //overflow: 'hidden',  
    boxShadow: ShadowColor ? `${0} ${5}px ${ShadowIndex? ShadowIndex: 10 }px ${ShadowColor}`: '', 
  }
  const nav__list = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    position: "relative",
    width: window.innerWidth<=350 ? (window.innerWidth-20) :350,
  }

    return (
      <div className="">
          <div className={""} style={nav__menu}>
            <div className=""style={nav__list}>
                {<SocialList1 url={url1} icon={icon1} active={active===icon1} 
                setActive={setActive} Font={Font} activeColor={activeColor} text={text1} MenuNumber={MenuNumber} Indicator={Indicator}
                itemWidth={itemWidth}IconHeight={IconHeight} id={1}
                IconColor={IconColor} activeBorderColor={activeBorderColor}
                activeIconColor={activeIconColor} 
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2} />}
                
                {MenuNumber < 2 ? '': <SocialList1 url={url2}icon={icon2} active={active===icon2} 
                setActive={setActive} Font={Font} activeColor={activeColor} text={text2} id={2}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}  MenuNumber={MenuNumber} Indicator={Indicator}
                itemWidth={itemWidth} IconColor={  IconColor} activeBorderColor={activeBorderColor}
                activeIconColor={ activeIconColor} />}
                
                {MenuNumber < 3 ? '': <SocialList1 url={url3} icon={icon3} text={text3} id={3}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}
                active={active===icon3} setActive={setActive} Font={Font} MenuNumber={MenuNumber} Indicator={Indicator}
                activeColor={activeColor}itemWidth={itemWidth}  activeBorderColor={activeBorderColor}
                IconColor={ IconColor} activeIconColor={ activeIconColor} />}
                
                {MenuNumber < 4 ? '': <SocialList1 url={url4} icon={icon4} text={text4}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2} id={4}
                active={active===icon4} setActive={setActive} Font={Font}  MenuNumber={MenuNumber} Indicator={Indicator}
                activeColor={activeColor}itemWidth={itemWidth}  activeBorderColor={activeBorderColor}
                IconColor={IconColor} activeIconColor={ activeIconColor} />}
                
                {MenuNumber < 5 ? '': <SocialList1 url={url5} icon={icon5} text={text5}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}id={5}
                active={active===icon5} setActive={setActive} Font={Font} MenuNumber={MenuNumber} Indicator={Indicator}
                activeColor={activeColor}itemWidth={itemWidth} 
                IconColor={IconColor}  activeBorderColor={activeBorderColor}
                    activeIconColor={ activeIconColor} />}
               
              </div>
          </div>

      </div>
    )
}
