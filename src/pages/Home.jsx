import "./../styles/Home.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { homeSection } from "../data/HomeSection";
import parse from 'html-react-parser'

function Home() {
    return (
        <>
            <Navbar/>
            <div className="warpper">
                <section id="home">
                    <img src={homeSection.image}/>
                    <div className="kolom">
                        {parse(homeSection.content)}
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default Home;