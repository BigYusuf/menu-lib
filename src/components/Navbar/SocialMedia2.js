import React, {useState} from 'react';
import { SocialList2 } from '../NavList/SocialList2';

export const SocialMedia2= ({ WebBackground,Position,ShadowColor,ShadowIndex,Gap,itemWidth, Height, borderRadius, IconHeight, IconColor, Center,Width,MenuNumber,backgroundColor, 
    degree,gradcolor1, gradcolor2, activeIconColor, text1,text2,text3,text4,text5, activeBorderColor, MyFunction,
    Font, activeColor,url1, url2, url3, url4, url5, icon1, icon2, icon3, icon4, icon5}) => {
    const [active, setActive] = useState(false)
    
    const container={
    }
  return (
    <div style={container}className=''>
        <div className=''>
            {<SocialList2 setActive={setActive} active={active=== icon1} icon={icon1} url={url1} text={text1} Gap={Gap} activeBorderColor={activeBorderColor} MyFunction={MyFunction}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}  MenuNumber={MenuNumber}activeColor={activeColor} backgroundColor={backgroundColor} borderRadius={borderRadius}
                itemWidth={itemWidth} Width={Width} ShadowColor={ShadowColor} ShadowIndex={ShadowIndex} IconColor={ IconColor} activeIconColor={ activeIconColor} Font={Font}/>}
           
            {MenuNumber < 2 ? '': <SocialList2 setActive={setActive} active={active=== icon2} icon={icon2} url={url2} text={text2} Gap={Gap} activeBorderColor={activeBorderColor} MyFunction={MyFunction}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}  MenuNumber={MenuNumber}activeColor={activeColor} backgroundColor={backgroundColor} borderRadius={borderRadius}
                itemWidth={itemWidth} Width={Width} ShadowColor={ShadowColor} ShadowIndex={ShadowIndex} IconColor={ IconColor} activeIconColor={ activeIconColor} Font={Font} />}
           
            {MenuNumber < 3 ? '': <SocialList2 setActive={setActive} active={active=== icon3} icon={icon3} url={url3} text={text3} Gap={Gap} activeBorderColor={activeBorderColor} MyFunction={MyFunction}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}  MenuNumber={MenuNumber} activeColor={activeColor} backgroundColor={backgroundColor} borderRadius={borderRadius}
                itemWidth={itemWidth} Width={Width} ShadowColor={ShadowColor} ShadowIndex={ShadowIndex} IconColor={ IconColor} activeIconColor={ activeIconColor} Font={Font}/>}
            
            {MenuNumber < 4 ? '': <SocialList2 setActive={setActive} active={active=== icon4} icon={icon4} url={url4} text={text4} Gap={Gap}activeBorderColor={activeBorderColor} MyFunction={MyFunction}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}  MenuNumber={MenuNumber} activeColor={activeColor} backgroundColor={backgroundColor} borderRadius={borderRadius}
                itemWidth={itemWidth} Width={Width} ShadowColor={ShadowColor} ShadowIndex={ShadowIndex} IconColor={ IconColor} activeIconColor={ activeIconColor} Font={Font}/>}
            
            {MenuNumber < 5 ? '':<SocialList2 setActive={setActive} active={active=== icon5} icon={icon5} url={url5} text={text5} Gap={Gap}activeBorderColor={activeBorderColor} MyFunction={MyFunction}
                degree={degree} gradcolor1={gradcolor1} gradcolor2={gradcolor2}  MenuNumber={MenuNumber} activeColor={activeColor} backgroundColor={backgroundColor} borderRadius={borderRadius}
                itemWidth={itemWidth} Width={Width} ShadowColor={ShadowColor} ShadowIndex={ShadowIndex} IconColor={ IconColor} activeIconColor={ activeIconColor} Font={Font} />}
        </div>
    </div>
  )
}
