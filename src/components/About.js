import React from 'react'
import img1 from '../Images/aboutUs-1.jpg'
import img2 from '../Images/aboutUs-2.jpg'

export default function About() {
  return (
    <div className='bg-dark mw-100' id="about">
    <div className='container row  mx-auto bg-dark py-4 row w-100 mx-0' >
        <div className='card-1 mx-auto bg-light  py-2 col-md-5 col-sm-12 reveal my-2'>
            <h2>We create best shoes for you</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eveniet ullam perferendis eos, nobis corrupti similique fuga ipsa minus at eius ipsam expedita quam aliquam perspiciatis voluptate qui dolore soluta.</p>
            <img src={img1} className="img-fluid" alt='aboutUs1'></img>
        </div>
        <div className='card-1 mx-auto bg-light py-2 col-md-5 col-sm-12 reveal'>
            <h2>We create best shoes for you</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eveniet ullam perferendis eos, nobis corrupti similique fuga ipsa minus at eius ipsam expedita quam aliquam perspiciatis voluptate qui dolore soluta.</p>
            <img src={img2} className="img-fluid" alt='aboutUs2'></img>
        </div>
    </div>
    </div>
  )
}
