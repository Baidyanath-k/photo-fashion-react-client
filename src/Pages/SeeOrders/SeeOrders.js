import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SeeOrderRow from '../SeeOrderRow/SeeOrderRow';

const SeeOrders = () => {

    const {user,logOut} = useContext(AuthContext);
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res =>{
                if(res.status===401|| res.status===403){
                    logOut()
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [user?.email,logOut])

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox"/>
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map(order=><SeeOrderRow
                        
                            key={order._id}
                            order={order}
                        
                        ></SeeOrderRow>)
                    }
                    
                </tbody>

            </table>
        </div>
    );
};

export default SeeOrders;