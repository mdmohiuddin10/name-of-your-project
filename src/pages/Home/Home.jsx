import Footer from "../Footer/Footer";
import Mobile from "./Mobile/Mobile";
import Banner from "./Banner";
import Brandname from "./Brandname";
import Laptop from "./Laptop/Laptop";
import Watch from "./Watch/Watch";
import WhyChooseUs from "./WhyChooseUs";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brandname></Brandname>
            <Mobile></Mobile>
            <Laptop></Laptop>
            <Watch></Watch>
            <WhyChooseUs></WhyChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;