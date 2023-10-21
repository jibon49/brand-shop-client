import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddProduct=e=>{
        e.preventDefault();
        const form = e.target;

        const name = form.productName.value
        const imageUrl = form.image.value
        const brandName = form.brand.value
        const productType = form.type.value
        const price = form.price.value
        const shortDescription = form.description.value
        const ratings =form.rating.value;

        const addProduct = {name, imageUrl, brandName, productType, price, shortDescription, ratings};

        console.log(addProduct);

        fetch('https://techbay-assignment-server-8drflemwz-jibon49.vercel.app/products',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Product added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        form.reset();
    }

    return (
        <div className="max-w-7xl mx-auto mt-20">
            <h1>My product</h1>
            <form onSubmit={handleAddProduct}>

                {/* name and image */}
                <div className="flex md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-xl font-semibold">Product Name</span>
                        </label>
                        <input type="text" name="productName" placeholder="product name" className="input input-bordered w-full bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-xl font-semibold">Image</span>
                        </label>
                        <input type="text" name="image" placeholder="image url" className="input input-bordered w-full bg-[#F3F3F3]" required />
                    </div>
                </div>

                {/* Brand Name and Type */}
                <div className="flex md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-xl font-semibold">Brand Name</span>
                        </label>
                        <select name="brand" className="select select-bordered w-full bg-[#F3F3F3]">
                            <option value="apple">Apple</option>
                            <option value="samsung">Samsung</option>
                            <option value="xiaomi">Xiaomi</option>
                            <option value="intel">Intel</option>
                            <option value="realme">Realme</option>
                            <option value="huawei">Huawei</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-xl font-semibold">Type</span>
                        </label>
                        <select name="type" className="select select-bordered w-full bg-[#F3F3F3]">
                            <option value="phone">Phone</option>
                            <option value="headphone">Headphone</option>
                            <option value="airpod">Airpod</option>
                            <option value="laptop">Laptop</option>
                            <option value="watch">Watch</option>
                        </select>
                    </div>
                </div>


                {/* Price Short description */}
                <div className="flex md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-xl font-semibold">Price</span>
                        </label>
                        <input type="number" name="price" min="1" placeholder="price" className="input input-bordered w-full bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-xl font-semibold">Short Description</span>
                        </label>
                        <input 
                        type="text" 
                        name="description" 
                        
                        placeholder="description" 
                        className="input input-bordered w-full bg-[#F3F3F3]" required />
                    </div>
                </div>
                {/* rating */}
                <div className="flex md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-xl font-semibold">Rating</span>
                        </label>
                        <input type="number" min="1" max="5" step="0.1" name="rating" placeholder="ratings" className="input input-bordered w-full bg-[#F3F3F3]" required />
                    </div>
                </div>

                {/* submit */}
                <div className=" w-full mx-auto mt-6">
                            <button className=" btn btn-outline w-full mb-2">
                                Submit
                            </button>
                        </div>
            </form>
        </div>
    );
};

export default AddProduct;