import DiscoverNow from "../component/discovernow/DiscoverNow";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import Menu from "../component/menu/Menu";
import Navbar from "../component/navbar/Navbar"
import Ourhistory from "../component/ourhistory/Ourhistory";
import Process from "../component/process/Process";
import Product from "../component/product/Product";
import Reservation from "../component/reservation/Reservation";
import Testimonal from '../component/testimonal/Testimonal';

function Home() {
    return (
        <div className="Home">
            <Navbar />
            <Header />
            <Process />
            <Ourhistory />
            <Product />
            <DiscoverNow />
            <Menu />
            <Testimonal />
            <Reservation />
            <Process />
            <Footer />
        </div>
    );
}

export default Home;
