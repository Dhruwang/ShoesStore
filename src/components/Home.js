import React from 'react'
// import cover from '../Images/cover.jpg'
import "./Home.css"
import {Link} from 'react-scroll'

export default function Home() {
  return (
    <>
        <div className="row homeImg" id='home' >
            <div className='homeText my-auto col-sm-12 col-md-6 text-left px-4'>
                <h1 className='text-light text-left px-4'>TheShoeStore</h1>
                <p className='text-light px-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eveniet ullam perferendis eos, nobis corrupti similique fuga ipsa minus at eius ipsam expedita quam aliquam perspiciatis voluptate qui dolore soluta.</p>
                <button type="button" class="btn btn-light rounded px-4 mx-4"><Link className="nav-link" spy={true} smooth={true} offset={50} duration={500} to="buy">Order Now</Link></button>
            </div>
        </div>
    </>
  )
}
