import React from 'react'

export default function User({details}){
    if(!details){
    return <h3>Working fetching your friend&apos;s details...</h3>
    }

    return (
        <div className='helper container'>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Terms and Conditions {details.terms}</p>
            
        </div>
    )
}