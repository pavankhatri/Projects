import React from 'react'
import './Technologies.css'

import t1 from './Images/Technologies/t1.svg'
import t2 from './Images/Technologies/t2.svg'
import t3 from './Images/Technologies/t3.svg'
import t4 from './Images/Technologies/t4.png'
import t5 from './Images/Technologies/t5.png'
import t6 from './Images/Technologies/t6.png'
import t7 from './Images/Technologies/t7.jpg'
import t8 from './Images/Technologies/t8.png'

export default function Technologies() {
    return (
        <div>
            <div id="technologies" class="row111">
            <h1>TECHNOLOGIES WE USE</h1>
            <div class="column111">
            <img src={t1} alt="t1" className="bab-ba"></img>
            <h2>React Native</h2>
            </div>
            <div class="column111">
            <img src={t2} alt="t2" className="bab-ba"></img>
            <h2>React JS</h2>
            </div>
            <div class="column111" >
            <img src={t3} alt="t3" className="bab-ba"></img>
            <h3>Angular JS</h3>
            </div>
            <div class="column111" >
            <img src={t4} alt="t4" className="bab-ba"></img>
            <h4>Vue JS</h4>
            </div>
            <div class="column111" >
            <img src={t5} alt="t5" className="bab-ba"></img>
            <h5>Node JS</h5>
            </div>
            <div class="column111" >
            <img src={t6} alt="t6" className="bab-ba"></img>
            <h3>Laravel</h3>
            </div>
            <div class="column111" >
            <img src={t7} alt="t7" className="bab-ba"></img>
            <h1>GoLang</h1>
            </div>
            <div class="column111" >
            <img src={t8} alt="t8" className="bab-ba"></img>
            <h6>GraphQL</h6>
            </div>
            </div>
        </div>
    )
}
