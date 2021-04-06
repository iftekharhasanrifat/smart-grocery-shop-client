import React, { useContext, useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';
import spinner from '../../images/spinner.gif'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [successMessage, setSuccessMessage] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`https://fast-headland-30459.herokuapp.com/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [loggedInUser.email])
    const handleProceed = () => {
        setSuccessMessage('Thank you for ordering')
    }
    return (
        <div>
            {
                successMessage && <h2 className='text-center mt-5' style={{ color: 'green' }}>{successMessage}</h2>
            }
            <div className="m-3">
                <h4>You have : {orders.length} orders</h4>
                {
                    orders.length === 0 && <div className='text-center'><img src={spinner} alt="" /></div>
                }
                {
                    orders.map(order =>
                        <ListGroup.Item key={order._id}>Product Name : {order.name}
                            <ListGroup.Item>Weight : {order.quantity}</ListGroup.Item>
                            <ListGroup.Item>Price : {order.price}</ListGroup.Item>
                            <ListGroup.Item>Date : {new Date(order.checkIn).toDateString('dd/MM/yyyy')}</ListGroup.Item>
                            <ListGroup.Item>Your Email : {order.email}</ListGroup.Item>
                        </ListGroup.Item>
                    )
                }
                <button onClick={handleProceed} style={{ float: 'right' }} className="mt-3 btn btn-success">Proceed Checkout</button>
            </div>

        </div>
    );
};

export default Orders;