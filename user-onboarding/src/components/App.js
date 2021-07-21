import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { validate } from 'uuid'
import schema from '../validation/formSchema'
import UserForm from './Form'

const initialFormValues = {
    username: '',
    email: '',
    terms: false,
}

const initialFormErrors = {
    username: '',
    email: '',
    terms: '',
}

const initialUsers = []
const initialDisabled = true 

export default function App() {

    const [users, setUsers] = useState(initialUsers)

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)



const getUsers = () => {
    axios.get('https://reqres.in/api/users')

    .then(res => {
      setUsers(res.data)
    })
    .catch(err => {
      debugger
      console.log(err)
    })
}

const postNewUser = newUser => {
axios.post('https://reqres.in/api/users', newUser)
 .then(res => {
      setUsers([ ...users, res.data])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      debugger
      console.log(err)
    })
    .finally(() => {
      //this would be a good spot to clean the form
    })
}

const validate = (name, value) => {
   yup
      .reach(schema, name)
      .validate(value)
     
      .then(valid => { //eslint-disable-line
        setFormErrors({
          ...formErrors, 
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, 
          [name]: err.errors[0]
        })
      })
}


const inputChange = (name, value) => {
 validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
}

const formSubmit = () => {
    const newUser = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    terms: formValues.terms.trim(),
    }
    postNewUser(newUser)
}

useEffect(() => {
    getUsers()
}, []);

useEffect(() => {
    schema.isValid(formValues)
    .then(valid => {
    setDisabled(!valid);
    })
  }, [formValues]);

  
return (
    <div className='container'>
        <header><h1>Lambda Sign up</h1></header>
    </div>
)
}
