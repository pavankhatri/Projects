import React from 'react'
import './Statistics.css'
 

export default function Statistics() {
    return (
        <div id="statistics" className="StatisticsItems">
        <div className="Statistics-logo">
            <i class="fas fa-user-friends fa-3x"/>
            <h2>68</h2>
            <h3>HAPPY CLIENTS</h3>
        </div>    
        <div className="Statistics-logo">
            <i class="fas fa-lightbulb fa-3x"/>
            <h2>187</h2>
            <h3>PROJECT</h3>
        </div> 
        <div className="Statistics-logo">
            <i class="far fa-calendar-alt fa-3x"/>
            <h2>6</h2>
            <h3>YEARS EXPERIENCE</h3>
        </div>
        <div className="Statistics-logo">
            <i class="fas fa-mug-hot fa-3x"/>
            <h2>300</h2>
            <h3>COFFEE CUPS</h3>
        </div>
        <div className="Statistics-logo">
            <i class="fas fa-star fa-3x "/>
            <h2>9</h2>
            <h3>HIGH SCORE</h3>
        </div>
        </div>
    )
}

