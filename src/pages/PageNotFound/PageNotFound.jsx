import { Link } from "react-router-dom"

import './PageNotFound.styles.css'

const PageNotFound = () => {
    return (
        <div className="pgn-body">
            <div className="img-pnf">
                <img src="/icons/broken_link.svg" alt="404" />
            </div>
            <div className="text-pnf">Page not found</div>
            <Link to="/" className="link-pnf">
                    Return to home page
            </Link>
        </div>
    )
}

export default PageNotFound