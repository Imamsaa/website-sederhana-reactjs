import "./../styles/Contact.css"
import { contactsSection } from "../data/ContactsSection";
import parse from "html-react-parser";
function Contact() {
    return (
        <>
            <div id="contact">
                <div className="wrapper">
                    <div className="footer">
                        {
                            contactsSection.map((item, index) => {
                                return (
                                    <div className="footer-section" key={index}>
                                        {parse(item.content)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;