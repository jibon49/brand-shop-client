import { useState } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import { FaRegEye,FaWindowClose } from 'react-icons/fa';
import Swal from 'sweetalert2';


const UpdateProduct = ({ product }) => {

    const { _id, name, imageUrl, brandName, productType, price, shortDescription, ratings } = product

    const [remaining, setRemaining] = useState(null)

    const handleDelete =()=>{

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
           

            fetch(`http://localhost:5000/products/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                      )
                }
            })

            }
          })
    }

    return (
        <div className="card card-side p-5 text-start">
            <figure><img src={imageUrl} /></figure>
            <div className="flex items-center">
                <div className="p-5">
                    <h2 className="card-title">{name}</h2>
                    <p>Type:{productType}</p>
                    <p>Price:$ {price}</p>
                    <p>Rating: {ratings}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical">
                        <button className="btn text-xl"><FaRegEye></FaRegEye></button>
                        <button className="btn text-xl"><BsPencilFill></BsPencilFill></button>
                        <button onClick={()=>handleDelete(_id)} className="btn text-xl"><FaWindowClose></FaWindowClose></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;