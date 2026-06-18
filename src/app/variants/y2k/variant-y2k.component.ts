import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

@Component({
  selector: 'app-variant-y2k',
  templateUrl: './variant-y2k.component.html',
  styleUrls: ['./variant-y2k.component.css'],
})
export class VariantY2kComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;
  constructor(private variants: VariantService) {}
  remix(): void {
    this.variants.regenerate();
  }
}
