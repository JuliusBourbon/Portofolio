export interface TechItem {
  name: string;
  color: string;
  textColor?: string;
}

export const TechStack: TechItem[] = [
  {
    name: 'React',
    color: 'bg-sky-300',
    textColor: 'text-sky-900',
  },
  {
    name: 'React Native',
    color: 'bg-cyan-300',
    textColor: 'text-cyan-900',
  },
  {
    name: 'Node.js',
    color: 'bg-green-800',
    textColor: 'text-green-300',
  },
  {
    name: 'TypeScript',
    color: 'bg-blue-500',
    textColor: 'text-white',
  },
  {
    name: 'Python',
    color: 'bg-blue-700',
    textColor: 'text-yellow-300',
  },
  {
    name: 'AWS',
    color: 'bg-orange-300',
    textColor: 'text-white',
  },
  {
    name: 'Laravel',
    color: 'bg-orange-400',
    textColor: 'text-red-900',
  },
  {
    name: 'Tailwind',
    color: 'bg-cyan-300',
    textColor: 'text-white',
  },
  {
    name: 'Docker',
    color: 'bg-sky-300',
    textColor: 'text-sky-950',
  },
  {
    name: 'Kotlin',
    color: 'bg-purple-300',
    textColor: 'text-purple-950',
  },
]