import * as yup from 'yup'

export default yup.object().shape({
    username: yup.string()
        .required('Name is required')
        .min(5, 'Name must be 5 characters or longer'),
    email: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
    
    //WE ARE DONE WITH CHECKBOXES
    terms: yup.boolean(),
})

