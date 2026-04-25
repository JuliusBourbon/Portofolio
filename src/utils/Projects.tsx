// Seism Image
const seism_1 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087387/seism_1_d0nigx.png'
const seism_2 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087387/seism_2_lojcjw.png'
const seism_3 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087387/seism_3_zbak1s.png'
const seism_4 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087387/seism_4_kwiinp.png'
const seism_5 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087387/seism_5_ggmrpp.png'
const seism_6 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087388/seism_6_nsrhjx.png'
const seism_7 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087388/seism_7_m8k5df.png'

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
  {
    id: 2,
    title: 'Dictx API',
    description: 'A simple multi language dictionary API',
    image: seism_1,
    detail: {
      overview:
        '',
      role: 'Fullstack Developer',
      year: '2025',
      duration: '2 months',
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        ''
      ],
      gallery: [],
      stack: [
        { name: '', category: '' },
      ],
    },
  },
  {
    id: 3,
    title: 'Dictx API',
    description: 'A simple multi language dictionary API',
    image: seism_1,
    detail: {
      overview:
        '',
      role: 'Fullstack Developer',
      year: '2025',
      duration: '2 months',
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        ''
      ],
      gallery: [],
      stack: [
        { name: '', category: '' },
      ],
    },
  },
]