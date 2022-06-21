import React from 'react'
import s1 from './Images/Services/s1.svg'
import s2 from './Images/Services/s2.svg'
import s3 from './Images/Services/s3.svg'
import s4 from './Images/Services/s4.png'
import s5 from './Images/Services/s5.png'
import s6 from './Images/Services/s6.png'
import './Services.css'

export default function Services() {
    return (
        <div>
            <div id="services" class="row">
            <h1>WHAT WE SERVE?</h1>
            <div class="column">
            <img src={s1} alt="s1" className="pab-pa"></img>
            <h2>Web Development</h2>
            <p>We have the right knack and knowledge in development. Since our inception, we have delivered a quality solutions.</p>
            </div>
            <div class="column">
            <img src={s2} alt="s2" className="pab-pa"></img>
            <h2>Web Designing</h2>
            <p>We are providing services for custom website development including fully responsive layout , secure based on the customer requirments.</p>
            </div>
            <div class="column" >
            <img src={s3} alt="s3" className="pab-pa"></img>
            <h2>Mobile App Development</h2>
            <p>We design and develop interactive mobile application and provide you one-stop solution for all the UI/UX design and development tasks along with coding your custom mobile application.</p>
            </div>
            <div class="column" >
            <img src={s4} alt="s4" className="pab-pa"></img>
            <h2>DevOps</h2>
            <p>We ensures a stable work environment and speeds software delivery for true enterprise-level DevOps.</p>
            </div>
            <div class="column" >
            <img src={s5} alt="s5" className="pab-pa"></img>
            <h2>Cloud Services</h2>
            <p>We provide cloud hosting services and devOps solutions.</p>
            </div>
            <div class="column" >
            <img src={s6} alt="s6" className="pab-pa"></img>
            <h2>Business Apps (ERP)</h2>
            <p>Expand Business? Want More Customers? or Better Sales? There is a right way and a wrong way to build and expand a business. Let us show you right one.</p>
            </div>
            </div>
        </div>
    )
}
