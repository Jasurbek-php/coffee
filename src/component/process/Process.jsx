import { useState } from 'react';
import './Process.css'
import cardimage from './../../assets/Rectangle 4.png'
import cardimageOne from './../../assets/Rectangle 4 (1).png'
import cardimageTwo from './../../assets/Rectangle 4 (2).png'

function Process() {
    const [cardData] = useState([
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
            image: cardimageOne,
        },
        {
            id: 3,
            cls: "03",
            title: 'Best Coffee Price',
            image: cardimageTwo,
        }
    ])

    return (
        <div className="Process">
            <div className="process">
                <div className="card__flex">
                    {cardData.map((e) => {
                        return (
                            < div className="card" key={e.id} >
                                <p>{e.cls} <span>{e.title}</span></p>
                                <img src={e.image} alt="" />

                            </div>
                        )

                    })}

                </div>
            </div>

        </div >
    );
}

export default Process;
