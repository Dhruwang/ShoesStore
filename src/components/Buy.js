import React from 'react'
import cover from '../Images/buypage-cover.jpg'
import shoeIcon from '../Images/shoe-icon.png'
import Cards from './Cards'

export default function Buy() {
    const shoeArr = [
        {
            title: "Fuse 2.0",
            brand: "Puma",
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/376151/01/sv01/fnd/IND/fmt/png",
            price: "7,999"
        },
        {
            title: "Jordans",
            brand: "nike",
            imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/47112d0a-dc23-4b74-876c-b638fecf0af2/air-jordan-1-retro-high-og-shoes-a7Zzxm.png",
            price: "3400"
        },
        {
            title: "Jordans",
            brand: "Puma",
            imgUrl: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UL1500_.jpg",
            price: "34000"
        },
        {
            title: "Jordans",
            brand: "Puma",
            imgUrl: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UL1500_.jpg",
            price: "34000"
        },
        {
            title: "Jordans",
            brand: "Puma",
            imgUrl: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UL1500_.jpg",
            price: "34000"
        },
        {
            title: "Jordans",
            brand: "Puma",
            imgUrl: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UL1500_.jpg",
            price: "34000"
        },
        {
            title: "Jordans",
            brand: "Puma",
            imgUrl: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UL1500_.jpg",
            price: "34000"
        },
    ]
    return (
        <div className="row py-4" style={{ backgroundImage: `url(${cover})`, height: "100vh", backgroundSize: 'cover' }}>
            <div className='container bg-dark w-75 py-4 px-4' style={{ opacity: "0.95" }}>
                <h2 className='text-light text-center fs-1'>What type of <span><img src={shoeIcon} height="120rem" width="120rem" alt="shoe-Icon"></img></span> you wanna Buy?</h2>
                <div className='shoeTypes d-flex flex-column justify-content-center mx-2 flex-md-row my-4 '>
                    <button type="button" class="btn btn-light mx-2 my-2">Sneakers</button>
                    <button type="button" class="btn btn-light mx-2 my-2">Hiking</button>
                    <button type="button" class="btn btn-light mx-2 my-2">Basketball</button>
                    <button type="button" class="btn btn-light mx-2 my-2">Running</button>
                    <button type="button" class="btn btn-light mx-2 my-2">Old Skool</button>
                    <button type="button" class="btn btn-light mx-2 my-2">High-Tops</button>
                </div>
                <div className="shoeCards row">
                    {shoeArr.map((shoes) => (
                        <div className='individualCards col-md-3'>
                            <Cards title={shoes.title} brand={shoes.brand} imgUrl={shoes.imgUrl} price={shoes.price} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
