import { Link, useLoaderData, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";


const ProductDetails = () => {


    const products = useLoaderData();

    console.log(products);
    const { id } = useParams();

    


    const product = products.find(prod => prod._id === id)
    console.log(product)


    const { name, imageUrl, brandName, productType, price, shortDescription, ratings } = product

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
                    <button className="btn md:w-1/4 ml-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;