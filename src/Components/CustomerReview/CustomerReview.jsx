import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './CustomerReview.css'

import { FreeMode, Pagination } from 'swiper/modules';



const CustomerReview = () => {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch('/customerJson.js')
            .then(res => res.json())
            .then(data => setCustomers(data))
    }, [])


    return (
        <div className="p-5 bg-[#edeaeb]">
            <h1 className="text-3xl text-center font-bold mb-5">Our customers review</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{

                    425: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    customers.map(customer =>
                        <SwiperSlide key={customer.id}>
                            <div className=" card card-compact p-5  bg-[#edeaeb]">
                                <figure className="rounded-full bg-cover "><img className="" src={customer.image}  /></figure>
                                <div className="card-body">
                                    <h2 className="text-xl font-bold text-center">{customer.name}</h2>
                                    <p className="text-lg font-semibold">{customer.profession}</p>
                                    <p>{customer.review}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default CustomerReview;