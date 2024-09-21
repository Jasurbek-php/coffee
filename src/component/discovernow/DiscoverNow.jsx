import './DiscoverNow.css'
import blender from './../../assets/blender.png'

function DiscoverNow() {
    return (
        <div className='DiscoverNow'>
            <div className="d-flex">
                <div className="d-flex-container">
                    <div className="d-flex-left">
                        <img src={blender} alt="" />
                    </div>
                    <div className="d-flex-right">
                        <h1>Coffee<br />
                            machine, buy for home</h1>
                        <p>mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula
                            volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nib
                            maximus, est eu, mattis nuce. preasent ut quam quis quam venen atis fri
                            ngilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.</p>
                        <button>
                            <p>Discover now</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DiscoverNow;