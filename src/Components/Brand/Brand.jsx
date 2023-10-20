import { NavLink, useLoaderData } from "react-router-dom";

const Brand = () => {

    const brandProducts = useLoaderData();
    console.log(brandProducts)

    return (
        <div>
            {
                brandProducts.length > 0 ?
                    <div className="grid md:grid-cols-3">
                        {
                            brandProducts.map(product => <div key={product._id} className="card text-center w-96 bg-base-100 shadow-xl">
                                <figure><img src={product.imageUrl} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-xl font-medium text-center">{product.name}</h2>
                                    <p className="text-xl font-bold">Price:${product.price}</p>
                                    <p className="text-lg">Rating:{product.ratings}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    :
                    <div className="flex items-center justify-center h-screen">
                    <div className="flex items-center justify-center h-screen">
                        <div className="text-center">
                            <img src="https://i.ibb.co/2dMb0Z6/website-launching-coming-soon-2112253-1782224.webp" className="mx-auto mb-4" alt="Coming Soon" style={{ maxWidth: '300px' }} />
                            <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
                            <p className="text-xl">We are working on bringing you amazing products. Stay tuned!</p>
                            <NavLink to='/'><button className="btn btn-error">Go Back</button></NavLink>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Brand;