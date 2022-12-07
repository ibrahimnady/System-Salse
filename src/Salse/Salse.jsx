import React, { useState, useEffect } from 'react'

export default function Salse() {
    //use (usestate) to make array data
    //put local storge to display data from screen
    const [productSalse, setProductSalse] = useState(JSON.parse(localStorage.getItem('productsSalse')) || [])
    const [productDrugsSalse, setProductDrugsSalse] = useState(JSON.parse(localStorage.getItem('ProductsDrugsSalse')) || [])
    useEffect(() => {
        //save to local storge
        localStorage.setItem('productsSalse', JSON.stringify(productSalse));
        localStorage.setItem('ProductsDrugsSalse', JSON.stringify(productDrugsSalse));
        console.log(productSalse);
        clearData();
    }, [productSalse, productDrugsSalse])
    //function add product
    function addProduct(e) {
        //to stop reload page 
        e.preventDefault();
        //definition variable by id to use in object Product
        let nameProduct = document.getElementById("name")
        let countProduct = document.getElementById("count")
        let discountProduct = document.getElementById("discount")
        let PriceProduct = document.getElementById("price")
        let TypeProduct = document.getElementById("type")
        let AddProduct = document.getElementById("add")
        let DiscountValueProduct = document.getElementById("DiscountValue")
        let NotesProduct = document.getElementById("notes")
        if (countProduct.value !== "" && PriceProduct.value !== "") {
            //object equel value
            let Product = {
                name: nameProduct.value,
                count: countProduct.value,
                discount: discountProduct.value,
                price: PriceProduct.value,
                add: AddProduct.value,
                discountValue: DiscountValueProduct.value,
                notes: NotesProduct.value,
                total: getTotal2(),
                totalBefor: getTotalBefor(),
                Type: TypeProduct.value
            }
            //take a copy deep from usesState to anthor copy 
            setProductSalse((current_productSalse) => [...current_productSalse, Product])
        } else {
            alert("Pleas Enter Count And Price")
        }
    }
    function SendData() {
        // console.log("[+] Trigers")
        //take a copy deep from usesState to anthor copy 
        setProductDrugsSalse((current_ProductsDrugs) => [...current_ProductsDrugs, productSalse])
        alert("Done Save")
    }
    //calc total after Discount (net price)
    function calcTotal() {
        let toatals = productSalse.map((pro, index) => {
            return pro.total
        })
        return toatals.reduce((partialSum, a) => partialSum + a, 0);
    }
    //calc befor Discount 
    function calcTotal2() {
        let toatals = productSalse.map((pro, index) => {
            return pro.totalBefor
        })
        return toatals.reduce((partialSum, a) => partialSum + a, 0);
    }
    //calc sum count
    function calcCount() {
        let sum = 0;
        for (let i = 0; i < productSalse.length; i++) {
            sum = sum + Number(productSalse[i].count);
        }
        return sum
    }
    //clear value input 
    function clearData() {

        document.getElementById("name").value = ""
        document.getElementById("count").value = ""
        document.getElementById("discount").value = ""
        document.getElementById("price").value = ""
        document.getElementById("type").value = ""
        document.getElementById("add").value = ""
        document.getElementById("DiscountValue").value = ""
        document.getElementById("notes").value = ""
        document.getElementById("name").focus()
    }
    //delete all product
    function deleteProducts() {
        localStorage.removeItem('productsSalse');
        window.location.reload()
    }
    //update or edit data 
    function updateProducts(e, index) {
        let nameProduct = document.getElementById("name")
        let countProduct = document.getElementById("count")
        let discountProduct = document.getElementById("discount")
        let PriceProduct = document.getElementById("price")
        let TypeProduct = document.getElementById("type")
        let AddProduct = document.getElementById("add")
        let DiscountValueProduct = document.getElementById("DiscountValue")
        let NotesProduct = document.getElementById("notes")
        // var myBtn = document.getElementById("myBtn")
        nameProduct.value = productSalse[index].name
        countProduct.value = productSalse[index].count
        PriceProduct.value = productSalse[index].price
        discountProduct.value = productSalse[index].discount
        TypeProduct.value = productSalse[index].Type
        AddProduct.value = productSalse[index].add
        DiscountValueProduct.value = productSalse[index].discountValue
        NotesProduct.value = productSalse[index].notes
        // myBtn.innerHTML = "update Data"
        productSalse.splice(index, 1)
    }

    // REACT BINDING & REACT 2 WAY BINDING & useRef & Context api

    //function sum after discount 
    function getTotal2() {
        let countProduct = +document.getElementById("count").value
        let discountProduct = +document.getElementById("discount").value
        let PriceProduct = +document.getElementById("price").value
        let AddProduct = +document.getElementById("add").value
        let DiscountValueProduct = +document.getElementById("DiscountValue").value
        if (countProduct && PriceProduct) {
            return ((countProduct * PriceProduct) - (((countProduct * PriceProduct) * discountProduct) / 100) + AddProduct - DiscountValueProduct)
        }
    }
    //function sum befor discount
    function getTotalBefor() {
        let countProduct = +document.getElementById("count").value
        let PriceProduct = +document.getElementById("price").value
        if (countProduct && PriceProduct) {
            return ((countProduct * PriceProduct))
        }
    }

    //function delete one product
    function deleteProduct(e, index) {
        productSalse.splice(index, 1)
        localStorage.setItem("productsSalse", JSON.stringify(productSalse))
        window.location.reload();
    }
    return (
        <>
            {/* form input  */}
            <div className=''>
                <div className='w-25 m-auto text-center'>
                    <h1 className='fw-bold'>Salse Page</h1>
                </div>
                <form className=' py-4  text-center border border-warning border-5 rounded-5 bg-secondary mb-3 mt-3 w-100' onSubmit={addProduct}>
                    <div className="row justify-content-center align-items-center">
                        <div class="form-floating mb-3 col-2 ">
                            <input type="text" className="form-control my-3  m-auto fw-bold rounded-5 text-capitalize text-center" id="name" placeholder="Name" />
                            <label for="name" className='fs-4 fw-bold'>Name <i class="fa-solid fa-pills"></i></label>
                        </div>
                        <div class="form-floating mb-3 col-2">
                            <input type="number" step="0.1" className="form-control my-3  m-auto fw-bold rounded-5 text-capitalize text-center" id="count" placeholder="Count" />
                            <label for="count" className='fs-4 fw-bold'>Count </label>
                        </div>
                        <div class="form-floating mb-3 col-2">
                            <input type="number" step="0.1" className="form-control my-3  m-auto fw-bold rounded-5 text-capitalize text-center" id="discount" placeholder="Discount" />
                            <label for="discount" className='fs-4 fw-bold'>Disscount %</label>
                        </div>
                        <div class="form-floating mb-3 col-2">
                            <input type="number" step="0.1" className="form-control my-3  m-auto fw-bold rounded-5 text-capitalize text-center" id="price" placeholder="Price" />
                            <label for="price" className='fs-4 fw-bold'>Price </label>
                        </div>
                        <div class="form-floating mb-3 col-2">
                            <input type="text" className="form-control my-3  m-auto fw-bold rounded-5 text-capitalize text-center" id="type" placeholder="Type" />
                            <label for="type" className='fs-4 fw-bold'>Type </label>
                        </div>
                        <div class="form-floating mb-3 col-2">
                            <input type="number" step="0.1" className="form-control my-3  m-auto fw-bold rounded-5 text-capitalize text-center" id="add" placeholder="Add" />
                            <label for="add" className='fs-4 fw-bold'>Add </label>
                        </div>
                        <div class="form-floating mb-3 col-2">
                            <input type="number" step="0.1" className="form-control my-3  m-auto fw-bold rounded-5 text-capitalize text-center" id="DiscountValue" placeholder="DiscountValue" />
                            <label for="DiscountValue" className='fs-4 fw-bold'>Discount EGP </label>
                        </div>
                        <div class="form-floating mb-3 col-4">
                            <input type="text" className="form-control my-3  m-auto fw-bold rounded-5 text-capitalize text-center" id="notes" placeholder="Notes" />
                            <label for="notes" className='fs-4 fw-bold'>Notes </label>
                        </div>
                        <button id='myBtn' type='submit' className=' col-1 btn btn-outline-info fs-1 fw-bold rounded-5 '>OK <i class="fa-solid fa-paper-plane"></i></button>
                    </div>
                </form>
                {/* table display data  */}
                <table className="table table-dark  text-center">
                    <thead>
                        <tr className=''>
                            <th className="bg-transparent" scope="col "></th>
                            <th className="bg-transparent" scope="col"></th>
                            <th className='border border-dark bg-success' scope="col">Count :</th>
                            <th className='border border-dark bg-success' scope="col">{calcCount()}</th>
                            <th className="border border-dark bg-success" scope="col">Total befor :</th>
                            <th className="border border-dark bg-success" scope="col">{calcTotal2()} EGP</th>
                            <th className="bg-transparent" scope="col"></th>
                            <th className='border border-dark bg-success' scope="col">Total After :</th>
                            <th className='border border-dark bg-success' scope="col">{calcTotal()} EGP</th>
                            <th className="bg-transparent" scope="col"></th>
                            {localStorage.length ? <th className="border border-secondary" scope="col"><button className='btn btn-outline-info w-100  fw-bold  ' onClick={SendData}>Save All Data <i class="fa-solid fa-floppy-disk"></i></button></th> : ""}
                            {localStorage.length ? <th className='border border-secondary  ' scope="col">
                                <button className='btn btn-outline-danger w-100  fw-bold  ' onClick={deleteProducts}>
                                    Delete All Data  <i class="fa-solid fa-trash-can "></i></button></th> : ""}
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
                        {productSalse.length ? productSalse.map((Pro, index) => {
                            return (
                                <tr key={index}>
                                    <th className='border border-secondary' scope="row">{index + 1}</th>
                                    {Pro.name ? <td className='border border-secondary text-capitalize' >{Pro.name}</td> : <td className='border border-secondary'>--</td>}
                                    {Pro.Type ? <td className='border border-secondary text-capitalize'>{Pro.Type}</td> : <td className='border border-secondary'>--</td>}
                                    <td className='border border-secondary'>{Pro.count}</td>
                                    {Pro.discount ? <td className='border border-secondary'>{Pro.discount} %</td> : <td className='border border-secondary'>-- %</td>}
                                    <td className='border border-secondary'>{Pro.price} EGP</td>
                                    {Pro.add ? <td className='border border-secondary text-capitalize'>{Pro.add} EGP</td> : <td className='border border-secondary text-capitalize'>-- EGP</td>}
                                    {Pro.discountValue ? <td className='border border-secondary text-capitalize'>{Pro.discountValue} EGP</td> : <td className='border border-secondary text-capitalize'>-- EGP</td>}
                                    <td className='border border-secondary'>{Pro.total} EGP</td>
                                    {Pro.notes ? <td className='border border-secondary text-capitalize'>{Pro.notes}</td> : <td className='border border-secondary'>--</td>}
                                    <td className='border border-secondary'><button className=" btn btn-outline-warning w-100" onClick={(e) => updateProducts(e, index)}> Uptade <i class="fa-solid fa-pen-to-square"></i></button> </td>
                                    <td className='border border-secondary'><button className=" btn btn-outline-danger w-100" onClick={(e) => deleteProduct(e, index)}>Delete <i class="fa-solid fa-trash-can "></i></button></td>
                                </tr>
                            )
                        }) : ''}
                    </tbody>
                </table>
            </div>
        </>
    )
}
