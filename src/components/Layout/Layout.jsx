import { Link } from 'react-router-dom'
import './Layout.styles.css'
import { footerLinks } from '../../data/footerLinks'
import { useState } from 'react';

const Layout = ({children}) => {
    const [menu, setMenu] = useState(false);


    return (
        <>
            <header>
                <div className='header-cont'>
                    <Link to={'/'} className='header-logo-box'>
                        <img
                            src='/public/LinearDev_logo_header.png'
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
                        <Link to={'#'} className='default-link-header'>
                            Projects
                        </Link>
                        <Link to={'#'} className='default-link-header'>
                            About Us
                        </Link>
                        <Link to={'#'} className='contact-btn-header'>
                            Contact
                        </Link>
                    </nav>
                    <button
                        className="menu-btn"
                        onClick={() => {
                            setMenu(!menu);
                        }}
                    >
                    <img
                        src={!menu ? "/public/icons/menu.svg" : "/public/icons/xmark.svg"}
                        alt="menu"
                        style={{ width: "30px" }}
                    />
                </button>
                </div>
            </header>
            <div className={`mobile-menu ${menu}`}>
                <div className='mobile-menu-cont'>
                    <a 
                        href='https://github.com/LinearDev/LinearJS' 
                        target='_blank'
                        className='mobile-link-header'
                    >
                        Get Linear
                    </a>
                    <Link to={'#'} className='mobile-link-header'>
                        Projects
                    </Link>
                    <Link to={'#'} className='mobile-link-header'>
                        About Us
                    </Link>
                    <Link to={'#'} className='mobile-link-header'>
                        Contact
                    </Link>
                </div>
            </div>
            <section>
                {children}
            </section>
            <footer>
                <div className='footer-cont'>
                    <div className='footer-logo-box'>
                        <img src='/public/LinearDev_logo_header.png' alt='LinearDev'/>
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
        </>
    )
}

export default Layout