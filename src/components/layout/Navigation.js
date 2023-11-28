import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../../assets/images/asc_logo_color.png';
import quicksightIcon from '../../assets/images/quicksight-icon.png';
import tableauIcon from '../../assets/images/Tableau-Icon.png';
import dataIcon from '../../assets/images/data-icon.png';




const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTransparent, setTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 50;
            if (isTop !== isTransparent) {
                setTransparent(isTop);
            }
        };
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [isTransparent]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header id="cs-navigation" className="cs-container" >
            <a href="/" className="cs-logo" aria-label="back to home">
                <img src={logo} alt="logo" aria-hidden="true" decoding="async" />
            </a>
            <nav className="cs-nav" role="navigation">
                <button className="cs-toggle" aria-label="mobile menu toggle" onClick={toggleMobileMenu}>
                    <div className="cs-box" aria-hidden="true">
                        <span className="cs-line cs-line1" aria-hidden="true"></span>
                        <span className="cs-line cs-line2" aria-hidden="true"></span>
                        <span className="cs-line cs-line3" aria-hidden="true"></span>
                    </div>
                </button>
                <div className="cs-ul-wrapper">
                    <ul id="cs-expanded" className={`cs-ul ${isMobileMenuOpen ? 'expanded' : ''}`} aria-expanded={isMobileMenuOpen}>
                        <li className="cs-li cs-dropdown" tabIndex="0">
                            <span className="cs-li-link">
                                <img src={dataIcon} alt="DataIcon" className="icon-class" width="26" height="22" aria-hidden="true" decoding="async" style={{ paddingRight: "5px" }}/>
                                Data Dashboards
                                <img className="cs-drop-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/down-gold.svg" alt="dropdown icon" width="15" height="15" decoding="async" aria-hidden="true" />
                            </span>
                            <ul className="cs-drop-ul">
                                <li className="cs-drop-li">
                                    <Link to="/tableau" className="cs-li-link cs-drop-link">
                                        <img src={tableauIcon} alt="Tableau" width="26" height="22" aria-hidden="true" decoding="async" style={{ paddingRight: "5px" }}/>
                                        Tableau</Link>
                                </li>
                                <li className="cs-drop-li">
                                    <Link to="/quicksight" className="cs-li-link cs-drop-link">
                                        <img src={quicksightIcon} alt="QuickSight" width="24" height="22" aria-hidden="true" decoding="async" style={{ paddingRight: "5px", paddingBottom: "5px" }}/>
                                        QuickSight</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="cs-li">
                            <a href="https://ascendingdc.com/about/why-ascending" className="cs-li-link">About Us</a>
                        </li>
                        <li className="cs-li cs-dropdown" tabIndex="0">
                            <span className="cs-li-link">
                                Contact Us
                                <img className="cs-drop-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/down-gold.svg" alt="dropdown icon" width="15" height="15" decoding="async" aria-hidden="true" />
                            </span>
                            <ul className="cs-drop-ul">
                                <li className="cs-drop-li">
                                    <a href="tel:5182887586" className="cs-li-link cs-drop-link">
                                        <img className="cs-contact-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-1a.svg" alt="Phone Icon" width="24" height="24" aria-hidden="true" decoding="async" />
                                        <span style={{ paddingLeft: '4.5px' }}>518-288-7586</span>
                                    </a>
                                </li>
                                <li className="cs-drop-li">
                                    <a href="mailto:support@ascendingdc.com" className="cs-li-link cs-drop-link">
                                        <img className="cs-contact-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/email-1a.svg" alt="Email Icon" width="24" height="24" aria-hidden="true" decoding="async" />
                                        <span style={{ paddingLeft: '4.5px'}}>support@ascendingdc.com</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
