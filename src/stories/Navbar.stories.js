import React from 'react'
import  {Navbar} from '../components/Navbar/Navbar'
import '../assets/boxicons-2.0.7/css/boxicons.min.css';

export default {
    title: "Navbar",
    component: Navbar
}

export const NavBar = () => {
    return(
        <Navbar IconColor={'yellow'} activeColor={'#a595e9'}MenuNumber={4}
        url1={'#home'}icon1={"bx bx-home-alt"} Center={true}Position={'bottom'}
        url2={'#aboutme'}icon2={"bx bx-book-alt"} activeIconColor={''}
        url3={'#hsd'}icon3={"bx bx-user"} url4={'#meet'}icon4={"bx bx-pin"} 
        url5={'#hsda'}icon5={"bx bx-box"} 
        backgroundColor={"green"} degree={`to bottom`} gradcolor1={'#a595e9'} gradcolor2={'#a595e933'}/>
    );

}