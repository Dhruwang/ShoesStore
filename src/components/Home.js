import React from 'react'
import cover from '../Images/cover.jpg'
import "./Home.css"
export default function Home() {
  return (
    <>
        <div className="row" style={{ backgroundImage: `url(${cover})`, height: "100vh", backgroundSize: 'cover'}}>
            <div className='homeText my-auto col-sm-12 col-md-6 mx-4 text-left'>
                <h1 style={{fontSize:"6vw"} }className='text-light text-left'>TheShoeStore</h1>
                <p className='text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eveniet ullam perferendis eos, nobis corrupti similique fuga ipsa minus at eius ipsam expedita quam aliquam perspiciatis voluptate qui dolore soluta.</p>
                <button type="button" class="btn btn-light rounded px-4">Order Now</button>
            </div>
        </div>
    </>
  )
}
