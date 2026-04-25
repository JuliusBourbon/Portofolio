export interface StatItem {
    label: string;
    value: string;
    color: string;
}

export interface SkillItem {
    category: string;
    items: string[];
}


export const stats: StatItem[] = [
  {
    label: 'Academic & Personal Projects',
    value: '20+',
    color: 'bg-peach/20',
  },
  {
    label: 'Certifications Earned',
    value: '10+',
    color: 'bg-mint/20',
  },
]
  
export const skills: SkillItem[] = [
    {
      category: 'Frontend',
      items: ['React', 'Next', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Blade', 'Bootstrap']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'RESTful API', 'Express', 'Laravel']
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'AWS', 'Figma', 'Postman', 'Agentic AI']
    },
]