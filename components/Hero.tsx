
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a className="group flex items-center py-3" href={href}>
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {children}
            </span>
        </a>
    </li>
);

const SocialLink: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
    <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="block text-slate-400 hover:text-teal-300 transition-colors">
        {children}
    </a>
);


const Hero: React.FC = () => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">{PERSONAL_INFO.name}</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    {PERSONAL_INFO.title}
                </h2>
                <p className="mt-4 max-w-xs leading-normal">{PERSONAL_INFO.bio}</p>

                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs shrink-0">
                    <SocialLink href={PERSONAL_INFO.linkedin} label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 114.75 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.91 0-1.38.61-1.38 1.93V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.2 1.16 3.2 3.56z"></path></svg>
                    </SocialLink>
                </li>
            </ul>
        </header>
    );
};

export default Hero;