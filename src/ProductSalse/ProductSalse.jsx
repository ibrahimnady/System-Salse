import React, { useState } from 'react'

export default function ProductSalse() {


    // Get All Saved Data
    const [productDrugsSalse, setProductDrugsSalse] = useState(JSON.parse(localStorage.getItem('ProductsDrugsSalse')) || [])
    

    function deleteProducts() {
        localStorage.removeItem('ProductsDrugsSalse');
        window.location.reload()
    }
    
    function deleteProduct(e, index) {
        productDrugsSalse.splice(index, 1)
        localStorage.setItem("ProductsDrugsSalse", JSON.stringify(productDrugsSalse))
        window.location.reload();
    }

    return (
        <>
            <div className='w-25 m-auto text-center'>
                <h1 className='fw-bold'>Products Salse Page</h1>
            </div>
            <div class="form-floating mb-3  ">
                <input type="text" className="form-control my-3  m-auto fw-bold rounded-5 text-capitalize text-center" id="name" placeholder="Name" />
                <label for="name" className='fs-4 fw-bold text-center'>Search <i class="fa-solid fa-magnifying-glass"></i></label>
            </div>
            <table className="table table-dark  text-center">
                <thead>
                    <tr className=''>
                        <th className="bg-transparent" scope="col "></th>
                        <th className="bg-transparent" scope="col"></th>
                        <th className='border border-dark bg-success' scope="col">Count :</th>
                        <th className='border border-dark bg-success' scope="col">{}</th>
                        <th className="bg-transparent" scope="col"></th>
                        <th className="bg-transparent" scope="col"></th>
                        <th className="bg-transparent" scope="col"></th>
                        <th className='border border-dark bg-success' scope="col">Total :</th>
                        <th id='total' className='border border-dark bg-success' scope="col">{}</th>
                        <th className="bg-transparent" scope="col"></th>
                        <th className="bg-transparent" scope="col"></th>
                        <th className='border border-secondary  ' scope="col">
                            <button className='btn btn-outline-danger w-100  fw-bold  ' onClick={deleteProducts}>
                                Delete All Data  <i class="fa-solid fa-trash-can "></i></button></th>
                    </tr>
                    <tr className='border border-primary'>
                        <th className='border border-dark bg-secondary' scope="col">N</th>
                        <th className='border border-dark bg-secondary' scope="col">Name</th>
                        <th className='border border-dark bg-secondary' scope="col">Type</th>
                        <th className='border border-dark bg-secondary' scope="col">Count</th>
                        <th className='border border-dark bg-secondary' scope="col">Discount</th>
                        <th className='border border-dark bg-secondary' scope="col">Price</th>
                        <th className='border border-dark bg-secondary' scope="col">Add</th>
                        <th className='border border-dark bg-secondary' scope="col">Dis EGP</th>
                        <th className='border border-dark bg-secondary' scope="col">Total</th>
                        <th className='border border-dark bg-secondary' scope="col">Notes</th>
                        <th className='border border-dark bg-secondary' scope="col">Update <i class="fa-solid fa-pen-to-square text-warning"></i></th>
                        <th className='border border-dark bg-secondary' scope="col">Delete <i class="fa-solid fa-trash-can text-danger "></i></th>
                    </tr>
                </thead>
                <tbody>

                    {productDrugsSalse.length ? productDrugsSalse.map((product) => {

                        console.log("Map 1 Trigered")

                        return (
                            product.map((el, index) => {

                                console.log("Map 2 Trigered")

                                return (
                                    <tr key={index}>
                                    <th className='border border-secondary' scope="row">{index + 1}</th>
                                    {el.name ? <td className='border border-secondary text-capitalize' >{el.name}</td> : <td className='border border-secondary'>--</td>}
                                    {el.Type ? <td className='border border-secondary text-capitalize'>{el.Type}</td> : <td className='border border-secondary'>--</td>}
                                    <td className='border border-secondary'>{el.count}</td>
                                    {el.discount ? <td className='border border-secondary'>{el.discount} %</td> : <td className='border border-secondary'>-- %</td>}
                                    <td className='border border-secondary'>{el.price} EGP</td>
                                    {el.add ? <td className='border border-secondary text-capitalize'>{el.add} EGP</td> : <td className='border border-secondary text-capitalize'>-- EGP</td>}
                                    {el.discountValue ? <td className='border border-secondary text-capitalize'>{el.discountValue} EGP</td> : <td className='border border-secondary text-capitalize'>-- EGP</td>}
                                    <td className='border border-secondary'>{el.total} EGP</td>
                                    {el.notes ? <td className='border border-secondary text-capitalize'>{el.notes}</td> : <td className='border border-secondary'>--</td>}
                                    <td className='border border-secondary'><button className=" btn btn-outline-warning w-100" > Uptade <i class="fa-solid fa-pen-to-square"></i></button> </td>
                                    <td className='border border-secondary'><button className=" btn btn-outline-danger w-100" onClick={(e) => deleteProduct(e, index)} >Delete <i class="fa-solid fa-trash-can "></i></button></td>
                                </tr>
                                )

                            })
                        )

                    }) : ""}



                </tbody>
            </table>
        </>
    )
}
