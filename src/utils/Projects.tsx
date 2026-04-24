import seism_1 from '../assets/Seism/seism_1.png'
import seism_2 from '../assets/Seism/seism_2.png'
import seism_3 from '../assets/Seism/seism_3.png'
import seism_4 from '../assets/Seism/seism_4.png'
import seism_5 from '../assets/Seism/seism_5.png'
import seism_6 from '../assets/Seism/seism_6.png'
import seism_7 from '../assets/Seism/seism_7.png'

export interface ProjectsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  // tags: string[];
  detail: {
    overview: string;
    role: string;
    year: string;
    duration: string;
    liveUrl: string;
    githubUrl?: string;
    highlights: string[];
    gallery: string[];
    stack: { name: string, category: string }[];
  };
}
 
export const projects: ProjectsItem[] = [
  {
    id: 1,
    title: 'Seism',
    description: 'Disaster reporting and monitoring system',
    image:
      seism_1,
    detail: {
      overview:
        'Seism is a real-time disaster reporting and monitoring system designed to provide timely and accurate information during emergency situations. It aggregates data from various sources to create a comprehensive view of disaster impacts and supports coordinated response efforts.',
      role: 'Fullstack Developer',
      year: '2025',
      duration: '2 months',
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        'Restful API development with Node.js and Express to handle disaster report submissions and data retrieval.',
        'Visualized disaster data using leaflet.js, enabling users to see real-time impacts on an interactive map.',
        'Visualized disaster history data for trend analysis and reporting.'
      ],
      gallery: [
        seism_1,
        seism_2,
        seism_3,
        seism_4,
        seism_5,
        seism_6,
        seism_7
      ],
      stack: [
        { name: 'React', category: 'Frontend' },
        { name: 'Leaflet.js', category: 'Frontend' },
        { name: 'Tailwind', category: 'Frontend' },
        { name: 'Restful API', category: 'Backend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express', category: 'Backend' },
        { name: 'SQL', category: 'Backend' },
      ],
    },
  },
]