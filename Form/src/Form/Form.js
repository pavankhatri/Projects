import React, { Component } from 'react'
import './Form.css'

export class form extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            email: '',
            phone: '',
            password: '',
            gender: '',
            language: '',
            topic: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    } 

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    } 

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    
    
    handleSubmit = (event) => {
         
        // document.getElementById('root').innerHTML = `UserName: ${this.state.username} 
        //                                             Email: ${this.state.email} 
        //                                             Phone: ${this.state.phone}  
        //                                             Password: ${this.state.password} 
        //                                             Gender: ${this.state.gender} 
        //                                             Language: ${this.state.language}
        //                                             Topic: ${this.state.topic} 
        //                                             Confirm?`
        alert(`UserName: ${this.state.username}  Email: ${this.state.email}  Phone: ${this.state.phone}  Password: ${this.state.password}  Gender: ${this.state.gender} Language: ${this.state.language} Topic: ${this.state.topic}  Confirm?`)
        //event.preventDefault()
         
    } 

    render() {
        const {username, email ,phone ,password ,gender ,language ,topic } = this.state
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <h1 className="h1" ><b>Trial Form</b></h1>
                    <p className="p">Please Fill Up The Form </p>
                    <div>
                        <h3 className="h3">Name : <input type="text" autoComplete="off"
                             value={username} onChange={this.handleUsernameChange} ></input></h3>
                    </div>
                    <div>
                        <h3 className="h3">Email : <input type="text" autoComplete="off"
                             value={email} onChange={this.handleEmailChange}  ></input></h3>
                    </div>
                    <div>
                        <h3 className="h3">Phone : <input type="number" autoComplete="off"
                             value={phone} onChange={this.handlePhoneChange}  ></input></h3>
                    </div>
                    <div>
                        <h3 className="h3">Password : <input type="password" autoComplete="off"
                            value={password} onChange={this.handlePasswordChange}></input></h3>
                    </div> 
                    <div>
                        <h3 className="h3">
                            <div value = {gender} onChange={this.handleGenderChange}>
                            Gender: <input type="radio" name="gender" value="Male"></input>Male
                                    <input type="radio" name="gender" value="Female"></input>Female
                            </div>
                        </h3>
                    </div>
                    <div>
                        <h3 className="h3">
                            <div value = {language} onChange={this.handleLanguageChange}>
                            Language: <input type="checkbox" value="English"></input>English<br></br>
                                      <input type="checkbox" value="Hindi"></input>Hindi<br></br>
                                      <input type="checkbox" value="Gujrati"></input>Gujrati<br></br>
                                      <input type="checkbox" value=""></input>others<br></br>
                            </div>
                        </h3>
                    </div>
                    </div>
                    <div>
                    <label><h3 className="h3"> Topic : </h3></label>
                    <div className="h3">
                        <select value = {topic} onChange={this.handleTopicChange} >
                            <option value="react" >react</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                        </div>
                </div>
                <div > 
                     <button class="vertical-center" ><b4>Sumbit</b4></button>  
                </div>
                </form>
            </div>
        )
    }
}

export default form
