import React from 'react'
import hire1 from './Images/HireUs/hire1.svg'
import hire2 from './Images/HireUs/hire2.svg'
import './HireUs.css'

export default function HireUs() {
    return (

            <div id="hireus" className="cards11">
                 <div className="cards12">
                     {/* <span className="riben">Hire Developer</span> */}
                    <img src={hire1} alt="hire1" className="kab-ka1"></img>
                    <h1>Web Developer</h1>
                    <p>We provide a team of right developers by your side which can ensure top quality services in a timely manner. We have relevant expertise and experience with Mobile Technology and our eagerly passionate to fulfil your expectations. Hire us today !</p>
                    <button>Let's Talk</button>   
                </div>
                <div className="cards12">
                    <img src={hire2} alt="hire2" className="kab-ka1"></img>
                    <h1>Mobile App Developer</h1>
                    <p>In order to leverage its potential in the true essence, you need a team of right developers by your side which can ensure top quality services in a timely manner. We have relevant expertise and experience with Web Technology and our eagerly passionate to fulfil your expectations.</p>
                    <button>Let's Talk</button>
                </div> 
            </div>
    )
}
