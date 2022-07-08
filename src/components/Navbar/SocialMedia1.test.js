/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import renderer from 'react-test-renderer'
 
 import {render, screen, fireEvent} from '@testing-library/react'
 import { SocialMedia1 } from './index'
 
 /*
 
 it('renders correctly', () => {
   const tree = renderer.create(<SocialMedia1 />).toJSON()
   expect(tree).toMatchSnapshot()
 })
 */
 
 describe('test all SocialMedia1', () => {
 
   test('test SocialMedia1', () => {
     render(<SocialMedia1 text1={'facebook'}/>)
   const yulchild = screen.getByText(/facebook/i);
   expect(yulchild).toBeInTheDocument
   //console.log(yulchild)
 })
   
 test('confirm url feature of navbar', () => {
   const {container} =render(<SocialMedia1 url1={'#facebook'} url2={'#profile'}url3={'/pen'}/>)
   
     const url = container.querySelector('pen')
     
     expect(url).toBeInTheDocument
   })
 
 test('confirm icon feature of navbar', () => {
   const {container} =render(<SocialMedia1 url1={'#facebook'} icon1={'bx bxl-facebook'}url3={'/pen'}/>)
   
     const icon = container.getElementsByClassName('bx bxl-facebook')
     
     expect(icon).toBeTruthy
   })
   
   test('to know if menunumber is correct', () => {
     const {container} = render(<SocialMedia1 MenuNumber={3} />);
 
   const boxes = container.getElementsByClassName('social__item');
   
   expect(boxes.length).toBe(3);
   });
 
   test('checking the onclick and active', () => {
     render(<SocialMedia1 text1={'facebook'} url1={'#facebook'}/>)
     const yulchild = screen.queryByText(/facebook/i);
     expect(yulchild).not.toBeVisible
     
     fireEvent.click(screen.getByTestId(1))
     
     expect(yulchild).toBeVisible
  });
  
jest.mock('../NavList/SocialList1', () => ({Font, itemWidth,MenuNumber,activeBorderColor,IconColor,textColor, Gap,activeIconColor,degree, 
  gradcolor1, gradcolor2, activeColor, url1,text1, icon1}) => 
{MenuNumber &&
  <li id='mock1' className="menu__item" >
          <a href={url1} data-testid={url1} 
          style={{ background: degree ? `linear-gradient(${degree}, ${gradcolor1}, ${gradcolor2})`: activeColor,
          fontSize: Font ? Font: `${1.25}rem`,
          color: activeIconColor? activeIconColor:  
          text1==='facebook'||text1==='Facebook' ? '#4267B2' : 
          text1==='instagram'||text1==='Instagram' ? '#E1306C' : 
          text1==='dribbble'||text1==='Dribbble' ? '#EA4C89' : 
          text1==='linkedin'||text1==='linkedin' ? '#0072B1' :
          text1==='youtube'||text1==='Youtube' ? '#ff0000' : 
          text1==='github'||text1==='Github' ? '#333' : 
          text1==='pinterest'||text1==='Pinterest' ? '#E60023' :
          text1==='twitter'||text1==='Twitter' ? '#1DA1F2' : IconColor,
          margin: Gap? `${0} ${Gap}px`: `${0} ${Gap}px`,
          width: itemWidth ? itemWidth: 70,
          border: activeBorderColor? `${2}px solid ${activeBorderColor}`: `${2}px solid`,
  
          
         // display: window.innerWidth <= 400 ? "none": "block",
          
        }}><i style={{background: IconColor? IconColor:  
          text1==='facebook'||text1==='Facebook' ? '#4267B2' : 
         text1==='instagram'||text1==='Instagram' ? '#E1306C' : 
         text1==='dribbble'||text1==='Dribbble' ? '#EA4C89' : 
         text1==='linkedin'||text1==='linkedin' ? '#0072B1' :
         text1==='youtube'||text1==='Youtube' ? '#ff0000' : 
         text1==='github'||text1==='Github' ? '#333' : 
         text1==='pinterest'||text1==='Pinterest' ? '#E60023' :
         text1==='twitter'||text1==='Twitter' ? '#1DA1F2' :"#4070F4",
         
      fontSize: Font? (Font/1.666666666666) : 12,
         color: textColor ? textColor : activeIconColor}} className={icon1}></i>
          </a>
      </li>}
  );
  test("If Navbar props is called, NavList props is called", () => {
    const {container} = render(<SocialMedia1 Font={20} activeIconColor='blue' MenuNumber={5} text1='facebook'
    gradcolor1='pink' gradcolor2='gray'url1={'#home'} icon1='bx bx-home'itemWidth={50}activeBorderColor={'blue'}
    degree='to bottom'activeColor='green'IconColor='green'Gap={5}textColor='green' />);

    const mockComponent1 = container.querySelector('li#mock1')
    //console.log(mockComponent1)
    expect(mockComponent1).toBeInTheDocument;
  });
  
  test("If Navbar props is not called, NavList is not called", () => {
    const {container} = render(<SocialMedia1 />);
    const mockComponent1 = container.querySelector('li#mock1')
    expect(mockComponent1).not.toBeInTheDocument;
  });
  
  
 test('confirm url address of navbar component', () => {
   render(<SocialMedia1 url1={'https://www.test.com/'} url2={'#profile'}url3={'/pen'}/>)
   
     //const url = container.querySelector('pen')
     
     expect(screen.getByTestId('https://www.test.com/').href).toBe('https://www.test.com/');
   })
 })
 