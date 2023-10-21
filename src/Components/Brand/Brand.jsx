import { FaPen, FaRegEye } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Brand.css';
import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const Brand = () => {

    const { user } = useContext(AuthContext)
    const brandProducts = useLoaderData();

    return (
        <div className="bg-white">
            {brandProducts.length > 0 ? (
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {brandProducts.slice(0, 3).map((product) => (
                        <SwiperSlide key={product._id}>
                            <div className="w-4/5 bg-white flex items-center p-5 md:p-24 mx-auto">
                                <img style={{ height: '15rem', width: 'auto' }} src={product.imageUrl} alt="" />
                                <div className="text-[#575757]">
                                    <h1 className="text-xl md:text-7xl md:mb-7 font-semibold">{product.name}</h1>
                                    <p className="md:text-2xl font-medium">Newly Released</p>
                                    <h1 className="text-lg">BEST Price:${product.price}</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <div className="flex items-center justify-center h-screen">
                        <div className="text-center">
                            <img
                                src="https://i.ibb.co/2dMb0Z6/website-launching-coming-soon-2112253-1782224.webp"
                                className="mx-auto mb-4"
                                alt="Coming Soon"
                                style={{ maxWidth: '300px' }}
                            />
                            <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
                            <p className="text-xl">
                                We are working on bringing you amazing products. Stay tuned!
                            </p>
                            <NavLink to="/">
                                <button className="btn btn-error">Go Back</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid md:grid-cols-3 gap-5">
                {brandProducts.map((product) => (
                    <div key={product._id} className="card text-[#434343] text-center bg-base-300 shadow-xl">
                        <figure className="p-5">
                            <img className="h-40" src={product.imageUrl} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-bold text-center">{product.name}</h2>
                            <p className="text-xl font-bold">Price:${product.price}</p>
                            <p className="text-lg">Brand:{product.brandName}</p>
                            <p className="text-lg">Rating:{product.ratings}</p>
                            <hr />
                            <div className="">
                                {
                                    user ?
                                        <NavLink
                                            product={product}
                                            to={`/details/${product._id}`}><button className="btn">
                                                <FaRegEye></FaRegEye>
                                            </button>

                                        </NavLink>
                                        :
                                        <NavLink
                                            to='/login'><button className="btn">
                                                <FaRegEye></FaRegEye>
                                            </button>

                                        </NavLink>
                                }
                                {
                                    user &&
                                    <NavLink
                                        to={`/update/${product._id}`}
                                    >
                                        <button className="btn ml-4">
                                            <FaPen></FaPen>
                                        </button>
                                    </NavLink>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brand;
