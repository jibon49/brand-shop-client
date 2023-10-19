

const Banner = () => {
    return (
        <div className=" w-full mx-auto">
            <div className="hero min-h-[90vh]" style={{backgroundImage: 'url(https://i.ibb.co/QY6cmHV/modern-stationary-collection-arrangement.jpg)'}}>
                <div className="hero-overlay opacity-100"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold text-white">Your Gateway to Premium Electronics</h1>
                        <p className="mb-5">Everything within your reach</p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;