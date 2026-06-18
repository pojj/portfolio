import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

@Component({
  selector: 'app-variant-synthwave',
  templateUrl: './variant-synthwave.component.html',
  styleUrls: ['./variant-synthwave.component.css'],
})
export class VariantSynthwaveComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;

  constructor(private variants: VariantService) {}

  remix(): void {
    this.variants.regenerate();
  }
}
