import Footer from "../Footer/Footer";
import Mobile from "./Mobile/Mobile";
import Banner from "./Banner";
import Brandname from "./Brandname";
import Laptop from "./Laptop/Laptop";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brandname></Brandname>
            <Mobile></Mobile>
            <Laptop></Laptop>
            <Footer></Footer>
        </div>
    );
};

export default Home;