import { Component } from '@angular/core';

interface Job {
  company: string;
  role: string;
  period: string;
  blurb: string;
  points: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      company: 'Skydio',
      role: 'Cloud Software Intern',
      period: 'May 2026 — Jul 2026',
      blurb:
        'Built an AI Copilot that lets operators plan and generate X10 drone missions through natural language.',
      points: [
        'Designed and built an AI Copilot that turns natural-language intent into safe, executable drone missions.',
        'Developed MCP tools for telemetry, mission control, geospatial reasoning, and trajectory analysis — integrating Mapbox and the Overpass API for terrain, world context, and infrastructure data.',
        'Prompt-engineered Agent Skills and tool-call workflows so the copilot can audit, explain, generate, and safely modify mission plans with visible diffs, operator approval, and sub-5-second responses.',
        'Implemented a multi-agent system with specialized agents for both real-time and pre-planned operations.',
        'Deployed the Vercel AI SDK on AWS Bedrock for multimodal and streaming support.',
      ],
      tags: ['TypeScript', 'Vercel AI SDK', 'AWS Bedrock', 'MCP', 'Mapbox', 'Multi-agent'],
    },
    {
      company: 'HeyGen',
      role: 'Software Engineer Intern',
      period: 'Sep 2025 — Dec 2025',
      blurb:
        'Shipped an AI email-to-video pipeline and usage-metered billing across the full stack.',
      points: [
        'Co-developed an AI Email-to-Video pipeline integrated with Amazon SES, using Temporal workflows and Redis queues to orchestrate multi-stage generation: validation, attachment parsing, context extraction, prompt assembly, inference, transcoding, and delivery.',
        'Implemented usage-metered billing for the HeyGen API (tiered, graduated, and overage plans), driving $30k+/mo in enterprise revenue with fullstack work across React, Flask, MySQL, and Stripe.',
        'Built a Slack App that pulls context from DMs, channels, and threads to generate AI videos straight from messages.',
        'Ran PostHog A/B tests on new upsell flows, improving add-on sales by 24% through optimized CTAs.',
      ],
      tags: ['React', 'Flask', 'MySQL', 'Stripe', 'Temporal', 'Redis', 'PostHog'],
    },
    {
      company: 'Cyberium Group',
      role: 'Software Engineer Intern',
      period: 'Jan 2025 — Apr 2025',
      blurb:
        'Re-architected an ad-recommendation backend for scale and built Web3 wallet tooling.',
      points: [
        'Refactored a Node.js ad-recommendation backend into an N-tiered architecture, handling an 80% increase in load and reducing crashes by 40% via distributed deployment of individual layers for horizontal scaling.',
        'Built wallet key management and integrated Web3Auth with OAuth2 for a Webpack + React Chrome extension.',
        'Scaled a Node Socket.IO architecture using Azure PubSub as the adapter to manage up to 1,000 concurrent connections across multiple Azure VM instances.',
        'Validated reliability at 300 socket events/second using Artillery load testing.',
      ],
      tags: ['Node.js', 'Socket.IO', 'Azure PubSub', 'Web3Auth', 'OAuth2', 'React'],
    },
    {
      company: 'National Academy of Sciences, Canada',
      role: 'Fullstack Developer',
      period: 'Jun 2023 — Aug 2023',
      blurb:
        'Built and handed off a maintainable site for a non-profit, with analytics baked in.',
      points: [
        'Built a WordPress site for a non-profit to showcase news articles, publications, awards, and scientists.',
        'Used modular Elementor so non-technical staff could maintain the site, and trained 2 users to publish content independently.',
        'Created a dashboard tracking 400+ monthly page views with per-article analytics.',
      ],
      tags: ['WordPress', 'Elementor', 'PHP', 'MySQL'],
    },
    {
      company: 'Falcon Technologies',
      role: 'Data Engineer Intern',
      period: 'Sep 2022 — Dec 2022',
      blurb:
        'Turned fragmented public records into one clean, queryable source of truth.',
      points: [
        'Aggregated licensee data from 8 provinces and 30 states into a standardized PostgreSQL database.',
        'Scheduled Python + Selenium scrapers to periodically pull and update license information.',
        'Maintained 1M+ up-to-date license entries in a common, searchable format.',
      ],
      tags: ['Python', 'Selenium', 'PostgreSQL', 'ETL'],
    },
  ];
}
