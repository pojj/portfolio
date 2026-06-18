import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

@Component({
  selector: 'app-variant-aurora',
  templateUrl: './variant-aurora.component.html',
  styleUrls: ['./variant-aurora.component.css'],
})
export class VariantAuroraComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;
  constructor(private variants: VariantService) {}
  remix(): void {
    this.variants.regenerate();
  }
}
