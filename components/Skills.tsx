
import React from 'react';
import type { Skill } from '../types';

const skills: Skill[] = [
    { name: "WordPress" },
    { name: "Elementor" },
    { name: "WooCommerce" },
    { name: "PHP" },
    { name: "MySQL" },
    { name: "HTML5 & CSS3" },
    { name: "Bootstrap" },
    { name: "SEO" },
    { name: "Digital Marketing" },
    { name: "Generative AI" },
];

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => (
    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
        {skill.name}
    </li>
);

const Skills: React.FC = () => {
    return (
        <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
             <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
            </div>
            <div>
                 <ul className="flex flex-wrap gap-2">
                    {skills.map(skill => <SkillBadge key={skill.name} skill={skill} />)}
                </ul>
            </div>
        </section>
    );
};

export default Skills;