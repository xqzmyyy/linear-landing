import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
    return (
        <>
            <div className="pagenotfound">
                <div className="img_pnf">
                    <img src="/img/broken_link.svg" alt="404" />
                </div>
                <div className="text_pnf">Page not found</div>
                <Link to="/" className="link_pnf">
                    Return to main page
                </Link>
            </div>
        </>
    );
};

export default PageNotFound;
