import React from 'react'
import logo from '../Untitled-1-02.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-warning rounded-5 border border-5 border-secondary ">
                <div className="container-fluid">
                    <Link className='navbar-brand fw-bold fs-3' to={"Home"}>Pharma-PH </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link className='nav-link active' to={"Salse"}><button className='btn btn-outline-dark'>Salse</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' to={"ProductSalse"}><button className='btn btn-outline-dark'>Products Salse</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active ' to={"Pruches"}><button className='btn btn-outline-dark'>Pruches</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' to={"Products"}><button className='btn btn-outline-dark'>Products Pruches</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' to={"Search"}><button className='btn btn-outline-dark'>Search Praches</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='w-25 m-auto text-center  '>
                <img src={logo} className=' bgWidth' alt="fff" />
                <h1 className='fw-bold text-black'>Pharma-PH <i class="fa-solid fa-pills"></i></h1>

            </div>
        </>
    )
}
