import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
import spinner from '../../images/spinner.gif'
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fast-headland-30459.herokuapp.com/products')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='product-container'>
            {
                products.length===0&&<img src={spinner} alt=""/>
            }
            {
                products.map(product=><Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Home;