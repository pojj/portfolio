import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';

interface LogEntry {
  ts: string;
  company: string;
  role: string;
  lines: string[];
  tags: string[];
}

interface RepoEntry {
  name: string;
  desc: string;
  lang: string;
  url: string;
}

@Component({
  selector: 'app-variant-terminal',
  templateUrl: './variant-terminal.component.html',
  styleUrls: ['./variant-terminal.component.css'],
})
export class VariantTerminalComponent {
  formAction = 'https://formspree.io/f/xnqrgjvd';

  constructor(private variants: VariantService) {}

  remix(): void {
    this.variants.regenerate();
  }

  boot = [
    'william@portfolio:~$ ./init.sh',
    'loading profile ............ ok',
    'mounting experience ........ ok',
    'building projects .......... ok',
    'status: available for hire',
  ];

  about = [
    'CS @ University of British Columbia  ·  GPA 4.0  ·  grad May 2027',
    '',
    'I build AI copilots and agentic systems, then wire them into',
    'full-stack infrastructure that survives production traffic.',
    'Currently shipping drone-mission AI at Skydio.',
  ];

  log: LogEntry[] = [
    {
      ts: '2026.05',
      company: 'Skydio',
      role: 'Cloud Software Intern',
      lines: [
        'Built an AI copilot that turns natural language into safe X10 drone missions.',
        'Wrote MCP tools for telemetry, mission control, geospatial + trajectory reasoning.',
        'Multi-agent core for real-time and pre-planned ops; sub-5s responses on AWS Bedrock.',
      ],
      tags: ['typescript', 'vercel-ai-sdk', 'bedrock', 'mcp', 'mapbox'],
    },
    {
      ts: '2025.09',
      company: 'HeyGen',
      role: 'Software Engineer Intern',
      lines: [
        'Co-built an AI email-to-video pipeline on Temporal + Redis (SES ingest).',
        'Shipped usage-metered billing => $30k+/mo enterprise revenue.',
        'A/B tested upsell flows with PostHog, +24% add-on sales.',
      ],
      tags: ['react', 'flask', 'mysql', 'stripe', 'temporal', 'redis'],
    },
    {
      ts: '2025.01',
      company: 'Cyberium Group',
      role: 'Software Engineer Intern',
      lines: [
        'Re-architected a Node ad-rec backend => +80% load, -40% crashes.',
        'Scaled Socket.IO to 1000 concurrent conns via Azure PubSub.',
        'Web3Auth + OAuth2 wallet keys for a React/Webpack extension.',
      ],
      tags: ['node.js', 'socket.io', 'azure', 'web3auth'],
    },
    {
      ts: '2023.06',
      company: 'NAS Canada',
      role: 'Fullstack Developer',
      lines: [
        'Built a maintainable WordPress site for a non-profit + trained the team.',
        'Wired analytics dashboard for 400+ monthly readers.',
      ],
      tags: ['wordpress', 'php', 'mysql'],
    },
    {
      ts: '2022.09',
      company: 'Falcon Technologies',
      role: 'Data Engineer Intern',
      lines: [
        'Unified licensing data: 8 provinces + 30 states => 1 PostgreSQL DB.',
        'Maintained 1M+ entries with scheduled Python/Selenium scrapers.',
      ],
      tags: ['python', 'selenium', 'postgresql'],
    },
  ];

  repos: RepoEntry[] = [
    {
      name: 'macro-manager',
      desc: 'Meal + recipe tracker; 1000+ linked docs in MongoDB; AI nutrition from a photo.',
      lang: 'Next.js',
      url: 'https://github.com/pojj/macro-manager',
    },
    {
      name: 'Food-CNN',
      desc: 'CNN that reads nutrition from a dish photo; 81% top-1 on Food-101; Flask API.',
      lang: 'PyTorch',
      url: 'https://github.com/pojj/Food-CNN/',
    },
    {
      name: 'wordle-variant',
      desc: 'Joustle — Wordle crossed with player-vs-player combat.',
      lang: 'React',
      url: 'https://github.com/pojj/wordle-variant',
    },
    {
      name: 'tetris-ai',
      desc: 'Tetris with local multiplayer and a tunable AI opponent.',
      lang: 'Python',
      url: 'https://github.com/pojj/tetris-ai',
    },
    {
      name: 'Sudoku',
      desc: 'Ground-up Sudoku in Java to drill OOP and the Swing toolkit.',
      lang: 'Java',
      url: 'https://github.com/pojj/Sudoku',
    },
    {
      name: 'Programming_11',
      desc: '2D runner dodging swarming enemies; sprite-sheet animation.',
      lang: 'Python',
      url: 'https://github.com/pojj/Programming_11',
    },
  ];

  skills: { key: string; val: string }[] = [
    { key: 'languages', val: 'typescript, javascript, python, java, c, c++, sql, php, racket' },
    { key: 'frameworks', val: 'react, next.js, express, flask, pytorch, numpy, selenium, tailwind' },
    { key: 'platforms', val: 'aws, azure, docker, postgresql, mongodb, temporal, redis' },
    { key: 'tools', val: 'stripe, vercel-ai-sdk, socket.io, posthog, git' },
  ];
}
