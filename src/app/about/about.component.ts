import { Component } from '@angular/core';

interface Focus {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  focuses: Focus[] = [
    {
      icon: 'ai',
      title: 'AI & Agents',
      text: 'Copilots, multi-agent systems, MCP tools, and LLM tool-calling workflows that ship to real users.',
    },
    {
      icon: 'stack',
      title: 'Full-Stack',
      text: 'End-to-end product work across React, Next.js, Flask, Node, and SQL — from UI to billing.',
    },
    {
      icon: 'infra',
      title: 'Scale & Infra',
      text: 'Distributed architectures, queues and workflows, load testing, and pipelines built to hold up.',
    },
  ];
}
