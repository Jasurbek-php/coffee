import { useState } from 'react';
import './Product.css';
import cardimage from './../../assets/Rectangle 2.png';
// import coffe from './../../assets/coffe.png';

function Product() {
    const [coffeeList] = useState([
        {
            id: 1,
            cls: "01",
            title: 'Best Coffee Flavour',
            image: cardimage,
        },
        {
            id: 2,
            cls: "02",
            title: 'Best Coffee Quality',
            image: cardimage,
        },
        {
            id: 3,
            cls: "03",
            title: 'Best Coffee Price',
            image: cardimage,
        }
    ]);

    return (
        <div className="Product">
            <h3 className='title'>Popular Product</h3>
            <h1 className='title_bottom'>Coffee Popular Product</h1>
            <div className="display-flex">
                <button>
                    <p>View all product</p>
                </button>
            </div>

            <div className='coffee'>
                {coffeeList.map((e) => {
                    return (
                        <div className="card" key={e.id}>
                            <img src={e.image} alt="" /><br />
                            <p>{e.cls} <span>{e.title}</span></p>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Product;
