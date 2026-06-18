import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

@Component({
  selector: 'app-variant-glasslight',
  templateUrl: './variant-glasslight.component.html',
  styleUrls: ['./variant-glasslight.component.css'],
})
export class VariantGlasslightComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;
  constructor(private variants: VariantService) {}
  remix(): void {
    this.variants.regenerate();
  }
}
