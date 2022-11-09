import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext);
    const [success,
        setSuccess] = useState(false);
    const [unsuccess,
        setUnsuccess] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password).then(result => {
            const user = result.user;
            setSuccess(true)
            setUnsuccess(false);
            form.reset();
            console.log(user)
        }).catch(error => {
            console.error(error);
            setUnsuccess(true);
            setSuccess(false);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="email"
                                className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="password"
                                className="input input-bordered"/>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <span>
                            {
                                success && <span className='text-lime-700 font-bold text-xl'>User Login Success</span>
                            }
                            {
                                unsuccess && <span className='text-red-700 font-bold text-xl'>User Login Unsuccess</span>
                            }
                        </span>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login"/>
                        </div>

                        <label className="label">
                            <span className="label-text-alt text-xl">Don't have an account?
                                <Link to="/Signup" className='link link-hover'>Sign Up</Link>
                            </span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;