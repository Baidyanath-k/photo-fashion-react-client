import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOuts = () => {
    const check=useLoaderData();
    const{_id,title,price}=check;
    const{user}=useContext(AuthContext);
    console.log(user)



    const handlePlaceOrder=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=`${form.name.value} ${form.secondName.value}`;
        const phone=form.phone.value;
        const email=form.email.value;
        const message=form.message.value;


        const order={
            service:_id,
            serviceName:title,
            customer:name,
            price:price,
            email:email,
            phone:phone,
            message:message
        }


        fetch('https://assignment-eleven-server-blue.vercel.app/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.acknowledged) {
                alert('Your ordered placed')
                form.reset();
            }
        })
        .catch(err=>console.log(err))
    }


    return (
        <div className='my-10'>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='font-bold text-xl my-5'>You are about to your order: {check.title}</h2>
                <h2 className='font-bold text-xl my-5'>Price: {check.price}</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="input input-bordered w-full"/>

                    <input
                        type="text"
                        name="secondName"
                        placeholder="Second Name"
                        className="input input-bordered w-full"/>

                    <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                        className="input input-bordered w-full"/>

                    <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        defaultValue={user?.email}
                        readOnly/>
                </div>
                <textarea
                    className="textarea textarea-bordered h-24 w-full my-3"
                    placeholder="Please Enter Your Message"
                    name="message"></textarea>
                <input className='btn my-3' type="submit" value="Place Your order"/>
            </form>
        </div>
    );
};

export default CheckOuts;