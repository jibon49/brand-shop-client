import { Link, useLoaderData } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";


const ProductDetails = () => {


    const product = useLoaderData();

    const { name, imageUrl, brandName, productType, price, shortDescription, ratings } = product

    return (
        <div className="my-10 p-20">
            <div className="p-10 card lg:card-side bg-base-100 shadow-xl">
                <img className="h-72" src={imageUrl} />
                <div className="card-body text-[#5C5B5B]">
                    <h2 className="text-2xl font-bold text-black">{name}</h2>
                    <p className="text-lg"><span className="text-black font-semibold">Brand:</span> {brandName}</p>

                    <p className="text-lg"><span className="text-black font-semibold">Product Type:</span> {productType}</p>

                    <p className="text-lg"><span className="text-black font-semibold">Price:</span> ${price}</p>

                    <p className="text-lg"><span className="text-black font-semibold">Ratings:</span> {ratings}</p>


                    <p className="text-lg"><span className="text-black font-semibold">Description:</span> {shortDescription}</p>
                    <Link className="text-xl font-bold text-blue-400" to='/all-products'><div className="flex items-center"><BiArrowBack></BiArrowBack>Go back</div></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;