import "./../styles/Home.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { homeSection } from "../data/HomeSection";
import { coursesSection } from "../data/CoursesSection";
import parse from 'html-react-parser'

function Home() {
    return (
        <>
            <Navbar/>
            <div className="wrapper">
                {/* home */}
                <section id="home">
                    <img src={homeSection.image}/>
                    <div className="kolom">
                        {parse(homeSection.content)}
                    </div>
                </section>

                {/* online course */}
                <section id="courses">
                    <div className="kolom">
                        {parse(coursesSection.content)}
                    </div>
                    <img src={coursesSection.image}/>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default Home;