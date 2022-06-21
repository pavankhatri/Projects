import React from 'react';
import Photo1 from './assents/Photo1.png';
import {Signup} from './Components/Signup'

export default function App() {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <Signup/>
                </div>
                <div className="col-md-7 my-auto">
                    <img classname="img-fluid w-100" src={Photo1} width="300" height="300"  alt=""/>
                </div>
            </div>
            
        </div>
    )
}
