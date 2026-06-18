/**
 * Canonical portfolio facts, shared by the newer design variants so the data
 * stays consistent. Each design presents/relabels this in its own way.
 */

export const PROFILE = {
  name: 'William Song',
  first: 'William',
  last: 'Song',
  role: 'Software Engineer',
  tagline: 'AI · Full-Stack · Systems',
  location: 'Vancouver, Canada',
  education: 'B.Sc. Computer Science, UBC',
  gpa: '4.0',
  grad: 'May 2027',
  blurb:
    "Computer science student building autonomous systems, agentic workflows, and platform infrastructure.",
  email: 'williambsong@gmail.com',
  github: 'https://github.com/pojj',
  githubShort: 'github.com/pojj',
  linkedin: 'https://www.linkedin.com/in/williambsong/',
  linkedinShort: 'in/williambsong',
  resume: 'assets/CV.pdf',
  formspree: 'https://formspree.io/f/xnqrgjvd',
};

export interface ExpItem {
  company: string;
  role: string;
  period: string;
  year: string;
  summary: string;
  points: string[];
  tags: string[];
}

export const EXPERIENCE: ExpItem[] = [
  {
    company: 'Skydio',
    role: 'Cloud Software Intern',
    period: 'May 2026 — Jul 2026',
    year: '2026',
    summary:
      'Built an AI copilot that turns natural language into safe, executable X10 drone missions.',
    points: [
      'MCP tools for telemetry, mission control, geospatial + trajectory reasoning (Mapbox / Overpass).',
      'Multi-agent core for real-time and pre-planned ops with sub-5s responses.',
      'Deployed the Vercel AI SDK on AWS Bedrock for multimodal + streaming.',
    ],
    tags: ['TypeScript', 'Vercel AI SDK', 'AWS Bedrock', 'MCP', 'Mapbox'],
  },
  {
    company: 'HeyGen',
    role: 'Software Engineer Intern',
    period: 'Sep 2025 — Dec 2025',
    year: '2025',
    summary:
      'Shipped an AI email-to-video pipeline and usage-metered billing across the stack.',
    points: [
      'Temporal + Redis pipeline on Amazon SES for multi-stage video generation.',
      'Usage-metered billing driving $30k+/mo enterprise revenue (React, Flask, MySQL, Stripe).',
      'PostHog A/B tests improved add-on sales by 24%.',
    ],
    tags: ['React', 'Flask', 'MySQL', 'Stripe', 'Temporal', 'Redis'],
  },
  {
    company: 'Cyberium Group',
    role: 'Software Engineer Intern',
    period: 'Jan 2025 — Apr 2025',
    year: '2025',
    summary:
      'Re-architected an ad-recommendation backend for scale and built Web3 wallet tooling.',
    points: [
      'N-tiered Node.js backend: +80% load capacity, -40% crashes.',
      'Scaled Socket.IO to 1,000 concurrent connections via Azure PubSub.',
      'Web3Auth + OAuth2 wallet keys for a React/Webpack extension.',
    ],
    tags: ['Node.js', 'Socket.IO', 'Azure', 'Web3Auth', 'OAuth2'],
  },
  {
    company: 'NAS Canada',
    role: 'Fullstack Developer',
    period: 'Jun 2023 — Aug 2023',
    year: '2023',
    summary:
      'Built and handed off a maintainable site for a non-profit, with analytics baked in.',
    points: [
      'Modular WordPress build; trained 2 non-technical staff to maintain it.',
      'Analytics dashboard for 400+ monthly readers.',
    ],
    tags: ['WordPress', 'PHP', 'MySQL'],
  },
  {
    company: 'Falcon Technologies',
    role: 'Data Engineer Intern',
    period: 'Sep 2022 — Dec 2022',
    year: '2022',
    summary:
      'Turned fragmented public records into one clean, queryable source of truth.',
    points: [
      'Unified licensing data from 8 provinces + 30 states into one PostgreSQL DB.',
      'Maintained 1M+ entries with scheduled Python/Selenium scrapers.',
    ],
    tags: ['Python', 'Selenium', 'PostgreSQL'],
  },
];

export interface ProjectItem {
  title: string;
  desc: string;
  tags: string[];
  url: string;
  img: string;
  year: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Macro Manager',
    desc:
      'Full-stack nutrition app: 1000+ linked meals/ingredients/recipes in MongoDB, JWT auth, and AI that reads nutrition from a photo.',
    tags: ['Next.js', 'MongoDB', 'PyTorch'],
    url: 'https://github.com/pojj/macro-manager',
    img: 'assets/images/MacroManager.png',
    year: '2024',
  },
  {
    title: 'Meal Nutrition AI',
    desc:
      'A CNN that identifies a dish from one photo and returns nutrition. 81% top-1 on Food-101, served via Flask.',
    tags: ['Python', 'PyTorch', 'Flask'],
    url: 'https://github.com/pojj/Food-CNN/',
    img: 'assets/images/FoodAI.png',
    year: '2024',
  },
  {
    title: 'Joustle',
    desc: 'Wordle reimagined as a duel — a word puzzle crossed with player-vs-player combat.',
    tags: ['React', 'JavaScript'],
    url: 'https://github.com/pojj/wordle-variant',
    img: 'assets/images/Joustle.png',
    year: '2023',
  },
  {
    title: 'Tetris AI',
    desc: 'Tetris with local multiplayer and a tunable AI opponent you can dial up or down.',
    tags: ['Python', 'PyGame'],
    url: 'https://github.com/pojj/tetris-ai',
    img: 'assets/images/tetris.png',
    year: '2022',
  },
  {
    title: 'Sudoku',
    desc: 'A ground-up Sudoku build in Java to drill object-oriented design and the Swing toolkit.',
    tags: ['Java', 'Swing', 'OOP'],
    url: 'https://github.com/pojj/Sudoku',
    img: 'assets/images/Sudoku.png',
    year: '2022',
  },
  {
    title: '2D Platformer',
    desc: 'A 2D runner dodging swarming enemies, with sprite-sheet character animation.',
    tags: ['Python', 'SimpleGUI'],
    url: 'https://github.com/pojj/Programming_11',
    img: 'assets/images/AmongusRunner.png',
    year: '2022',
  },
];

export interface SkillGroupData {
  label: string;
  items: string[];
}

export const SKILLS: SkillGroupData[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'SQL', 'PHP', 'Racket'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Next.js', 'Express', 'Flask', 'PyTorch', 'NumPy', 'Selenium', 'Tailwind', 'Material UI'],
  },
  {
    label: 'Platforms & Tools',
    items: ['AWS', 'Azure', 'Docker', 'PostgreSQL', 'MongoDB', 'Temporal', 'Redis', 'Stripe', 'Vercel AI SDK', 'Socket.IO', 'PostHog', 'Git'],
  },
];
