import React from 'react'

export default UserForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props


 const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }  

const onChange = evt => {
const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value 
    change(name, valueToUse)
}

return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add new Lambda User</h2>

        <button disabled={disabled}>submit</button>
        
        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>
        </div>

           <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>


        <div className='form-group checkboxes'>
        <h4>Terms of Service</h4>
         <label>Terms
          <input
          type='checkbox'
          name='terms'
         
          checked={values.terms}
          onChange={onChange}
          />    
        </label>
        </div>
    </form>
)
}