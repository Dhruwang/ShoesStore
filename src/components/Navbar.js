import React from 'react'
import {Link} from 'react-scroll'
export default function Navbar(props) {
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
                                <Link className="nav-link text-light" role="button" spy={true} smooth={true} offset={0} duration={500} to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" role="button" spy={true} smooth={true} offset={10} duration={100} to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" role="button" spy={true} smooth={true} offset={50} duration={500} to="buy">Buy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}
