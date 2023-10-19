import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";



const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="max-w-7xl mx-auto mt-20">
                <Brands></Brands>
            </div>
            
        </div>
    );
};

export default Home;