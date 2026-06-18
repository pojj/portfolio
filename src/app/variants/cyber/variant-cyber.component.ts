import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

@Component({
  selector: 'app-variant-cyber',
  templateUrl: './variant-cyber.component.html',
  styleUrls: ['./variant-cyber.component.css'],
})
export class VariantCyberComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;

  constructor(private variants: VariantService) {}

  remix(): void {
    this.variants.regenerate();
  }
}
