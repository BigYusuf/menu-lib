/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import renderer from 'react-test-renderer'
 
 import {render, screen, fireEvent} from '@testing-library/react'
 import { Navbar2 } from './index'
 
 /*
 
 it('renders correctly', () => {
   const tree = renderer.create(<Navbar2 />).toJSON()
   expect(tree).toMatchSnapshot()
 })
 */
 
 describe('test all navbar2', () => {
 
   test('test navbar2', () => {
     render(<Navbar2 text1={'home'}/>)
   const yulchild = screen.getByText(/home/i);
   expect(yulchild).toBeInTheDocument
   //console.log(yulchild)
 })
   
 test('confirm url feature of navbar', () => {
   const {container} =render(<Navbar2 url1={'#home'} url2={'#profile'}url3={'/pen'}/>)
   
     const url = container.querySelector('pen')
     
     expect(url).toBeInTheDocument
   })
 
 test('confirm icon feature of navbar', () => {
   const {container} =render(<Navbar2 url1={'#home'} icon1={'bx bxs-home'}url3={'/pen'}/>)
   
     const icon = container.getElementsByClassName('bx bxs-home')
     
     expect(icon).toBeTruthy
   })
   
   test('to know if menunumber is correct', () => {
     const {container} = render(<Navbar2 MenuNumber={3} />);
 
   const boxes = container.getElementsByClassName('menu__item');
   
   expect(boxes.length).toBe(3);
   });
 
   test('checking the onclick and active', () => {
    render(<Navbar2 text1={'home'} url1={'#home'}/>)
    const yulchild = screen.queryByText(/home/i);
    expect(yulchild).not.toBeVisible
    
    fireEvent.click(screen.getByTestId(/home/i))
    
    expect(yulchild).toBeVisible
    
 })
 

jest.mock('../NavList/NavList2', () => ({Font, MenuNumber,IconColor,textColor, Gap,activeIconColor,degree, gradcolor1, gradcolor2, activeColor, url1, icon1}) => 
{MenuNumber &&
  <li id='mock1' className="menu__item" >
          <a href={url1} data-testid={url1} 
          style={{ background: degree ? `linear-gradient(${degree}, ${gradcolor1}, ${gradcolor2})`: activeColor,
          fontSize: Font ? Font: `${1.25}rem`,
          color: activeIconColor? activeIconColor: '',
          margin: Gap? `${0} ${Gap}px`: `${0} ${Gap}px`,
          
         // display: window.innerWidth <= 400 ? "none": "block",
          
        }}><i style={{background: IconColor ? IconColor : '',color: textColor ? textColor : activeIconColor}} className={icon1}></i>
          </a>
      </li>}
  );
  test("If Navbar props is called, NavList props is called", () => {
    const {container} = render(<Navbar2 Font={20} activeIconColor='blue' MenuNumber={5} 
    gradcolor1='pink' gradcolor2='gray'url1={'#home'} icon1='bx bx-home'
    degree='to bottom'activeColor='green'IconColor='green'Gap={5}textColor='green' />);

    const mockComponent1 = container.querySelector('li#mock1')
    //console.log(mockComponent1)
    expect(mockComponent1).toBeInTheDocument;
  });
  
  test("If Navbar props is not called, NavList is not called", () => {
    const {container} = render(<Navbar2 />);
    const mockComponent1 = container.querySelector('li#mock1')
    expect(mockComponent1).not.toBeInTheDocument;
  });
  
  
 test('confirm url address of navbar component', () => {
   render(<Navbar2 url1={'https://www.test.com/'} url2={'#profile'}url3={'/pen'}/>)
   
     //const url = container.querySelector('pen')
     
     expect(screen.getByTestId('https://www.test.com/').href).toBe('https://www.test.com/');
   })

})
 
 