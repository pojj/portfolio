import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

@Component({
  selector: 'app-variant-arctic',
  templateUrl: './variant-arctic.component.html',
  styleUrls: ['./variant-arctic.component.css'],
})
export class VariantArcticComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;

  constructor(private variants: VariantService) {}

  remix(): void {
    this.variants.regenerate();
  }
}
