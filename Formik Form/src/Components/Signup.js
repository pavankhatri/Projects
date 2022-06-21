 import React from 'react';
 import {Formik, Form } from 'formik';
 import { TextField } from './TextField';
 import * as Yup from 'yup'
 
 export const Signup = () => {

    const validate = Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Email is Invalid').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 Characters').required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required('Confirm password is Required')
    })


     return (
         <Formik
         
         initialValues ={{
             firstName: '',
             lastName: '',
             email: '',
             password: '',
             confirmPassword: ''
         }}

         validationSchema={validate}
         onSubmit = {values =>
            alert(`First Name : ${values.firstName}  Last Name : ${values.lastName}  Email : ${values.email}  Password : ${values.password}`)
        }
         
         >

         {formik =>(
             <div>
                 <h1 className="my-4 font-weight-bold-display-4">Form</h1>
                 <Form>
                    <TextField label="first Name" name="firstName" type="text"/>
                    <TextField label="last Name" name="lastName" type="text"/>
                    <TextField label="Email" name="email" type="email"/>
                    <TextField label="password" name="password" type="password"/>
                    <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                    

                    
                    <button className="btn btn-dark mt-3" type="submit">Register</button>
                    <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>

                 </Form>
             </div>
         )}

         </Formik>
     )
 }
 