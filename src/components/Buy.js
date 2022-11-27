import React, {useState} from 'react'
import cover from '../Images/buypage-cover.jpg'
import shoeIcon from '../Images/shoe-icon.png'
import Cards from './Cards'
import "../App.css"

export default function Buy(props) {
    const [shoesCategory, setshoesCategory] = useState("all")
    const shoeArr = [
        {
            title: "Fuse 2.0",
            brand: "Puma",
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/376151/01/sv01/fnd/IND/fmt/png",
            price: "7,999",
            category:"sneakers"
        },
        {
            title: "Jordans",
            brand: "nike",
            imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/47112d0a-dc23-4b74-876c-b638fecf0af2/air-jordan-1-retro-high-og-shoes-a7Zzxm.png",
            price: "3400",
            category:"basketball"
        },
        {
            title: "Mirage",
            brand: "Puma",
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/381051/12/sv01/fnd/IND/fmt/png/Mirage-Sport-Remix-Unisex-Sneakers",
            price: "9,999",
            category:"sneakers"
        },
        {
            title: " Onitsuka Tiger",
            brand: "Asics",
            imgUrl: "https://m.media-amazon.com/images/I/41FKyqzQgCL.jpg",
            price: "4000",
            category:"sneakers"
        },
        {
            title: "Clearence",
            brand: "Nike",
            imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0881e42d-5c2c-4575-ba23-917cda1af38b/kyrie-infinity-basketball-shoes-LvzsVp.png",
            price: "10,000",
            category:"sneakers"
        },
        {
            title: "AirMax 97",
            brand: "Nike",
            imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa5164d2-7cb2-488e-85bd-1d1d677dbf9e/air-max-97-premium-mens-shoes-ztThsC.png",
            price: "12,000",
            category:"running"
        },
        {
            title: "Yeezy",
            brand: "Adiadas",
            imgUrl: "https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg",
            price: "3000",
            category:"sneakers"
        },
        {
            title: "Converse",
            brand: "Nike",
            imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d82dc1keg33jjklyiw8l/converse-chuck-taylor-all-star-high-top-unisex-shoes-xX439O.png",
            price: "5000",
            category:"High-Tops"
        },
        {
            title: "Superkicks",
            brand: "Vans",
            imgUrl: "https://superkicks.in/wp-content/uploads/2020/02/oldskool-3.jpg",
            price: "5000",
            category:"old_Skool"
        },
        {
            title:"terrex",
            brand:"adidas",
            imgUrl:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQWyN0RwZZPzV4whTDNifrmekQB5tNPi-BsQRhufMw4-shC4qGmsGYMOVyxKgFnZWIwDRArtmMWYHVPBv29NIlytm45uQ3elfAiKu0CQigSSlXovCO1IZFd",
            price:"5550",
            category:"hiking"
        },
        {
            title:"OwnTheGame",
            brand:"adidas",
            imgUrl:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0549bb8f67024322ba7fad1a00a379b0_9366/Ownthegame_Shoes_Black_H00471_04_standard.jpg",
            price:"6599",
            category:"running"
        },
        {
            title:"Zoom Fly 5",
            brand:"Nike",
            imgUrl:"https://static.nike.com/a/images/t_default/f07c8068-3696-4127-ad95-f7d9f71b21e4/zoom-fly-5-road-running-shoes-lkx7Zp.png",
            price:"5000",
            category:"running"
        },
        {
            title:"petronas",
            brand:"Nike",
            imgUrl:"https://static.nike.com/a/images/t_default/fa6683fc-ea90-4ffe-baa5-cd3d4ae60173/dunk-high-shoes-4TXtvT.png",
            price:"2690",
            category:"High-Tops"
        }
    ]
    const handleClick=(event)=>{
        props.setProgress(30)
        setshoesCategory(event.target.id)
        props.setProgress(100)
    }
    return (
        <div className="row py-4 " id="buy" style={{
            backgroundImage: `url(${cover})`, height: "100vh", backgroundSize: 'cover',overflowY:"auto"
        }}>
            <div className='container bg-dark w-75 py-4 px-4 col-sm-12' style={{ opacity: "1"}}>
                <h2 className='text-light text-center fs-1'>What type of <span><img src={shoeIcon} height="120rem" width="120rem" alt="shoe-Icon"></img></span> you wanna Buy?</h2>
                <div className='shoeTypes d-flex flex-column justify-content-center mx-2 flex-md-row my-4 '>
                    <button type="button" id = "sneakers" class="btn btn-light mx-2 my-2" onClick={handleClick}>Sneakers</button>
                    <button type="button" id = "hiking" class="btn btn-light mx-2 my-2"  onClick={handleClick}>Hiking</button>
                    <button type="button" id = "basketball" class="btn btn-light mx-2 my-2"  onClick={handleClick}>Basketball</button>
                    <button type="button" id = "running" class="btn btn-light mx-2 my-2" onClick={handleClick}>Running</button>
                    <button type="button" id = "old_Skool" class="btn btn-light mx-2 my-2"  onClick={handleClick}>Old Skool</button>
                    <button type="button" id = "High-Tops" class="btn btn-light mx-2 my-2"  onClick={handleClick}>High-Tops</button>
                </div>
                <h3 className='text-center text-light mb-2'>Showing results for {shoesCategory}</h3>
                <div className="shoeCards row">
                    
                    {shoesCategory==="all"?(shoeArr.map((shoes) => (
                        <div className='individualCards col-md-3 col-sm-6'>
                            <Cards title={shoes.title} brand={shoes.brand} imgUrl={shoes.imgUrl} price={shoes.price} />
                        </div>
                    ))):(shoeArr.filter( element => element.category === shoesCategory).map((shoes) => (
                        <div className='individualCards col-md-3 col-sm-6'>
                            <Cards title={shoes.title} brand={shoes.brand} imgUrl={shoes.imgUrl} price={shoes.price} />
                        </div>
                    )))}

                </div>
            </div>
        </div>
    )
}
