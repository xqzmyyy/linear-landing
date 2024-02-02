import { Link } from "react-router-dom";
import "./BlogPlates.css";

const BlogPlates = ({ handlerClick, img, title, preview, date, readTime }) => {
    return (
        <div onClick={handlerClick} className="main_cont_plate">
            <div className="img_plate">
                <img src={img} />
            </div>
            <div className="text_cont_plate">
                <div className="title_plate">{title}</div>
                <div className="preview_plate">{preview}</div>
            </div>
            <div className="date_cont_plate">
                <div className="date_plate">{date}</div>
                <div className="ebannaya_tochka">•</div>
                <div className="reading_time_plate">{readTime}</div>
            </div>
        </div>
    );
};

export default BlogPlates;
