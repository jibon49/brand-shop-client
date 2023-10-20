import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './AllProducts.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import { useState } from "react";



const AllProducts = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts)

    return (
        <div className="">
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

                <SwiperSlide>
                    <div className="w-4/5 bg-white flex items-center p-5 md:p-24 mx-auto">
                        <img className="h-96" src="https://i.ibb.co/5KKkNgm/airpods.jpg" alt="" />
                        <div className="text-[#575757]">
                            <h1 className="text-xl md:text-7xl md:mb-7 font-semibold">Airpods pro</h1>
                            <p className="md:text-2xl font-medium">Newly Released</p>
                            <h1 className="text-lg">BEST Price:$299</h1>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-4/5 bg-white flex items-center p-5 md:p-24 mx-auto">
                        <img className=" md:h-96" src="https://i.ibb.co/qstb0xv/Png-Item-5197515.png" alt="" />
                        <div className="text-[#575757]">
                            <h1 className="text-xl md:text-7xl md:mb-7 font-semibold">Galaxy A31s</h1>
                            <p className="md:text-2xl font-medium">Newly Released</p>
                            <h1 className="text-lg">BEST Price:$399</h1>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-4/5 bg-white flex items-center p-5 md:p-24 mx-auto">
                        <img className="md:h-96" src="https://i.ibb.co/vqXgYSq/rgb-gaming-headphone-823919-2087.jpg" alt="" />
                        <div className="text-[#575757]">
                            <h1 className="text-xl md:text-7xl md:mb-7 font-semibold">K199 gaming</h1>
                            <p className="md:text-2xl font-medium">Newly Released</p>
                            <h1 className="text-lg">BEST Price:$299</h1>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className="my-20 max-w-7xl mx-auto mt-20">
                <h1 className="text-3xl font-bold">All Products</h1>
               <div className="grid grid-cols-2 gap-5 m-20 text-center">
               {
                    products.map(product=>
                    <UpdateProduct key={product._id}
                    product={product}
                    products={products}
                    setProducts={setProducts}
                    >
                    </UpdateProduct>)
                }
               </div>
            </div>

        </div>
    );
};

export default AllProducts;