import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

@Component({
  selector: 'app-variant-lava',
  templateUrl: './variant-lava.component.html',
  styleUrls: ['./variant-lava.component.css'],
})
export class VariantLavaComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;

  constructor(private variants: VariantService) {}

  remix(): void {
    this.variants.regenerate();
  }
}
