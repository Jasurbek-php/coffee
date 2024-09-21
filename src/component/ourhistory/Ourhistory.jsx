import './Ourhistory.css'
import one from './../../assets/Rectangle 4.png'
import two from './../../assets/Rectangle 4 (1).png'
import three from './../../assets/Rectangle 14.png'
function Ourhistory() {
    return (
        <div className="Ourhistory">
            <div className="ourhistory">
                <div className='flex'><div className='ourhistory_one'>
                    <img src={one} alt="" /><br />
                    <img src={two} alt="" />
                </div>
                    <div className='ourhistory_two'>
                        <img src={three} alt="" />
                    </div></div>
                <div className='ourhistory_three'>
                    <p>
                        Our history
                    </p>
                    <h1>
                        Create a<br />
                        new story with us
                    </h1>
                    <p className='two'>mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nibh maximus, est eu, mattis nuce. preasent ut quam quis quam venen
                        atis fringilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.</p>
                </div>

            </div>

        </div>
    );
}

export default Ourhistory;
