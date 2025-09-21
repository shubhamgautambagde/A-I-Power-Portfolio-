
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="max-w-screen-xl px-6 py-12 mx-auto text-center text-sm text-slate-500 lg:px-24">
            <p>
                Designed in Figma and coded in Visual Studio Code. Built with React, TypeScript, and Tailwind CSS. Deployed with Vercel.
            </p>
            <p className="mt-2">
                Content based on Shubham's professional experience, structured with assistance from AI.
            </p>
        </footer>
    );
};

export default Footer;