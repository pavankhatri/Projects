import React, { useState , useEffect } from 'react'
import logo from './Images/Navbar/logo.png';
import './Navbar.css'


export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
            document.title = `Web view`;
            alert('Reload | useEffect')
    });
    

    return (
<>
    <nav className="navbar">
         <h3 className="logo"><img src={logo} alt="Logo" className="fab-fa" /></h3>
         <ul 
         className={isMobile ? "nav-links-mobile" : "nav-links"}
         >

             <a href="#hscroll" className="home" activeStyle>
                <li>Home</li>
             </a>
             <a href="#services" className="services" activeStyle>
                <li>Services</li>
             </a>
             <a href="#statistics" className="statistics" activeStyle>
                 <li>Statistics</li>
             </a>
             <a href="#process" className="process" activeStyle>
                <li>Process</li>
             </a>
             <a href="#hireus" className="hireus" activeStyle>
                <li>HireUs</li>
             </a>
             <a href="#portfolio" className="portfolio0" activeStyle>
                <li>Portfolio</li>
             </a>
             <a href="#technologies" className="technologies" activeStyle>
                <li>Technologies</li>
             </a>
             <a href="#contact" className="contact" activeStyle>
                <li>Contact</li>
             </a>
             
         </ul>  
         
         <button className="mobile-menu-icon"
         onClick={() => setIsMobile(!isMobile)}
         >
             {isMobile ? (<i className='fas fa-bars'></i>) : (<i className='fas fa-bars'></i>)}
         </button>
    </nav>

</> 
    )

}