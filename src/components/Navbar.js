import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg px-4" >
                <div className="container-fluid">
                    <a className="navbar-brand fs-2 text-light" href="/">TheShoeStore</a>
                    <button  style={{borderColor:"white"}}className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto fs-6">
                            <li className="nav-item">
                                <a className="nav-link text-light" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/" >Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}
