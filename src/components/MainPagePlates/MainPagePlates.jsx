import "./MainPagePlates.css";

const MainPagePlates = ({ title, description }) => {
    return (
        <div className="plates_cont_mpage">
            <div className="container_plates">
                <div className="title_plates_mpage">{title}</div>
                <div className="desc_plates_mpage">{description}</div>
            </div>
        </div>
    );
};

export default MainPagePlates;
