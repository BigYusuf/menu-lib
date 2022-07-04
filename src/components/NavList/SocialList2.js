import React from 'react'

export const SocialList2 = ({ MyFunction,Gap, backgroundColor,itemWidth, Width, activeBorderColor,text, degree,gradcolor1,gradcolor2,
    IconColor,activeColor,ShadowColor,ShadowIndex, activeIconColor,MenuNumber, Font, url, icon, active,setActive})  => {
        const wrapper={
            display: 'inline-block',
            height: itemWidth? itemWidth:`${60}px`,
            width: itemWidth? itemWidth:`${60}px`,
            float: 'left',
            margin: Gap?`${0} ${Gap}px` :`${0} ${5}px`,
          //  background: backgroundColor,
            borderRadius: 50,
            cursor: 'pointer',
          //  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            boxShadow: ShadowColor ? `${0} ${5}px ${ShadowIndex? ShadowIndex: 10 }px ${ShadowColor}`: '', 
            overflow: 'hidden',
            transition: `${0.4}s`,
        }
        const activeWrapper={
            display: 'inline-block',
            height: itemWidth? itemWidth:`${60}px`,
            width: Width ? Width: itemWidth? (itemWidth+15)*2: Font > 30 ?`${(Font/1.4)*7}px`: `${(Font/1.4)*8}px`,
            float: 'left',
            margin: `${0} ${5}px`,
            background: backgroundColor,
            borderRadius: 50,
            cursor: 'pointer', 
            boxShadow: ShadowColor ? `${0} ${5}px ${ShadowIndex? ShadowIndex: 10 }px ${ShadowColor}`: '', 
            overflow: 'hidden',
            transition: `${0.4}s`,
            border: activeBorderColor? `${1}px solid ${activeBorderColor}`: ``,
          }
          const icon__style={
        display: 'inline-block',
        height: itemWidth? itemWidth:`${60}px`,
        width: itemWidth? itemWidth:`${60}px`,
        textAlign: 'center',
        borderRadius: 50,
        boxSizing: 'border-box',
        fontSize: Font? Font: 20,
        lineHeight: itemWidth? `${itemWidth}px`:`${60}px`,
        background: backgroundColor? backgroundColor: '',
        color: IconColor? IconColor: 
        text==='facebook'||text==='Facebook' ? '#4267B2' : 
        text==='instagram'||text==='Instagram' ? '#E1306C' : 
        text==='dribbble'||text==='Dribbble' ? '#EA4C89' : 
        text==='linkedin'||text==='linkedin' ? '#0072B1' :
        text==='youtube'||text==='Youtube' ? '#ff0000' : 
        text==='github'||text==='Github' ? '#333' : 
        text==='pinterest'||text==='Pinterest' ? '#E60023' :
          text==='twitter'||text==='Twitter' ? '#1DA1F2' :"#4070F4",
    }
    const activeIcon__style={
        display: 'inline-block',
        height: itemWidth? itemWidth:`${60}px`,
        width: itemWidth? itemWidth:`${60}px`,
        textAlign: 'center',
        borderRadius: 50,
        boxSizing: 'border-box',
        fontSize: Font? Font: 20,
        border: activeBorderColor? `${1}px solid ${activeBorderColor}`: ``,
        lineHeight: itemWidth? `${itemWidth}px`:`${60}px`,
        color: activeIconColor? activeIconColor: 'white',
        background: degree ? `linear-gradient(${degree}, ${gradcolor1}, ${gradcolor2})`: activeColor ? activeColor:
        text==='facebook'||text==='Facebook' ? '#4267B2' : 
        text==='instagram'||text==='Instagram' ? '#E1306C' : 
        text==='dribbble'||text==='Dribbble' ? '#EA4C89' : 
        text==='linkedin'||text==='linkedin' ? '#0072B1' :
        text==='youtube'||text==='Youtube' ? '#ff0000' : 
        text==='github'||text==='Github' ? '#333' : 
        text==='pinterest'||text==='Pinterest' ? '#E60023' :
        text==='twitter'||text==='Twitter' ? '#1DA1F2' :"#4070F4",
    }
    const text__style={
        display: 'inline-block',
        fontSize: Font? Font/1.4: '',
        height: itemWidth? itemWidth:`${60}px`,
        width: itemWidth? itemWidth:`${60}px`,
        paddingLeft: 5,
        color: activeColor ? activeColor:
          text==='facebook'||text==='Facebook' ? '#4267B2' : 
          text==='instagram'||text==='Instagram' ? '#E1306C' : 
          text==='dribbble'||text==='Dribbble' ? '#EA4C89' : 
          text==='linkedin'||text==='linkedin' ? '#0072B1' :
          text==='youtube'||text==='Youtube' ? '#ff0000' : 
          text==='github'||text==='Github' ? '#333' : 
          text==='pinterest'||text==='Pinterest' ? '#E60023' :
          text==='twitter'||text==='Twitter' ? '#1DA1F2' :"#4070F4",
        textAlign: 'center',
        borderRadius: 50,
        boxSizing: 'border-box',
        lineHeight: itemWidth? `${itemWidth}px`:`${60}px`,
    }
  return (
    <div style={active? activeWrapper: wrapper} onMouseLeave={()=> setActive(!active)}
      onMouseEnter={()=> setActive(icon)}>
        <a href={url}onClick={MyFunction}>
            <div style={active? activeIcon__style: icon__style} className=''><i className={icon}></i></div>
            <span style={text__style}>{text}</span>
        </a>
    </div>
  )
}
