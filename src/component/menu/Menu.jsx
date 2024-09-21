import { useState } from 'react';
import './Menu.css'
import cardimage from './../../assets/Bg.png'

function Menu() {
    const [coffeeList] = useState([
        {
            id: 1,
            price: "$12:00",
            title: 'Americano rosted gred',
            image: cardimage,
        },
        {
            id: 2,
            price: "$12:00",
            title: 'Americano rosted gred',
            image: cardimage,
        },
        {
            id: 3,
            price: "$12:00",
            title: 'Americano rosted gred',
            image: cardimage,
        },
        {
            id: 3,
            price: "$12:00",
            title: 'Americano rosted gred',
            image: cardimage,
        }
    ]);
    return (
        <div className='Menu'>
            <h3 className='title'>Menu</h3>
            <h1 className='title_bottom'>Coffee popular menu</h1>
            <div className="d-flex">
                <div className='menu_list'>
                    {coffeeList.map((e) => {
                        return (
                            <div className="menu_item" key={e.id}>
                                <img src={e.image} alt="" /><br />
                                <p>{e.title}</p>
                                <p className='price'> {e.price}</p>
                            </div>
                        );
                    })}
                </div>
                <div className='menu_list'>
                    {coffeeList.map((e) => {
                        return (
                            <div className="menu_item" key={e.id}>
                                <img src={e.image} alt="" /><br />
                                <p>{e.title}</p>
                                <p className='price'>{e.price}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default Menu