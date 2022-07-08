import React from 'react'
import  {SocialMedia1, Navbar5, Navbar4, Navbar3,Navbar2, Navbar, SocialMedia2, Navbar6} from '../components/Navbar'
import '../assets/boxicons-2.0.7/css/boxicons.min.css';
import '../assets/fontello-03b2e848/css/fontello.css';
export default {
    title: "Navbar",
    /*component: Navbar3,
    component: Navbar2,
    component: Navbar*/
}

export const NavBar = () => {
    return(
        <div>
        {/*<i className='icon-up'></i>*/}
        
        <Navbar2
        MenuNumber={5}  Center={true}//Font={25}
        Position={"top"} Gap={10} activeColor={"green"} //ShadowIndex={10} //ShadowColor="blue"
        url1={"#home"} icon1={"bx bxl-facebook"} text1={"Facebook"} //activeIconColor={"#29fd53"}
        url2={"#aboutme"} icon2={"bx bxl-twitter"} text2={"Twitter"} //itemWidth={50} //Width={150} 
        IconColor={"#17a2b8"} degree={"to bottom"} gradcolor1={"blue"} gradcolor2={"yellow"}
        url3={"#hsd"} icon3={"bx bxl-instagram"} text3={"Instagram"}
        url4={"#meet"}icon4={"bx bxl-github"} text4={"github"} 
        url5={"#hsda"} icon5={"bx bxl-linkedin"} text5={"linkedin"}  backgroundColor={"crimson"}
      />

        {/*  
        <Navbar5 IconColor={'#17a2b8'} MenuNumber={4}ShadowColor="black"Font={25}
        Center={true}Position={'top'} activeColor={"#ddd9f1"} Indicator
        url1={'#home'}icon1={"bx bx-home"} text1={"Home"}activeIconColor={"#29fd53"}
        url2={'#aboutme'}icon2={"bx bx-book-alt"} text2={"Comment"} 
         
        url3={'#hsd'}icon3={"bx bx-user"} text3={"Profile"}
        url4={'#meet'}icon4={"bx bx-pin"} text4={"Map"}
        url5={'#hsda'}icon5={"bx bx-box"} text5={"Comment"}
        backgroundColor={"crimson"} />
        
        <Navbar6 IconColor={'#17a2b8'} MenuNumber={5}ShadowColor="black"activeBorderColor//Font={25}
         Position={'bottom'} activeColor={"#ddd9f1"} //Width={400}
        //degree={'to bottom'} gradcolor1={'red'} gradcolor2={'#fff'} 
        url1={'#home'}icon1={"bx bx-home"} text1={"Home"}activeIconColor={"#29fd53"}
        url2={'#aboutme'}icon2={"bx bx-book-alt"} text2={"Comment"} //itemWidth={25}
        Center={true} 
        url3={'#hsd'}icon3={"bx bx-user"} text3={"Profile"}
        url4={'#meet'}icon4={"bx bx-pin"} text4={"Maps"}
        url5={'#hsda'}icon5={"bx bx-box"} text5={"Comment"}
        backgroundColor={"crimson"} />
        
        <Navbar 
        MenuNumber={5}
        Center={true}Position={'top'} activeColor={"green"}ShadowIndex={10} ShadowColor="blue"
        url1={'#home'}icon1={"bx bx-home"} text1={"Facebook"}//activeIconColor={"#29fd53"}
        url2={'#aboutme'}icon2={"bx bxl-twitter"} text2={"Twitter"}  //itemWidth={50}
        //Width={150}
        IconColor={'#17a2b8'}
       //  degree={'to bottom'} gradcolor1={'blue'}gradcolor2={'yellow'} 
        url3={'#hsd'}icon3={"bx bxl-instagram"} text3={"Instagram"}
        url4={'#meet'}icon4={"bx bxl-github"} text4={"github"}
        url5={'#hsda'}icon5={"bx bxl-linkedin"} text5={"linkedin"}
        backgroundColor={"gray"} />
        
        <Navbar4 IconColor={'#17a2b8'} MenuNumber={3}ShadowColor="black"
        Center={true}Position={'top'} activeColor={"#29fd53"} Indicator
        url1={'#home'}iconA1={"bx bx-home"} iconB1={"bx bxs-home"} text1={"Home"}
        url2={'#aboutme'}iconA2={"bx bx-book-alt"}iconB2={"bx bxs-book-alt"} text2={"Comment"} 
        // WebBackground={'white'}activeBorderColor={'white'}
         url3={'#hsd'}iconA3={"bx bx-user"} iconB3={"bx bxs-user"} text3={"Profile"}
         url4={'#meet'}iconA4={"bx bx-pin"}iconB4={"bx bxs-pin"} text4={"Analytics"}
         url5={'#hsda'}iconA5={"bx bx-box"}iconB5={"bx bxs-box"} text5={"Comment"}
         backgroundColor={"crimson"} />
    
    <Navbar3 IconColor={'#17a2b8'} MenuNumber={5}activeColor={"#29fd53"}
         WebBackground={'white'}activeBorderColor={'white'}
    Center={true}Position={'bottom'} ShadowColor="black" //Height={70}
    url1={'#home'}icon1={"bx bxs-home"} text1={"Home"} //Font={15}
    activeIconColor={'white'}
    url2={'#aboutme'}icon2={"bx bxs-book-alt"}text2={"Comment"} //Width={200}
    Indicator
    url3={'#hsd'}icon3={"bx bxs-user"} text3={"Profile"}
    url4={'#meet'}icon4={"bx bxs-pin"} text4={"Analytics"}
    url5={'#hsda'}icon5={"bx bxs-box"} text5={"Comment"}
    backgroundColor={"crimson"} />
    
    
    <SocialMedia2 
    MenuNumber={4}//Font={25}  
    Center={true}Position={'top'} //activeColor={"#ddd9f1"}ShadowIndex={10} ShadowColor="blue"
    url1={'#home'}icon1={"bx bxl-facebook"} text1={"Facebook"}//activeIconColor={"#29fd53"}
        url2={'#aboutme'}icon2={"bx bxl-twitter"} text2={"Twitter"}  //itemWidth={50}
        Width={150}IconColor={'#17a2b8'}
        url3={'#hsd'}icon3={"bx bxl-instagram"} text3={"Instagram"}
        url4={'#meet'}icon4={"bx bxl-github"} text4={"github"}
        url5={'#hsda'}icon5={"bx bxl-linkedin"} text5={"linkedin"}
        backgroundColor={"transparent"} />
        
    <SocialMedia1 MenuNumber={5}Font={25} //IconColor={'#17a2b8'} 
    Center={true}Position={'bottom'} activeColor={"transparent"}ShadowIndex={0} ShadowColor="blue"
    url1={'#home'}icon1={"bx bxl-facebook"} text1={"Facebook"}//activeIconColor={"#29fd53"}
    url2={'#aboutme'}icon2={"bx bxl-twitter"} text2={"Twitter"}  
    url3={'#hsd'}icon3={"bx bxl-instagram"} text3={"Instagram"}
    url4={'#meet'}icon4={"bx bxl-github"} text4={"github"}
    url5={'#hsda'}icon5={"bx bxl-linkedin"} text5={"linkedin"}
        backgroundColor={"transparent"} />
    */}
    
    
        
        </div>
    );

}