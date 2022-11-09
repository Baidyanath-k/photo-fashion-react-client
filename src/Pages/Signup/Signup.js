import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";


const Signup = () => {
    const {createUser,googleSignup,updateUserProfile} = useContext(AuthContext);
    const [success,
        setSuccess] = useState(false);
    const [unsuccess,
        setUnsuccess] = useState(false);
    
    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL=form.photoURL.value;
        console.log(name, email, password)

        createUser(email, password).then(result => {
            const user = result.user;
            handleProfile(name,photoURL);
            setSuccess(true);
            setUnsuccess(false);
            form.reset();
            console.log(user)
        }).catch(error => {
            setSuccess(false);
            setUnsuccess(true);
            console.error(error);
        })
    }

    const handleGoogleSign=()=>{
        googleSignup()
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{
            console.error(error);
        })
    }


    const handleProfile=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL
        }
        updateUserProfile(profile)
        .then(  ()=>{} )
        .catch(error=>{
            console.error(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <button onClick={handleGoogleSign} className="btn btn-primary mt-5">
                        <FaGoogle className='text-xl mr-2'></FaGoogle> <span>Sign UP with Google</span>
                    </button>
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Name"
                                className="input input-bordered"/>
                        </div>


                        <div className="form-control">
                            
                            <label>
                                <span className="label-text">Photo URL</span>
                            </label>
                            
                            <input
                                type="text"
                                name='photoURL'
                                placeholder="Photo URL"
                                className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="email"
                                className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="password"
                                className="input input-bordered" required/>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <span>
                            {success && <span className='text-lime-700 font-bold text-xl'>Signup Success</span>
}
                            {unsuccess && <span className='text-red-700 font-bold text-xl'>Signup Unsuccess</span>
}
                        </span>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login"/>
                        </div>

                        <label className="label">
                            <span className="label-text-alt text-xl">Already have an account?
                                <Link to="/Login" className='link link-hover'>Log in</Link>
                            </span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;