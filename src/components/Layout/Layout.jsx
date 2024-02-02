import { Link } from "react-router-dom";
import "./Layout.css";
import {  useEffect, useState } from "react";

const Layout = ({ children }) => {
    const [menu, setMenu] = useState(false);

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showButton && window.pageYOffset > 600) {
                setShowButton(true);
            } else if (showButton && window.pageYOffset <= 600) {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", checkScrollTop);

        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    }, [showButton]);

    useEffect(() => {
        menu
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
    }, [menu]);

    const clickToTop = () => {
        window.scrollTo({ top, behavior: "smooth" });
    };

    return (
        <>
            <header>
                <Link to={"/"}>
                    <img
                        src="/img/LinearDev_logo.png"
                        className="header_logo"
                        alt="LinearDev"
                    ></img>
                </Link>
                <div className="link_main_container">
                    <a
                        className="links"
                        href="https://github.com/LinearDev/LinearJS"
                        target="_blank"
                    >
                        Get Linear
                    </a>
                    <Link to={"/projects"} className="links">
                        Projects
                    </Link>
                    <Link to={"/blog"} className="links">
                        About Us
                    </Link>
                    <Link to={"/contacts"} className="contact_button">
                        Contact
                    </Link>
                </div>
                <button
                    className="menu_button"
                    onClick={() => {
                        setMenu(!menu);
                    }}
                >
                    <img
                        src={!menu ? "/img/menu.svg" : "/img/xmark.svg"}
                        alt="menu"
                        style={{ width: "30px" }}
                    ></img>
                </button>
            </header>
            <div className={`mobile_menu ${menu}`}>
                <div className="mobile_menu_cont">
                    <Link to={"/"} className="mobile_menu_links">
                        Home
                    </Link>
                    <a
                        className="mobile_menu_links"
                        href="https://github.com/LinearDev/LinearJS"
                        target="_blank"
                    >
                        Get Linear
                    </a>
                    {/* <Link to={"/contacts"} className="mobile_menu_links">
                        Get Linear
                    </Link> */}
                    <Link to={"/projects"} className="mobile_menu_links">
                        Projects
                    </Link>
                    <Link to={"/blog"} className="mobile_menu_links">
                        About Us
                    </Link>
                    {/* <Link className="mobile_menu_links">Contact</Link> */}
                    <Link to={"/contacts"} className="mobile_menu_links">
                        Contact
                    </Link>
                </div>
            </div>
            <section className="main_section">{children}</section>
            <footer>
                <div>
                    <div className="img_cont_footer">
                        <img
                            style={{ maxWidth: "236px", paddingLeft: "250px" }}
                            src="/img/LinearDev_logo 2.png"
                            alt="LinearDev"
                        ></img>
                    </div>
                    <div className="footer_links_main_container">
                        <div className="footer_links_container">
                            <div className="footer_links_container_title">
                                More
                            </div>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                LinearJS
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Projects
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                GitHub
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Community
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Sitemap
                            </a>
                        </div>
                        <div className="footer_links_container">
                            <div className="footer_links_container_title">
                                Company
                            </div>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                LinearJS
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Projects
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                GitHub
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Community
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Sitemap
                            </a>
                        </div>
                        <div className="footer_links_container">
                            <div className="footer_links_container_title">
                                Company
                            </div>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                LinearJS
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Projects
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                GitHub
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Community
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Sitemap
                            </a>
                        </div>
                        <div className="footer_links_container">
                            <div className="footer_links_container_title">
                                Company
                            </div>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                LinearJS
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Projects
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                GitHub
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Community
                            </a>
                            <a
                                className="footer_links"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            >
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <button className={`to_top_btn ${scrollHidden}`} onClick={() => {window.scrollTo({top, behavior: "smooth"})}}><img src="/img/Vector.png"/></button> */}
            <button className={`to_top_btn ${showButton}`} onClick={clickToTop}>
                <img src="/img/Vector.png" />
            </button>
        </>
    );
};

export default Layout;
