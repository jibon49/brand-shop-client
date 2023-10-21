import { Link, useLoaderData, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from 'react';
import Swal from "sweetalert2";


const ProductDetails = () => {


    const products = useLoaderData();

    const { id } = useParams();

    const product = products.find(prod => prod._id === id)


    const { name, imageUrl, brandName, productType, price, shortDescription, ratings } = product

    const [ cart, setCart ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then(res => res.json())
            .then(data => {
                setCart(data)
            })
    }, [])

    const handleAddToCart = (id) => {

        const inCart = cart.find(prod => prod._id === id)

        if (inCart) {
            
            Swal.fire({
                title: 'Error!',
                text: 'Product already in cart',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
        else{
            fetch(`http://localhost:5000/cart`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'Product added to cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    }
                    else{
                        Swal.fire({
                            title: 'Error!',
                            text: data.message,
                            icon: 'error',
                            confirmButtonText: 'Ok'
                          })
                    }
                })
        }


    }

    return (
        <div className="my:5 md:my-10 md:p-20">
            <div className="p-4 md:p-10 card lg:card-side bg-base-100 shadow-xl">
                <img className="md:h-72" src={imageUrl} />
                <div className="card-body text-[#5C5B5B]">
                    <h2 className="text-2xl font-bold text-black">{name}</h2>
                    <p className="text-lg"><span className="text-black font-semibold">Brand:</span> {brandName}</p>

                    <p className="text-lg"><span className="text-black font-semibold">Product Type:</span> {productType}</p>

                    <p className="text-lg"><span className="text-black font-semibold">Price:</span> ${price}</p>

                    <p className="text-lg"><span className="text-black font-semibold">Ratings:</span> {ratings}</p>


                    <p className="text-lg"><span className="text-black font-semibold">Description:</span> {shortDescription}</p>
                    <div className="flex items-center">
                        <Link className="text-xl font-bold text-blue-400" to='/all-products'><div className="flex items-center"><BiArrowBack></BiArrowBack>Go back</div></Link>
                        <button onClick={() => handleAddToCart(product._id)} className="btn md:w-1/4 ml-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;