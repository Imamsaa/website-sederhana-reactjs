import "./../styles/Partners.css";
function Partners(props) {
    return (
        <>
            <div className="partner-list">
                {
                    props.partnersSection.image.map((item, index) => {
                        return (
                            <div className="kartu-partner" key={index}>
                                <img src={item.img}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
export default Partners;