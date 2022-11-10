import React, { useState } from 'react';

const AddService = () => {
    const [users,setUsers]=useState()
    const handleReview=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const message=event.target.message.value;

        const users={name,email,message};
        event.target.reset();

        fetch('https://assignment-eleven-server-blue.vercel.app/allservices',{
            method:'POST',
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(users)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            const New=[...users,data];
            setUsers(New);

        })
        .catch(error=>console.log(error))
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content w-full">
                <div className="card w-full  shadow-2xl bg-base-100">
                    <form className="card-body w-full" onSubmit={handleReview}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="label">
                                <span className='label-text'>Your Message</span>
                            </label>
                            <input type="text" name='message' placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        {
                            console.log(users)
                        }
                        <div className="form-control mt-6">
                            <input type="submit" value="Submit"  className='btn btn-ghost'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;