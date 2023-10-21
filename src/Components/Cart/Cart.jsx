import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";




const Cart = () => {


    const loadedCartItems = useLoaderData();

    const [cartItems, setCartItems] = useState(loadedCartItems)

    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

    const handleRemove = (id) => {
        console.log("clicked remove button", id)
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
                console.log('Deleting item with id:', id);
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Success',
                                text: 'Product Deleted successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            }

                            )
                            const remaining = loadedCartItems.filter(prod => prod._id !== id)
                            setCartItems(remaining)
                        }
                    })

            }
        })

    }


    return (
        <div>
            <h1>My Cart:{cartItems.length}</h1>
            <div>
                {
                    cartItems.length > 0 ?
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            cartItems.map((item, idx) =>
                                                <tr key={idx}>
                                                    <th>
                                                        <label>
                                                            <button onClick={() => handleRemove(item._id)} className="btn btn-circle btn-outline "><GrClose></GrClose></button>
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className=" w-24 h-24">
                                                                    <img src={item.imageUrl} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{item.name}</div>
                                                                <div className="text-sm"><span className="font-bold text-black">Brand: </span>{item.brandName}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>${item.price}</p>
                                                    </td>
                                                </tr>
                                            )
                                        }

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th className="text-xl font-semibold text-black">Total</th>
                                            <th className="text-xl font-semibold text-black">${total}</th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                                <hr />
                            </div>

                        </div>
                        :
                        <div>
                            <h1>No items in cart</h1>
                        </div>
                }
            </div>
        </div>
    );
};

export default Cart;