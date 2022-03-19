import React, { useState } from 'react'







const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })


    return (
        <section>
            <div className="login">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder='Email' value={user.email} name='email' id='login-email' required autoComplete='off' />
                    <input type="password" placeholder='Password' value={user.password} name='password' id='login-password' required autoComplete='true' />


                    <button type='submit'>Login</button>

                    <p>You don't have an account?{" "}

                        <span>Register Now</span>
                    </p>

                </form>
            </div>

            <div className="register">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder='Email' value={user.email} name='email' id='login-email' required autoComplete='off' />
                    <input type="password" placeholder='Password' value={user.password} name='password' id='login-password' required autoComplete='true' />


                    <button type='submit'>Login</button>

                    <p>You don't have an account?{" "}

                        <span>Register Now</span>
                    </p>

                </form>
            </div>
        </section>
    )
}

export default Login