import { Link } from 'react-router-dom'
import './Layout.styles.css'
import { footerLinks } from '../../data/footerLinks'
import { useEffect, useState } from 'react';

const Layout = ({children}) => {
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
                <div className='header-cont'>
                    <Link to={'/'} className='header-logo-box'>
                        <img
                            src='/LinearDev_logo_header.png'
                            alt='LinearDev'
                        />
                    </Link>
                    <nav className='header-nav-cont'>
                        <a 
                            href='https://github.com/LinearDev/LinearJS' 
                            target='_blank'
                            className='default-link-header'
                        >
                            Get Linear
                        </a>
                        <Link to={'/projects'} className='default-link-header'>
                            Projects
                        </Link>
                        <Link to={'/about_us'} className='default-link-header'>
                            About Us
                        </Link>
                        <Link to={'/contacts'} className='default-link-header'>
                            Contacts
                        </Link>
                    </nav>
                    <button
                        className="menu-btn"
                        onClick={() => {
                            setMenu(!menu);
                        }}
                    >
                    <img
                        src={!menu ? "/icons/menu.svg" : "/icons/xmark.svg"}
                        alt="menu"
                        style={{ width: "30px" }}
                    />
                </button>
                </div>
            </header>
            <div className={`mobile-menu ${menu}`}>
                <div className='mobile-menu-cont'>
                    <Link to={'/'} className='mobile-link-header'>
                        Home
                    </Link>
                    <a 
                        href='https://github.com/LinearDev/LinearJS' 
                        target='_blank'
                        className='mobile-link-header'
                    >
                        Get Linear
                    </a>
                    <Link to={'/projects'} className='mobile-link-header'>
                        Projects
                    </Link>
                    <Link to={'/about_us'} className='mobile-link-header'>
                        About Us
                    </Link>
                    <Link to={'/contacts'} className='mobile-link-header'>
                        Contacts
                    </Link>
                </div>
            </div>
            <section>
                {children}
            </section>
            <footer>
                <div className='footer-cont'>
                    <div className='footer-logo-box'>
                        <img src='/LinearDev_logo_header.png' alt='LinearDev'/>
                    </div>
                    <div className='footer-body-cont'>
                        {footerLinks.map((section, sectionIndex) => (
                            <div key={sectionIndex} className='footer-body-item-box'>
                                <span className='footer-body-item-name'>{section.name}</span>
                                {section.fields.map((field, fieldIndex) => (
                                    <div key={fieldIndex}>
                                        <a href={field.link} className='footer-body-item-field'>{field.title}</a>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
            <button className={`to-top-btn ${showButton}`} onClick={clickToTop}>
                <img src="/icons/vector.png"/>
            </button>
        </>
    )
}

export default Layout