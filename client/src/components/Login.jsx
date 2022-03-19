import axios from 'axios';
import React, { useState } from 'react'

import { toast } from 'react-toastify';





const Login = ({ setIsLogin }) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    // const [err, setErr] = useState('')






    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });

    }




    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.post('/user/register', {
                username: user.name,
                email: user.email,
                password: user.password
            });


            setUser({
                name: '',
                email: '',
                password: ''
            })

            toast.success(res.data.msg);


        } catch (error) {

            toast.error(error.response.data.msg)
        }
    }











    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/user/login', {

                email: user.email,
                password: user.password
            });
            localStorage.setItem('token', res.data.token);
            setUser({
                name: '',
                email: '',
                password: ''
            })



            setIsLogin(true)


            toast.success(res.data.msg);


        } catch (error) {

            toast.error(error.response.data.msg)
        }
    }








    return (
        <section>
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handlelogin}>
                    <input type="email" placeholder='Email' value={user.email} onChange={onChangeInput} name='email' id='login-email' required autoComplete='off' />
                    <input type="password" placeholder='Password' value={user.password} onChange={onChangeInput} name='password' id='login-password' required autoComplete='true' />


                    <button type='submit'>Login</button>

                    <p>You don't have an account?{" "}

                        <span>Register Now</span>
                    </p>
                    {/* <h3>{err}</h3> */}
                </form>
            </div>

            <div className="register">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='userName' value={user.name} onChange={onChangeInput} name='name' id='register-namne' required autoComplete='off' />
                    <input type="email" placeholder='Email' value={user.email} onChange={onChangeInput} name='email' id='register-email' required autoComplete='off' />
                    <input type="password" placeholder='Password' value={user.password} onChange={onChangeInput} name='password' id='register-password' required autoComplete='true' />


                    <button type='submit'>Register</button>

                    <p>You already have an account?{" "}

                        <span>Login Now</span>
                    </p>

                    {/* <h3>{err}</h3> */}

                </form>
            </div>
        </section>
    )
}

export default Login