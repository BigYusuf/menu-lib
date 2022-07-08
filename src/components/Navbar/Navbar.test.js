/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import renderer from 'react-test-renderer'
 
 import {render, screen, fireEvent} from '@testing-library/react'
 import { Navbar } from './index'
//import NavList from '../NavList/NavList'
 
 /*
 
 it('renders correctly', () => {
   const tree = renderer.create(<Navbar />).toJSON()
   expect(tree).toMatchSnapshot()
 })
 */
 
 describe('test all navbar', () => {
 /*
 // this commponent has no texxxt or namme
   test('test navbar', () => {
     render(<Navbar text1={'home'}/>)
   const yulchild = screen.getByText(/home/i);
   expect(yulchild).toBeInTheDocument
   //console.log(yulchild)
 })
   */
/*
 const mockChildComponent = jest.fn();
jest.mock('../NavList/NavList', () => (props) => {
  mockChildComponent(props)//{Font, MenuNumber, activeIconColor,degree, gradcolor1, gradcolor2, activeColor, url1, icon1});
  return <mock-childComponent />;
});

test("If Navbar is passed Font, NavList is called with prop Font", () => {
 const {container} = render(<Navbar Font={20} activeIconColor='blue' MenuNumber={5} 
  gradcolor1='pink' gradcolor2='gray'url1={'#home'} icon1='bx bx-home'
  degree='to bottom'activeColor='green' />);
  //console.log(container.outerHTML)
  
  expect(mockChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      Font: 20,
      MenuNumber: 5,
      activeIconColor: 'blue',
      degree: 'to bottom',
      gradcolor1: 'pink',
      gradcolor2: 'gray',
      activeColor: 'green',
      url1: '#home',
      icon1: 'bx bx-home',

    }),
    expect.anything()
    );
  });

test("If Navbar Font is not called, NavList is not called", () => {
  render(<Navbar />);
  expect(mockChildComponent).not.toHaveBeenCalled();
});
*/
jest.mock('../NavList/NavList', () => ({Font, MenuNumber, activeIconColor,degree, gradcolor1, gradcolor2, activeColor, url1, icon1}) => 
{MenuNumber &&
  <li id='mock1' className="menu__item" >
          <a href={url1} data-testid={url1} 
          style={{ background: degree ? `linear-gradient(${degree}, ${gradcolor1}, ${gradcolor2})`: activeColor,
          fontSize: Font ? Font: `${1.25}rem`,
          color: activeIconColor? activeIconColor: '',
        }}><i className={icon1}></i>
          </a>
      </li>}
  );
  test("If Navbar props is called, NavList props is called", () => {
    const {container} = render(<Navbar Font={20} activeIconColor='blue' MenuNumber={5} 
    gradcolor1='pink' gradcolor2='gray'url1={'#home'} icon1='bx bx-home'
    degree='to bottom'activeColor='green' />);

    const mockComponent1 = container.querySelector('li#mock1')
    //console.log(mockComponent1)
    expect(mockComponent1).toBeInTheDocument;
  });
  
  test("If Navbar props is not called, NavList is not called", () => {
    const {container} = render(<Navbar />);
    const mockComponent1 = container.querySelector('li#mock1')
    expect(mockComponent1).not.toBeInTheDocument;
  });
  
  
 test('confirm url address of navbar component', () => {
   render(<Navbar url1={'https://www.test.com/'} url2={'#profile'}url3={'/pen'}/>)
   
     //const url = container.querySelector('pen')
     
     expect(screen.getByTestId('https://www.test.com/').href).toBe('https://www.test.com/');
   })
 test('confirm url feature of navbar', () => {
   const {container} =render(<Navbar url1={'#home'} url2={'#profile'}url3={'/pen'}/>)
   
     const url = container.querySelector('pen')
     
     expect(url).toBeInTheDocument
   })
 
 test('confirm icon feature of navbar', () => {
   const {container} =render(<Navbar url1={'#home'} icon1={'bx bxs-home'}url3={'/pen'}/>)
   
     const icon = container.getElementsByClassName('bx bxs-home')
     
     expect(icon).toBeTruthy
   })
   
   test('to know if menunumber is correct', () => {
     const {container} = render(<Navbar MenuNumber={3} />);
 
   const boxes = container.getElementsByClassName('menu__item');
   
   expect(boxes.length).toBe(3);
   });
 
   test('checking the onclick and active', () => {
     render(<Navbar text1={'home'} url1={'#home'}/>)
     const yulchild = screen.queryByText(/home/i);
     expect(yulchild).not.toBeVisible
     
     fireEvent.click(screen.getByTestId(/home/i))
     
     expect(yulchild).toBeVisible
  });
 })
  