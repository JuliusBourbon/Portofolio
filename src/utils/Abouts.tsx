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
    value: '30+',
    color: 'bg-peach/20',
  },
  {
    label: 'Certifications Earned',
    value: '15+',
    color: 'bg-mint/20',
  },
  // {
  //   label: 'at Universitas Komputer Indonesia',
  //   value: 'Currently studying',
  //   color: 'bg-lavender/20',
  // },
  ]
  
export const skills: SkillItem[] = [
    {
      category: 'Frontend',
      items: ['React', 'Vue', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'Redis']
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'AWS', 'Figma', 'Jest']
    },
]