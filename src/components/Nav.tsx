import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import SwappingText from './SwappingText';
import SocialIcons from './SocialIcons';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleClasses = classNames('toggle', { open: menuOpen });
    const navClasses = classNames({ open: menuOpen });
    const options = [
        { title: 'About me' },
        { title: 'Work' },
        { title: 'Resume' },
        { title: "Let's chat" },
    ];

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('nooverflow');

            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } else {
            document.body.classList.remove('nooverflow');
        }
    }, [menuOpen]);

    return (
        <nav className={navClasses}>
            <div className="menu">
                <div className="container flex flex-column">
                    <p className="split">Contents</p>

                    {options.map((option, index) => (
                        <a href="" style={{ transitionDelay: `${140 * (index + 1) + 200}ms` }}>
                            {option.title}
                        </a>
                    ))}

                    <SocialIcons />
                </div>
            </div>
            <div className="container flex justify-between">
                <SwappingText text={["Hi, I'm Stefan.", 'Stefan Mansson']} />
                <div className="menutoggle">
                    <div className={toggleClasses} onClick={() => setMenuOpen(!menuOpen)} />
                </div>
            </div>
        </nav>
    );
}
