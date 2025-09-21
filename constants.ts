
import type { Project } from './types';

export const PERSONAL_INFO = {
  name: "Shubham Bagde",
  title: "Founder & Web Solutions Expert",
  bio: "I help startups, realtors, and SMBs build high-converting digital presences that generate measurable growth—fast. With 6+ years of hands-on experience, I've delivered 100+ WordPress sites and led 50+ marketing campaigns.",
  email: "shubhamgbagde@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubhamgbagde",
};

export const PROJECTS: Project[] = [
  {
    title: "Founder & Managing Director at Ready Multi Service",
    description: "Managed and executed multi-dimensional projects across web development, digital marketing, and real estate. Delivered over 100 websites using WordPress & Elementor, led 50+ digital marketing campaigns with measurable ROI, and managed real estate project sites.",
    tags: ["WordPress", "Elementor", "Digital Marketing", "SEO", "Google Ads", "CRM"],
    imageUrl: "https://picsum.photos/seed/readymulti/400/250",
  },
  {
    title: "Web Developer at SSIT SOLUTIONS LLC",
    description: "Developed and maintained dynamic, responsive WordPress websites for college departments, events, and student clubs. Customized themes using HTML, CSS, and PHP to meet specific design and functional requirements.",
    tags: ["WordPress", "HTML5", "CSS3", "PHP", "MySQL", "Yoast SEO", "WPForms"],
    imageUrl: "https://picsum.photos/seed/ssit/400/250",
  },
  {
    title: "GeM Portal Consulting",
    description: "Executed over 15 full-cycle Government e-Marketplace (GeM) registrations and bid submissions, ensuring compliance and security for clients navigating government procurement processes.",
    tags: ["GeM Portal", "Compliance", "Security", "Project Management"],
    imageUrl: "https://picsum.photos/seed/gemportal/400/250",
  }
];

export const PORTFOLIO_DATA_FOR_AI = `
Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
Bio: ${PERSONAL_INFO.bio}
Contact Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}

Skills: WordPress, Elementor, WooCommerce, PHP, MySQL, HTML5, CSS3, Bootstrap, Materialize CSS, CSS Sprites, Digital Marketing, SEO, Google Ads, Meta Ads, CRM Integration, Canva, Generative AI Prompt Engineering, Java basics.

Experience Summary:
- Founder & Managing Director at Ready Multi Service (Jan 2019 - Present): Led web development, digital marketing, and real estate consulting. Delivered 100+ WordPress sites, managed 50+ marketing campaigns, and handled GeM portal registrations.
- Web Developer at SSIT SOLUTIONS LLC (Oct 2017 - Dec 2018): Developed and maintained responsive WordPress websites for various college needs. Customized themes with HTML, CSS, and PHP.

Projects from Experience:
${PROJECTS.map(p => `
- Project: ${p.title}
  Description: ${p.description}
  Technologies: ${p.tags.join(', ')}
`).join('\n')}
`;