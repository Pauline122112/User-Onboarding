import React from 'react'

export default function UserForm(props) {
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
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group submit">
                <div>
                <h2>Add a User</h2>
                </div>

        <button disabled={disabled}>submit</button>
        
        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h1>General information</h1>

        <label>
            <h3>Username</h3>&nbsp;
            <div className='formBar'>
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
          </div>
        </label>
        </div>

           <label>
              <h3>Email</h3> 
               <div className='textEmail'>
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
          </div>
        </label>


        <div className='form-group checkboxes'>
        <h3>Terms of Service</h3>
         <label>Accept Terms and conditions:
        </label>
        </div>
             <div className='chkBx'>
          <input
          type='checkbox'
          name='terms'
         
          checked={values.terms}
          onChange={onChange}

          />
          </div>    
    </form>
)
}