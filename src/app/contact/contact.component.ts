import { Component } from '@angular/core';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formAction = 'https://formspree.io/f/xnqrgjvd';

  links: ContactLink[] = [
    {
      label: 'Email',
      value: 'williambsong@gmail.com',
      href: 'mailto:williambsong@gmail.com',
      icon: 'mail',
    },
    {
      label: 'GitHub',
      value: 'github.com/pojj',
      href: 'https://github.com/pojj',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      value: 'in/williambsong',
      href: 'https://www.linkedin.com/in/williambsong/',
      icon: 'linkedin',
    },
  ];
}
