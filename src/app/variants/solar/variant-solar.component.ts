import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';

interface SolarWork {
  index: string;
  title: string;
  kind: string;
  year: string;
  blurb: string;
  url: string;
  img: string;
  stack: string[];
}

interface SolarRole {
  company: string;
  title: string;
  years: string;
  summary: string;
  stack: string[];
}

@Component({
  selector: 'app-variant-solar',
  templateUrl: './variant-solar.component.html',
  styleUrls: ['./variant-solar.component.css'],
})
export class VariantSolarComponent {
  constructor(private variants: VariantService) {}

  remix(): void {
    this.variants.regenerate();
  }

  navLinks = [
    { id: 's-top', label: 'Top' },
    { id: 's-work', label: 'Work' },
    { id: 's-journey', label: 'Journey' },
    { id: 's-toolkit', label: 'Toolkit' },
    { id: 's-hello', label: 'Hello' },
  ];

  // Work leads here (a different ordering than the other designs)
  work: SolarWork[] = [
    {
      index: '01',
      title: 'Macro Manager',
      kind: 'Full-stack + ML',
      year: '2024',
      blurb:
        'A nutrition companion for logging meals and composing recipes. It threads a thousand-plus meals, ingredients, and recipes through MongoDB, secures sessions with hand-rolled JWT auth, and reads a plate\u2019s nutrition straight from a photo.',
      url: 'https://github.com/pojj/macro-manager',
      img: 'assets/images/MacroManager.png',
      stack: ['Next.js', 'MongoDB', 'PyTorch'],
    },
    {
      index: '02',
      title: 'Meal Nutrition AI',
      kind: 'Computer vision',
      year: '2024',
      blurb:
        'A convolutional model that recognizes a dish from one photograph and returns its nutrition. Transfer-trained on Food-101 to 81% top-1 accuracy and served behind a small Flask API.',
      url: 'https://github.com/pojj/Food-CNN/',
      img: 'assets/images/FoodAI.png',
      stack: ['Python', 'PyTorch', 'Flask'],
    },
    {
      index: '03',
      title: 'Joustle',
      kind: 'Game',
      year: '2023',
      blurb:
        'Wordle, reimagined as a duel \u2014 a daily word puzzle fused with head-to-head, player-versus-player combat.',
      url: 'https://github.com/pojj/wordle-variant',
      img: 'assets/images/Joustle.png',
      stack: ['React', 'JavaScript'],
    },
    {
      index: '04',
      title: 'Tetris AI',
      kind: 'Game + AI',
      year: '2022',
      blurb:
        'The classic, rebuilt \u2014 with local multiplayer and a tunable AI opponent you can dial from gentle to merciless.',
      url: 'https://github.com/pojj/tetris-ai',
      img: 'assets/images/tetris.png',
      stack: ['Python', 'PyGame'],
    },
  ];

  // Most recent first
  roles: SolarRole[] = [
    {
      company: 'Skydio',
      title: 'Cloud Software Intern',
      years: '2026',
      summary:
        'Designed an AI copilot that translates plain language into safe, executable X10 drone missions \u2014 with MCP tools for telemetry, mapping, and trajectory reasoning, a multi-agent core, and sub-five-second responses on AWS Bedrock.',
      stack: ['TypeScript', 'Vercel AI SDK', 'AWS Bedrock', 'MCP'],
    },
    {
      company: 'HeyGen',
      title: 'Software Engineer Intern',
      years: '2025',
      summary:
        'Shipped an AI email-to-video pipeline on Temporal and Redis, and built usage-metered billing that powered $30k+/mo of enterprise revenue across React, Flask, MySQL, and Stripe.',
      stack: ['React', 'Flask', 'Stripe', 'Temporal'],
    },
    {
      company: 'Cyberium Group',
      title: 'Software Engineer Intern',
      years: '2025',
      summary:
        'Re-architected a Node.js ad-recommendation backend into tiers that absorbed 80% more load with 40% fewer crashes, and scaled Socket.IO to 1,000 concurrent connections via Azure PubSub.',
      stack: ['Node.js', 'Socket.IO', 'Azure', 'Web3Auth'],
    },
    {
      company: 'NAS Canada',
      title: 'Fullstack Developer',
      years: '2023',
      summary:
        'Built a maintainable WordPress presence for a non-profit, trained the team to run it, and wired in analytics for 400+ monthly readers.',
      stack: ['WordPress', 'PHP', 'MySQL'],
    },
    {
      company: 'Falcon Technologies',
      title: 'Data Engineer Intern',
      years: '2022',
      summary:
        'Unified licensing records from 8 provinces and 30 states into a single PostgreSQL source of truth \u2014 over a million entries, kept fresh by scheduled scrapers.',
      stack: ['Python', 'Selenium', 'PostgreSQL'],
    },
  ];

  toolkit = [
    {
      label: 'Languages',
      items: 'TypeScript · JavaScript · Python · Java · C · C++ · SQL · PHP · Racket',
    },
    {
      label: 'Frameworks',
      items: 'React · Next.js · Express · Flask · PyTorch · NumPy · Selenium · Tailwind · Material UI · WordPress',
    },
    {
      label: 'Platforms & Tools',
      items: 'AWS · Azure · Docker · PostgreSQL · MongoDB · Temporal · Redis · Stripe · Vercel AI SDK · Socket.IO · PostHog · Git',
    },
  ];
}
