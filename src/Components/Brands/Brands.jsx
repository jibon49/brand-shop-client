import { useState } from "react";
import { NavLink } from "react-router-dom";


const Brands = () => {

    const [brands, setBrands] = useState([])

    fetch('/brandJson.js')
        .then(res => res.json())
        .then(data => setBrands(data))



    return (
        <div>
            <h1 className="text-3xl font-semibold">Brand List</h1>
            <p className="text-xl">There are many brand available for you</p>
            <div className="grid grid-cols-3 gap-8">
            {
                brands.map(brand => <NavLink to={`/brand/${brand.brandName}`} key={brand.id}>
                    
                    <div className="card card-compact bg-[#edeaeb] shadow-xl">
                        <figure className="h-60"><img className="bg-center" src={brand.image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{brand.brandName}</h2>
                        </div>
                    </div>
                
                </NavLink>)
            }
            </div>
        </div>
    );
};

export default Brands;