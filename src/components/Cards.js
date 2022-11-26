import React from 'react'

export default function Cards(props) {
    return (
        <div className='my-2'>
            <div class="card " style={{width: "18rem;"}}>
                <img class="card-img-top" src={props.imgUrl} alt="Car" />
                    <div class="card-body">
                    <p class="card-text fw-bolder my-0">{props.brand}</p>
                        <p class="card-text fw-bolder">{props.title}</p>
                        <p class="card-text fw-bolder">Price :&#8377;{props.price}</p>

                    </div>
            </div>
        </div>
    )
}
