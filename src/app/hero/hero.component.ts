import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = [
    'Software Engineer',
    'AI & Agents Engineer',
    'Full-Stack Developer',
    'Systems Builder',
  ];

  currentRole = this.roles[0];
  private index = 0;
  private timer?: ReturnType<typeof setInterval>;

  stats = [
    { value: '4.0', label: 'GPA · UBC CS' },
    { value: '5+', label: 'Eng internships' },
    { value: '1M+', label: 'Records shipped' },
  ];

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.index = (this.index + 1) % this.roles.length;
      this.currentRole = this.roles[this.index];
    }, 2600);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
