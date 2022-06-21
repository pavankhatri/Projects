import React from 'react'
import { useState } from 'react'
import './Columns.css'

export default function Stock() {
    

    let initialValue = [];
        const [stockdata, setStockdata] = useState(initialValue);
        // const stockdatas = createRef();

        const addData = e => {
            e.preventDefault();
            // console.log(e.target.productname.value);
            // console.log(e.target.price.value);
            // console.log(e.target.quantity.value); 

            const formData = e.target;
            const newProduct = {

                Product_Name :formData.productname.value,
                Price : formData.price.value,
                Quantity : Number(formData.quantity.value)

            }
            setStockdata([...stockdata, newProduct]);
            // console.log(stockdata);



        }

        const incQuantity =(event) =>{

            const ArrayOfIndex = event.target.value;
            // console.log(event.target.Quantity);   
           let i = 99;

           if(stockdata[ArrayOfIndex].Quantity > i){

                stockdata[ArrayOfIndex].Quantity = stockdata[ArrayOfIndex].Quantity + 0;
                setStockdata([...stockdata]);

           }else{

                stockdata[ArrayOfIndex].Quantity = stockdata[ArrayOfIndex].Quantity + 1;
                setStockdata([...stockdata]);

           }

        }

        const decQuantity =(event) =>{
            
            const ArrayOfIndex = event.target.value;
            // console.log(event.target.Quantity);       
            let j = 0;

            if(stockdata[ArrayOfIndex].Quantity <= j){
 
                 stockdata[ArrayOfIndex].Quantity = stockdata[ArrayOfIndex].Quantity - 0;
                 setStockdata([...stockdata]);
 
            }else{
 
                 stockdata[ArrayOfIndex].Quantity = stockdata[ArrayOfIndex].Quantity - 1;
                 setStockdata([...stockdata]);
 
            }

        }

    return (
        
        <div>
            <div class="row">
                <div class="column">
                    <h2> Stock Details Update :</h2>
                    <>
                    <form onSubmit={addData}>
                    <label for="mobile" type="text" name="productname" placeholder="Enter Product Name"><h2>Product Name :</h2></label>
                    <select id="mobile" type="text" name="productname" placeholder="Enter Product Name" >
                    <option value="IPHONE"> IPHONE </option>
                    <option value="SAMSUNG"> SAMSUNG </option>
                    <option value="ONEPLUS"> ONEPLUS </option>
                    <option value="NOKIA"> NOKIA </option>
                    <option value="OPPO"> OPPO </option>
                    <option value="ASUS"> ASUS </option>
                    </select>   <br></br>

                    <label><h2>Price :</h2></label>
                    <input type="number" name="price" min="5000" max="200000" placeholder="Enter Product Price"></input><br></br>

                    <label><h2>Quantity : </h2></label>
                    <input type="number" name="quantity" min="1" max="100" placeholder="Enter Product Quantity"></input><br></br><br></br>
                    
                    <button type="submit" name="submit"><b>Submit</b></button>
                    </form><br></br><br></br>
                    </>
                </div>
                <div class="column">
                    <tr>
                    <h3> 
                        <tr>1.Specific Product Name Available</tr>
                        <tr>2.Price Enter Between 5000 to 200000</tr>
                        <tr>3.Quantity Enter Between 1 to 100</tr>
                        <tr>4.Quantity Update Between 1 to 100 in Table </tr>
                        <tr> [Not more then 100 or not lessthen 0]</tr>
                        <tr>5.Leftside bottom Table are Show the Details of Mobile we take  </tr>
                        <tr> and Stock Are available in our place</tr>
                    </h3>
                    </tr>
                    
                </div>
                </div>
                
                <div><br></br><br></br><br></br>
                <h1>----------------------------------------------------------------------------------</h1>
                <div class="row">
                <div class="column">
                <label><h3>Stock Data Available in our Office</h3></label>
                <table>
                <tr>
                    <th>| Index |</th>
                    <th>Product Name |</th>
                    <th>Price |</th> 
                    <th>Quantity |</th>
                    <th>Option |</th>
                </tr>
                
                    {
                        stockdata.map((data,index) => 
                        <tr key="index">
                            <td>{index}</td>
                            <td>{data.Product_Name}</td>
                            <td>{data.Price}</td>
                            <td>{data.Quantity}</td>
                            <td>
                            <button type="button" onClick={(event)=>{incQuantity(event)}} value={index}> + </button>
                            <button type="button" onClick={(event)=>{decQuantity(event)}} value={index}> - </button>
                            </td>
                        </tr>

                        )
                    }

                </table>
                </div>
                <div class="column">
                <label><h3>We are receiving only this product and between this range of quantity.</h3></label>
                <table>
                <tr>
                    <th>| Product Name |</th>
                    <th>Product Price |</th> 
                    <th>Storage Capacity |</th>
                </tr>
                <tr>
                    <td>Iphone</td>
                    <td>5000 to 200000</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Samsung</td>
                    <td>5000 to 200000</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Oneplus</td>
                    <td>5000 to 200000</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Nokia</td>
                    <td>5000 to 200000</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Oppo</td>
                    <td>5000 to 200000</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Asus</td>
                    <td>5000 to 200000</td>
                    <td>100</td>
                </tr>
                </table>
                </div>
                </div>
                </div>
        </div>
        
    )
}

