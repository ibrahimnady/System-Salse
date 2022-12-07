import React, { useState } from 'react'

export default function Search() {
    // Get All Saved Data
    const [productDrugs, setProductDrugs] = useState(JSON.parse(localStorage.getItem('ProductsDrugs')) || [])
    // Finded Data
    const [findedData, setFindedData] = useState([])
    const findProduct = (event) => {
        let search_value = event.target.value.toLowerCase()
        let get_products = productDrugs.map((product) => {
            let pro = product.filter(
                (els) => {
                    // console.log(els)
                    if (els["name"] == search_value) {
                        return els
                    }
                }
            )
            return pro
        })
        get_products = get_products.filter((el) => el.length > 0)
        setFindedData(get_products)
    }
    return (
        <>
            <div className='w-25 m-auto text-center'>
                <h1 className='fw-bold'>Search Page</h1>
            </div>
            <div class="form-floating mb-3  ">
                <input type="text" className="form-control my-3  m-auto fw-bold rounded-5 text-capitalize text-center" id="name" placeholder="Name" onKeyDown={findProduct} />
                <label for="name" className='fs-4 fw-bold text-center'>Search <i class="fa-solid fa-magnifying-glass"></i></label>
            </div>
            <table className="table table-dark  text-center">
                <thead>
                    <tr className=''>
                        <th className="bg-transparent" scope="col "></th>
                        <th className="bg-transparent" scope="col"></th>
                        <th className='border border-dark bg-success' scope="col">Count :</th>
                        <th className='border border-dark bg-success' scope="col"></th>
                        <th className="bg-transparent" scope="col"></th>
                        <th className="bg-transparent" scope="col"></th>
                        <th className="bg-transparent" scope="col"></th>
                        <th className='border border-dark bg-success' scope="col">Total :</th>
                        <th id='total' className='border border-dark bg-success' scope="col"></th>
                        <th className="bg-transparent" scope="col"></th>
                        <th className="border border-secondary" scope="col"><button className='btn btn-outline-info w-100  fw-bold  '>Save All Data <i class="fa-solid fa-floppy-disk"></i></button></th>
                        <th className='border border-secondary  ' scope="col">
                            <button className='btn btn-outline-danger w-100  fw-bold  '>
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
                    {
                        findedData.length ?
                            findedData.map((product) => {
                                return (
                                    product.map((el, index) => {
                                        return (
                                            <tr>
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
                                                <td className='border border-secondary'><button className=" btn btn-outline-danger w-100" >Delete <i class="fa-solid fa-trash-can "></i></button></td>
                                            </tr>
                                        )
                                    })
                                )
                            })
                            : ""
                        
                    }
                </tbody>
            </table>



        </>
    )
}
