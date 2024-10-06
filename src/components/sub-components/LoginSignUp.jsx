import React from 'react'

export default function LoginSignUp() {
    
  return (
    <div className='login-container'>

        <div className='login-header'>
            <h2 className='text-header'>Sign Up</h2>
        </div>

        <div className="inputs">
            
            <div className="user-name-input">
                <p>Username</p>
                <input type="text" placeholder="Username" maxLength="22"/>
            </div>

            <div className="email-input">
                <p>Email</p>
                <input type="email" placeholder="Email" maxLength="40"/>
            </div>

            <div className="password-input">
                <p>Password</p>
                <input type="text" placeholder="Password" maxLength="18"/>
            </div>

        </div>

    </div>
  )
}
