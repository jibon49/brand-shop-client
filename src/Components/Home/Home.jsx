import AdBanner from "../AdBanner/AdBanner";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import CustomerReview from "../CustomerReview/CustomerReview";



const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="max-w-7xl mx-auto mt-20">
                <Brands></Brands>
                <AdBanner></AdBanner>
            </div>
                <CustomerReview></CustomerReview>
            
        </div>
    );
};

export default Home;