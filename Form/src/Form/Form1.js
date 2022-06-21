import React,{useState}from 'react'

const Form1 = () => {

    const [submitData, setSubmitData] = useState({
        username : "",
        email : "",
        phone : '',
        password : ""    
         
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setSubmitData({...submitData, [name]: value});

    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newRecord = { ...submitData, id: new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setSubmitData({username : '', email : '', phone : '', password : ''});
        
    }

    return (
        <div>
            <form action={handleSubmit}>
                    <div>
                    <h1 className="h1" ><b>Trial Form</b></h1>
                    <p className="p">Please Fill Up The Form </p>
                    <div>
                        <label htmlFor='username'>Name : </label>
                        <input type="text" autoComplete="off" value={submitData.username}
                            onChange={handleInput}  id="username"></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email : </label>
                        <input type="text" autoComplete="off" value={submitData.email}
                        Change={handleInput}  id="email"></input>
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone : </label>
                        <input type="number" autoComplete="off" value={submitData.phone}
                         onChange={handleInput}  id="phone"></input>
                    </div>
                    <div>
                        <label htmlFor='password'>Password : </label>
                        <input type="password" autoComplete="off" value={submitData.password}
                         onChange={handleInput}  id="password"></input>
                    </div> 
                    <div>
                            <label htmlFor='Gender'>Gender : </label>
                                    <input type="radio" name="Gender" value="Male"></input>Male
                                    <input type="radio" name="Gender" value="Female"></input>Female
                    </div>
                    <div>
                            <label htmlFor='language'>Language : </label>
                                      <input type="checkbox" value="English"></input>English<br></br>
                                      <input type="checkbox" value="Hindi"></input>Hindi<br></br>
                                      <input type="checkbox" value="Gujrati"></input>Gujrati<br></br>
                                      <input type="checkbox" value="others"></input>others<br></br>
                    </div>
                    </div>
                    <div > 
                        <button class="vertical-center" ><b4>Sumbit</b4></button>  
                    </div>
                    <div>
                        {
                            records.map((curElem) =>{
                                return(
                                    <div className ="h3">
                                        <p>{curElem.username}</p>
                                        <p>{curElem.email}</p>
                                        <p>{curElem.phone}</p>
                                        <p>{curElem.password}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </form>
        </div>
    )
}

export default Form1
