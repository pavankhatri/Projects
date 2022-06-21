import React from 'react'
import p1 from './Images/Process/p1.png'
import p2 from './Images/Process/p2.svg'
import p3 from './Images/Process/p3.png'
import p4 from './Images/Process/p4.png'
import './Process.css'

export default function Process() {
    return (
        <div>
            <div id="process" class="row1">
            <h1>HOW WE WORK?</h1>
            <div class="column1">
            <p>01</p>
            <h2>Planning & Communicate</h2>
            </div>
            <div class="column1">
            <img src={p1} alt="p1" className="hab-ha"></img>
            </div>
            <div class="column1">
            <img src={p2} alt="p2" className="hab-ha1"></img>
            </div>
            <div class="column1">
            <h1>02</h1>
            <h2>Prototyping & Designing</h2>
            </div>
            <div class="column1" >
            <h3>03</h3>
            <h2>Codify & Development</h2>
            </div>
            <div class="column1" >
            <img src={p3} alt="p3" className="hab-ha3"></img>
            </div>
            <div class="column1" >
            <img src={p4} alt="p4" className="hab-ha4"></img>
            </div>
            <div class="column1" >
            <h1>04</h1>
            <h2>Testing & Deploy</h2>
            </div>
            </div>
        </div>
    )
}
