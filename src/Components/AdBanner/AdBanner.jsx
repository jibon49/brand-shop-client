

const AdBanner = () => {
    return (
        <div className=" w-full mx-auto my-20">
            <div className="hero min-h-[50vh]" style={{ backgroundImage: 'url(https://i.ibb.co/ZHkrSPf/headphones-3683983.jpg)' }}>
                <div className="hero-overlay opacity-100"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl text-start">
                        <h1 className="mb-5 text-5xl font-bold text-white">Newly released headphones</h1>
                        <button className="btn border-none text-white bg-orange-500">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdBanner;