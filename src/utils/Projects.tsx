// Seism Image
const seism_1 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087387/seism_1_d0nigx.png'
const seism_2 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087387/seism_2_lojcjw.png'
const seism_3 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087387/seism_3_zbak1s.png'
const seism_4 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087387/seism_4_kwiinp.png'
const seism_5 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087387/seism_5_ggmrpp.png'
const seism_6 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087388/seism_6_nsrhjx.png'
const seism_7 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087388/seism_7_m8k5df.png'

// Dictionary API Image
const dictx_1 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777089111/dictx_1_s1eizg.png'
const dictx_2 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777089112/dictx_2_lrodi9.png'
const dictx_3 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777089112/dictx_3_lws95k.png'

// Scribely Image
const scribely_1 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777089129/scribely_1_ngtuj5.png'
const scribely_2 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777089130/scribely_2_eldcvd.png'
const scribely_3 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777089130/scribely_3_kgqswi.png'

// Visualization of Indonesian employment data Image
const visualization_1 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777102779/dataVisualization_2_ccqodr.png'
const visualization_2 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777102779/dataVisulization_1_s7bldx.png'

// Sentiment Analysis Image
const sentiment_1 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777108481/sentiment_1_pivdti.png'
const sentiment_2 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777108481/sentiment_2_scou9a.png'
const sentiment_3 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777108482/sentiment_3_mti7zl.png'

// Terna Image
const terna_1 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777110820/Terna_1_c2wanj.png'
const terna_2 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777110821/Terna_2_q7vqyf.png'
const terna_3 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777110822/Terna_3_eq3bvh.png'

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
    title: 'Dictionary API',
    description: 'A simple multi language dictionary API',
    image: dictx_1,
    detail: {
      overview:
        'Dictionary API or i called it Dictx-API was build with the goal of creating an API that provides word collections from multiple languages. Also this is actually my first time learning and creating an API.',
      role: 'Fullstack Developer',
      year: '2025',
      duration: '1 week',
      liveUrl: 'https://dictx-doc.vercel.app/',
      githubUrl: 'https://github.com/JuliusBourbon/dictx-api',
      highlights: [
        'Easy and free to use',
        'Currently available languages are English, Indonesia, Japan, Franch, Germany and Italy'
      ],
      gallery: [dictx_1, dictx_2, dictx_3],
      stack: [
        { name: 'HTML', category: 'Frontend' },
        { name: 'Javascript', category: 'Backend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express', category: 'Backend' },
      ],
    },
  },
  {
    id: 3,
    title: 'Scribely',
    description: 'An example implementation for Dictionary API',
    image: scribely_1,
    detail: {
      overview:
        'Using Dictx-API, I created a simple web application called Scribely that offers an interactive and responsive interface to help User find words that matching user Input. It help you to solve Wordle :p.',
      role: 'Fullstack Developer',
      year: '2025',
      duration: '2 weeks',
      liveUrl: 'https://word-scribely.vercel.app/',
      githubUrl: 'https://github.com/JuliusBourbon/Scribely',
      highlights: [
        'Interactive and responsive interface for searching words',
        'Integration with Dictx-API for seamless word lookup',
        'Wordle Cheat Tool',

      ],
      gallery: [scribely_1, scribely_2, scribely_3],
      stack: [
        { name: 'React', category: 'Frontend' },
        { name: 'Tailwind', category: 'Frontend' },
        { name: 'Restful API', category: 'Backend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express', category: 'Backend' },

      ],
    },
  },
  {
    id: 4,
    title: 'Visualization of Indonesian employment data',
    description: 'A Dashboard to visualize Indonesian employment data',
    image: visualization_1,
    detail: {
      overview:
        'A dashboard to visualize Indonesian employment data across different regions and time periods.',
      role: 'Data Analyst',
      year: '2025',
      duration: '3 weeks',
      liveUrl: 'https://visualisasi-data-ketenagakerjaan.streamlit.app/',
      githubUrl: 'https://github.com/JuliusBourbon/visualisasi-data-ketenagakerjaan',
      highlights: [
        'Data collection and preprocessing using Python and Pandas to clean and structure the employment data for analysis.',
        'Data visualization using Streamlit and Plotly to create interactive charts and graphs that highlight employment trends and patterns across different regions and time periods.',
        'Implemented features such as filtering by region, time period, and employment type to allow users to explore the data in depth.'
      ],
      gallery: [visualization_2, visualization_1],
      stack: [
        { name: 'Python', category: '' },
        { name: 'Pandas', category: '' },
        { name: 'Streamlit', category: '' },
        { name: 'Plotly', category: '' },
      ],
    },
  },
  {
    id: 5,
    title: 'Sentiment Analysis on X Tweets',
    description: 'Conducting sentiment analysis on tweets about \'kemenkeu\' on platform X',
    image: sentiment_1,
    detail: {
      overview:
        'In September 2025, there was a change in the Indonesian Ministry of Finance. This sentiment analysis was conducted to assess people\'s reactions on platform X.',
      role: 'Data Analyst',
      year: '2025',
      duration: '1 weeks',
      liveUrl: '#',
      githubUrl: 'https://github.com/JuliusBourbon/Analisis-Sentimen-Kemenkeu',
      highlights: [
        'Data collection using X API to gather tweets mentioning "kemenkeu" over a specified time period.',
        'Data preprocessing using Python and NLTK to clean the tweet text, remove stop words, and prepare the data for sentiment analysis.',
        'Visualized wordcloud of the most frequently used words in the tweets to identify common themes and topics of discussion.',
        'Conducted sentiment analysis using a pre-trained model to classify the tweets as positive, negative, or neutral'
      ],
      gallery: [sentiment_1, sentiment_2, sentiment_3],
      stack: [
        { name: 'Python', category: 'Backend' },
        { name: 'Ipynb', category: 'Backend' },
        { name: 'NLTK', category: 'Backend' },
      ],
    },
  },
  {
    id: 6,
    title: 'Terna',
    description: 'A Chinese poker sorter',
    image: terna_1,
    detail: {
      overview:
        'Terna is a Chinese poker sorter that helps players organize their cards according to the rules of Chinese poker. It provides an intuitive interface for players to input their cards and receive optimal sorting suggestions based on the game\'s hand ranking system.',
      role: 'Fullstack Developer',
      year: '2025',
      duration: '1 months',
      liveUrl: 'https://playterna.vercel.app/',
      githubUrl: 'https://github.com/JuliusBourbon/Terna',
      highlights: [
        'Implemented a user-friendly interface using React and Tailwind CSS for players to input their cards and receive sorting suggestions.',
        'Using Greedy algorithm to generate optimal card arrangements based on the hand ranking system of Chinese poker.',
      ],
      gallery: [terna_1, terna_2, terna_3],
      stack: [
        { name: 'React', category: 'Frontend' },
        { name: 'Tailwind', category: 'Frontend' },
      ],
    },
  },
]