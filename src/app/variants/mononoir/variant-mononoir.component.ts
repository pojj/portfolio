import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

@Component({
  selector: 'app-variant-mononoir',
  templateUrl: './variant-mononoir.component.html',
  styleUrls: ['./variant-mononoir.component.css'],
})
export class VariantMononoirComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;
  constructor(private variants: VariantService) {}
  remix(): void {
    this.variants.regenerate();
  }
}
