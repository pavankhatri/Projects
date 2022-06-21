import React from 'react'
import './Contact.css'
import './Footer.css'

export default function Contact() {

        return (
            <>
            <div id="contact" className="portfolio1010">
                <h1>PORTFOLIO</h1>
            </div>

            <div className="form1">
                <form onSubmit="" >
                    <div className="form3">
                    <label>Name</label>
                    <input class="fas fa-user-circle" id="name" name="name" type="text" placeholder=" Enter Name" required></input>
                    <i class="fas fa-user-circle"></i>
                    </div>
                    <div className="form3">
                    <label>Email</label>
                    <input  class="fas fa-envelope" id="name" name="name" type="text" placeholder=" Enter Email" required></input>
                    <i class="fas fa-envelope"></i>
                    </div>
                    <div className="form3">
                    <label>Phone</label>
                    <input  class="fas fa-phone-square-alt" id="name" name="name" type="text" placeholder=" Enter Phone" required></input>
                    <i class="fas fa-phone-square-alt"></i>
                    </div>
                    <div className="form3">
                    <label>Message</label>
                    <div className="form4">
                    <input  class="fas fa-comments" id="name" name="name" type="text" placeholder=" Enter Message" required></input>
                    <i class="fas fa-comments"></i>
                    <button>Submit</button>
                    </div>
                    </div>
                    
                </form>
            </div>

            <div id="last"className="StatisticsItems111">
            <div className="Statistics-logo111">
                <div className="hello"> 
                <h1>Webelight Solutions</h1>
                <p>We are bunch of people that aspire to provide web solutions to individuals and companies. Our love for the web is what drives us.</p>
                <i  class="fab fa-facebook-square fa-2x"></i>
                <i class="fab fa-google-plus-square fa-2x"></i>
                <i class="fab fa-twitter-square fa-2x"></i>
                <i class="fab fa-linkedin fa-2x"></i>
                </div>
            </div>    
            <div className="Statistics-logo111">
                <div className="hello1">
            <h1>Quick Links</h1>
            <div className="table000">
                <tr>
                    <tr class="fas fa-angle-double-right"> Services</tr>
                    <th class="fas fa-angle-double-right"> Statistics</th>
                </tr>
                <tr>
                    <th class="fas fa-angle-double-right"> Hire Us </th>
                    <th class="fas fa-angle-double-right"> Portfolio</th>
                </tr>
                <tr>
                    <th class="fas fa-angle-double-right"> Process</th>
                    <th class="fas fa-angle-double-right"> Technologies</th>
                </tr>
                </div>
            </div>
            </div> 
            <div className="Statistics-logo111">
                <div className="hello2">
                <h1>Get In Touch</h1>
                <h3><i class="fas fa-map-marker-alt"></i>  1st Floor, Studio Complex S.G. Highway, Gota Ahmedabad</h3>
                <h3><i class="fas fa-phone-alt"></i>  +91-7405288281</h3>
                <h3><i class="fas fa-envelope"></i>  info@webelight.co.in</h3>
                </div>
            </div>
            </div>

            </>
        )
    }

