import './Testimonal.css'
import Testimol from './../../assets/testimonal.png'
function Testimonal() {
    return (
        <div className='Testimonal'>
            <h3 className="title">Testimonal</h3>
            <h1 className="title_bottom">Says our customers</h1>
            <div className="d-flex">
                <div className="card-comment">
                    <div className="card-flex">
                        <img src={Testimol} alt="" />
                        <p>Education WP is a special build for effective education & Learning Management System site. Education WP is the next generation & one of the best education WordPress themes which all the strength of eLearning WP..</p>
                    </div>
                    <p >John Smith <br />
                        <span>Product Designer</span></p>
                </div>
                <div className="card-comment">
                    <div className="card-flex">
                        <img src={Testimol} alt="" />
                        <p>Education WP is a special build for effective education & Learning Management System site. Education WP is the next generation & one of the best education WordPress themes which all the strength of eLearning WP..</p>
                    </div>
                    <p >John Smith <br />
                        <span>Product Designer</span></p>
                </div>
            </div>

        </div >
    )
}

export default Testimonal;