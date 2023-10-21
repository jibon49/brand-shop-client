import PropTypes from 'prop-types'; // ES6
import { BsPencilFill } from 'react-icons/bs';
import { FaRegEye, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateProduct = ({ product, products, setProducts }) => {

    const { _id, name, imageUrl,  productType, price,  ratings } = product


    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/products/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(pro => pro._id !== _id)
                            setProducts(remaining)
                        }
                    })

            }
        })
    }


    return (
        <div className="card card-side p-5 text-start">
            <figure><img className='h-40' src={imageUrl} /></figure>
            <div className="flex items-center justify-around">
                <div className="p-5">
                    <h2 className="card-title">{name}</h2>
                    <p>Type:{productType}</p>
                    <p>Price:$ {price}</p>
                    <p>Rating: {ratings}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical">
                        <Link to={`/details/${_id}`}>
                            <button className="btn text-xl"><FaRegEye></FaRegEye></button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button className="btn text-xl"><BsPencilFill></BsPencilFill></button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn text-xl"><FaWindowClose></FaWindowClose></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
UpdateProduct.propTypes = {
    product: PropTypes.object,
    products: PropTypes.array,
    setProducts: PropTypes.func

};

export default UpdateProduct;