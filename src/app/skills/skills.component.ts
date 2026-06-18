import { Component } from '@angular/core';

interface SkillGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      label: 'Languages',
      items: [
        'TypeScript',
        'JavaScript',
        'Python',
        'Java',
        'C',
        'C++',
        'SQL',
        'PHP',
        'Racket',
      ],
    },
    {
      label: 'Frameworks & Libraries',
      items: [
        'React',
        'Next.js',
        'Express',
        'Flask',
        'PyTorch',
        'NumPy',
        'Selenium',
        'Tailwind CSS',
        'Material UI',
        'WordPress',
      ],
    },
    {
      label: 'Tools & Platforms',
      items: [
        'AWS',
        'Azure',
        'Docker',
        'PostgreSQL',
        'MongoDB',
        'Temporal',
        'Redis',
        'Stripe',
        'Vercel AI SDK',
        'Socket.IO',
        'PostHog',
        'Git',
      ],
    },
  ];
}
