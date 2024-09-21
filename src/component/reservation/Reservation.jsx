import './Reservation.css'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Reservation() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <div className='Reservation'>
            <div className="reservation-flex">
                <div className="reservation-left">
                    <div >
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
                <div className="reservation-right">
                    <h3 className="title">Reservation</h3>
                    <h1 className="title_bottom">Booking a table</h1>
                    <input type="text" placeholder='4 person' /><br />
                    <input type="text" placeholder='12.25, 2020' /><br />
                    <input type="text" placeholder='11:00 AM' /><br />
                    <button>
                        <p>BOOKS TABLE</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Reservation;